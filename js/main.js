/* ==========================================================================
   Galabau Jusufi – Interaktionen
   ========================================================================== */
(() => {
  'use strict';

  // Formular-Einstellungen:
  // Solange keine Formspark-ID eingetragen ist, öffnet das Formular das E-Mail-Programm des Besuchers (mailto).
  // Mit ID (kostenlos auf https://formspark.io, Dashboard → Formular → „How-to“: der Teil hinter
  // https://submit-form.com/) wird die Nachricht direkt an das Postfach zugestellt.
  const CONFIG = {
    email: 'info@galabau-jusufi.de',
    formspark: {
      'contact-form': '',
      'review-form': ''
    }
  };

  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  const mobileBar = document.querySelector('.mobile-bar');

  // ---------- Header & mobile Aktionsleiste beim Scrollen ----------
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 20);
    if (mobileBar) {
      const threshold = hero ? hero.offsetHeight * 0.6 : 300;
      mobileBar.classList.toggle('is-visible', y > threshold);
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile Navigation ----------
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  const setNav = (open) => {
    document.body.classList.toggle('nav-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    }
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });
    window.matchMedia('(min-width: 921px)').addEventListener('change', (e) => { if (e.matches) setNav(false); });
  }

  // ---------- Aktiven Menüpunkt markieren ----------
  const links = [...document.querySelectorAll('.nav-list a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  // ---------- Einblend-Animationen ----------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Jahreszahl im Footer ----------
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  // ---------- Galerie-Lightbox ----------
  const lightbox = document.getElementById('lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const lbImg = lightbox.querySelector('img');
    const lbCaption = lightbox.querySelector('figcaption');

    document.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-caption strong');
        lbImg.src = img.dataset.full || img.currentSrc || img.src;
        lbImg.alt = img.alt;
        lbCaption.textContent = title ? title.textContent : '';
        lightbox.showModal();
      });
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('[data-close]')) lightbox.close();
    });
  }

  // ---------- Formulare (Anfrage & Bewertung) ----------
  // Betreff und Erfolgsmeldung stehen als data-subject / data-success am <form>.
  // Jede beschriftete Eingabe wird als „Beschriftung: Wert“ übertragen (ohne * und Hinweise in Klammern).
  // Angehakte Checkboxen mit data-label (z. B. Einwilligung zur Veröffentlichung) werden mit „ja“ mitgeschickt.
  const readFields = (form) => [...form.elements]
    .filter((el) => el.name && !el.name.startsWith('_') && el.labels && el.labels.length)
    .filter((el) => el.type !== 'checkbox' || (el.dataset.label && el.checked))
    .map((el) => {
      if (el.type === 'checkbox') return [el.dataset.label, 'ja'];
      const label = el.labels[0].textContent.replace(/\*|\(.*?\)/g, '').trim();
      const value = el.tagName === 'SELECT' ? el.selectedOptions[0].text : el.value.trim();
      return [label, value || '-'];
    });

  document.querySelectorAll('form[data-subject]').forEach((form) => {
    const status = form.querySelector('.form-status');
    const submit = form.querySelector('button[type="submit"]');
    const formId = CONFIG.formspark[form.id];

    const setStatus = (msg, type) => {
      status.textContent = msg;
      status.className = `form-status${type ? ` is-${type}` : ''}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      if (data.get('_honeypot')) return;

      const extra = data.get('service') || (data.get('rating') ? `${data.get('rating')} Sterne` : '');
      const subject = extra ? `${form.dataset.subject}: ${extra}` : form.dataset.subject;
      const fields = readFields(form);

      if (!formId) {
        const body = fields.map(([label, value]) => `${label}: ${value}`).join('\n');
        window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus('Ihr E-Mail-Programm wurde geöffnet – bitte senden Sie die Nachricht dort ab.', 'success');
        return;
      }

      // Felder mit _ steuert Formspark: Betreff, Absendername, Antwortadresse, Spamfalle
      const payload = Object.fromEntries(fields);
      payload._email = { subject, from: 'Webseite Galabau Jusufi' };
      payload._replyto = data.get('email');
      payload._honeypot = '';

      submit.disabled = true;
      setStatus('Wird gesendet …');

      try {
        const res = await fetch(`https://submit-form.com/${formId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        form.reset();
        setStatus(form.dataset.success, 'success');
      } catch (err) {
        setStatus(`Das hat leider nicht geklappt. Bitte rufen Sie uns an oder schreiben Sie an ${CONFIG.email}.`, 'error');
      } finally {
        submit.disabled = false;
      }
    });
  });
})();
