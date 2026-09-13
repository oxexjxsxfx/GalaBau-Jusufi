# Galabau Jusufi – Webseite

Moderne, responsive Webseite für **Galabau Jusufi**, einen Garten- und Landschaftsbaubetrieb.

- Reines HTML, CSS und JavaScript: kein Build-Schritt, keine Abhängigkeiten
- Optimiert für Smartphone, Tablet und Desktop
- Datenschutzfreundlich: keine Cookies, kein Tracking, keine Google Fonts oder Maps
- Kostenloses Hosting über **GitHub Pages**

## Struktur

```
index.html          Startseite (Leistungen, Über uns, Ablauf, Projekte, Einsatzgebiet, FAQ, Kontakt)
impressum.html      Impressum (Platzhalter ausfüllen!)
datenschutz.html    Datenschutzerklärung (Platzhalter ausfüllen!)
404.html            Fehlerseite
css/style.css       Gesamtes Design (Farben ganz oben als CSS-Variablen)
js/main.js          Menü, Animationen, Galerie, Kontaktformular
assets/img/         Illustrationen / Projektbilder
assets/icons/       Favicon
```

## Vor dem Go-Live: Platzhalter ersetzen

Diese Platzhalter kommen in `index.html`, `impressum.html` und `datenschutz.html` vor:

| Platzhalter | Ersetzen durch |
|---|---|
| `[Vorname]` | Vorname des Inhabers |
| `Musterstraße 1`, `12345 Musterstadt`, `Musterstadt` | echte Adresse und Ort |
| `0123 456789` / `+49123456789` | Festnetz- bzw. Hauptnummer |
| `0170 0000000` / `491700000000` | Mobil- / WhatsApp-Nummer |
| `info@galabau-jusufi.de` | echte E-Mail-Adresse (auch in `js/main.js`) |
| `Beispielhausen`, `Neudorf`, … | Orte im Einsatzgebiet |
| `[DE000000000]` | USt-IdNr. (oder Abschnitt entfernen) |

Außerdem vor dem Go-Live:

1. In allen HTML-Dateien die Zeile `<meta name="robots" content="noindex, nofollow">` entfernen, damit Google die Seite findet
2. Impressum und Datenschutz prüfen lassen
3. Echte Projektfotos einbauen (siehe unten)

## Eigene Fotos einbauen

1. Fotos als `.jpg` oder `.webp` in `assets/img/` ablegen, idealerweise max. 1600 px breit und unter 400 KB
2. In `index.html` im Bereich `Projekte` das `src` und `alt` des jeweiligen Bildes anpassen

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
