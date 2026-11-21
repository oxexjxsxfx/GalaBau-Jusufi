# Galabau Jusufi – Webseite

Moderne, responsive Webseite für **Galabau Jusufi**, Garten- und Landschaftsbau in Gummersbach (Inhaber: Hamdi Jusufi).

- **Vorschau:** https://oxexjxsxfx.github.io/GalaBau-Jusufi/
- Reines HTML, CSS und JavaScript: kein Build-Schritt, keine Abhängigkeiten
- Optimiert für Smartphone, Tablet und Desktop
- Datenschutzfreundlich: keine Cookies, kein Tracking, keine Google Fonts oder Maps
- Kostenloses Hosting über **GitHub Pages**

## Struktur

```
index.html          Startseite (Leistungen, Über uns, Ablauf, Galerie, Bewertungen, Einsatzgebiet, FAQ, Kontakt)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
404.html            Fehlerseite
css/style.css       Gesamtes Design (Farben ganz oben als CSS-Variablen)
js/main.js          Menü, Animationen, Galerie, Kontakt- und Bewertungsformular
assets/img/         Weboptimierte Bilder (JPG)
assets/icons/       Favicon
check24/            Gespeichertes Check24-Profil mit Original-Fotos und Bewertungen (nur lokal, nicht im Repo)
```

## Offene Punkte vor dem Go-Live

- [ ] E-Mail-Adresse eintragen (Platzhalter `info@galabau-jusufi.de` in `index.html`, `impressum.html`, `datenschutz.html` und `js/main.js`)
- [ ] Domain registrieren und verbinden (siehe unten)
- [x] Bilder: echte Fotos aus dem Check24-Profil eingebaut (KI-Symbolbilder entfernt)
- [ ] Google-Unternehmensprofil: Link „Rezension schreiben“ im Abschnitt Bewertungen in `index.html` eintragen und `hidden` entfernen
- [ ] Kontaktformular: E-Mail-Programm (Standard) oder Web3Forms (siehe unten)
- [ ] Impressum und Datenschutz prüfen lassen, danach die gelben Hinweis-Kästen entfernen
- [ ] In allen HTML-Dateien `<meta name="robots" content="noindex, nofollow">` entfernen, damit Google die Seite findet

## Bilder austauschen

1. Bild als `.jpg` oder `.webp` in `assets/img/` ablegen, idealerweise max. 1600 px breit und unter 400 KB
2. In `index.html` `src` und `alt` des jeweiligen Bildes anpassen
3. Nur echte Fotos von Galabau Jusufi verwenden, keine KI-Bilder von Personen

## Bewertungen aktualisieren

Die Bewertungen stehen fest in `index.html` (Abschnitt `#bewertungen`). Quelle sind alle Check24-Bewertungen mit „Verifizierte Buchung“, ungekürzt und auch kritische; Antworten des Inhabers werden nicht übernommen, ausgeschriebene Nachnamen von Kunden werden abgekürzt. Zum Aktualisieren die Check24-Bewertungsseite (alle Bewertungen geladen) mit Strg+S als „Webseite, vollständig“ in `check24/` speichern. Die Daten stecken als JSON in der Seite (`"publicId":"re_…"` mit `rating`, `text`, `createdAt`). Bewertungen aus dem eigenen Formular erst nach Prüfung von Hand ergänzen.

## Kontakt- und Bewertungsformular

Ohne weitere Einrichtung öffnen die Formulare das E-Mail-Programm des Besuchers mit einer vorausgefüllten Nachricht.

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
