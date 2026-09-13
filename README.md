# Galabau Jusufi – Webseite

Moderne, responsive Webseite für **Galabau Jusufi**, Garten- und Landschaftsbau in Gummersbach (Inhaber: Hamdi Jusufi).

- **Vorschau:** https://oxexjxsxfx.github.io/GalaBau-Jusufi/
- Reines HTML, CSS und JavaScript: kein Build-Schritt, keine Abhängigkeiten
- Optimiert für Smartphone, Tablet und Desktop
- Datenschutzfreundlich: keine Cookies, kein Tracking, keine Google Fonts oder Maps
- Kostenloses Hosting über **GitHub Pages**

## Struktur

```
index.html          Startseite (Leistungen, Über uns, Ablauf, Galerie, Einsatzgebiet, FAQ, Kontakt)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
404.html            Fehlerseite
css/style.css       Gesamtes Design (Farben ganz oben als CSS-Variablen)
js/main.js          Menü, Animationen, Galerie, Kontaktformular
assets/img/         Illustrationen / Bilder
assets/icons/       Favicon
KI-BILDER.md        Prompts und Regeln für KI-generierte Symbolbilder
```

## Offene Punkte vor dem Go-Live

- [ ] E-Mail-Adresse eintragen (Platzhalter `info@galabau-jusufi.de` in `index.html`, `impressum.html`, `datenschutz.html` und `js/main.js`)
- [ ] Domain registrieren und verbinden (siehe unten)
- [ ] Bilder: KI-Symbolbilder oder echte Fotos einbauen (siehe [KI-BILDER.md](KI-BILDER.md))
- [ ] Kontaktformular: E-Mail-Programm (Standard) oder Web3Forms (siehe unten)
- [ ] Impressum und Datenschutz prüfen lassen, danach die gelben Hinweis-Kästen entfernen
- [ ] In allen HTML-Dateien `<meta name="robots" content="noindex, nofollow">` entfernen, damit Google die Seite findet

## Bilder austauschen

1. Bild als `.jpg` oder `.webp` in `assets/img/` ablegen, idealerweise max. 1600 px breit und unter 400 KB
2. In `index.html` `src` und `alt` des jeweiligen Bildes anpassen
3. KI-Bilder bleiben als Symbolbilder gekennzeichnet (Hinweis unter der Galerie)

## Kontaktformular

Ohne weitere Einrichtung öffnet das Formular das E-Mail-Programm des Besuchers mit einer vorausgefüllten Nachricht.

Soll die Anfrage direkt im Postfach landen:

1. Auf [web3forms.com](https://web3forms.com) mit der Ziel-E-Mail kostenlos einen Access Key erstellen
2. Den Key in `js/main.js` bei `web3formsKey` eintragen
3. Den vorbereiteten Web3Forms-Absatz in `datenschutz.html` ergänzen

## Veröffentlichung mit eigener Domain

Die Webseite läuft kostenlos auf GitHub Pages. Für die eigene Domain fallen nur die Domainkosten an.

1. `.de`-Domain bei einem günstigen Anbieter registrieren, z. B. netcup (ca. 5 €/Jahr) oder INWX (ca. 6 €/Jahr)
2. Beim Domainanbieter diese DNS-Einträge setzen:

   | Typ | Name | Wert |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | oxexjxsxfx.github.io |

3. Im Repo eine Datei `CNAME` mit dem Domainnamen anlegen, z. B. `galabau-jusufi.de`
4. Unter GitHub → Settings → Pages die Option **Enforce HTTPS** aktivieren (sobald das Zertifikat bereitsteht)

**E-Mail mit eigener Domain:** Viele Domainanbieter bieten eine kostenlose E-Mail-Weiterleitung an, zum Beispiel von `info@galabau-jusufi.de` an ein bestehendes Postfach.
