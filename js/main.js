/* ==========================================================================
   Galabau Jusufi – Interaktionen
   ========================================================================== */
(() => {
  'use strict';

  // Kontaktformular-Einstellungen:
  // Ohne Web3Forms-Key öffnet das Formular das E-Mail-Programm des Besuchers (mailto).
  // Mit Key (kostenlos auf https://web3forms.com) wird die Anfrage direkt per E-Mail zugestellt.
  const CONFIG = {
    web3formsKey: '',
    email: 'info@galabau-jusufi.de'
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

  // ---------- Kontaktformular ----------
  const form = document.getElementById('contact-form');
  if (form) {
    const status = form.querySelector('.form-status');
    const submit = form.querySelector('button[type="submit"]');

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
      if (data.get('botcheck')) return;

      const service = data.get('service') || 'Allgemeine Anfrage';
      const subject = `Anfrage über die Webseite: ${service}`;

      if (!CONFIG.web3formsKey) {
        const body = [
          `Name: ${data.get('name')}`,
          `Telefon: ${data.get('phone') || '-'}`,
          `E-Mail: ${data.get('email')}`,
          `Ort: ${data.get('location') || '-'}`,
          `Leistung: ${service}`,
          '',
          data.get('message')
        ].join('\n');
        window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus('Ihr E-Mail-Programm wurde geöffnet – bitte senden Sie die Nachricht dort ab.', 'success');
        return;
      }

      data.append('access_key', CONFIG.web3formsKey);
      data.append('subject', subject);
      data.append('from_name', 'Webseite Galabau Jusufi');
      data.delete('botcheck');

      submit.disabled = true;
      setStatus('Wird gesendet …');

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data
        });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message || 'Fehler');
        form.reset();
        setStatus('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.', 'success');
      } catch (err) {
        setStatus('Das hat leider nicht geklappt. Bitte rufen Sie uns an oder schreiben Sie uns eine E-Mail.', 'error');
      } finally {
        submit.disabled = false;
      }
    });
  }
})();
