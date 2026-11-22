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

- [ ] STRATO „Domainpaket .de“ bestellen, Postfach anlegen, DNS einstellen (siehe „Domain und E-Mail bei STRATO“)
- [ ] Formspark einrichten und die beiden Formular-IDs in `js/main.js` eintragen (siehe „Kontakt- und Bewertungsformular“)
- [ ] Verträge zur Auftragsverarbeitung: bei STRATO im Kundenlogin abschließen; bei Formspark gilt er automatisch
- [ ] Falls die E-Mail-Adresse anders als `info@galabau-jusufi.de` heißt: in `index.html`, `impressum.html`, `datenschutz.html` und `js/main.js` ändern
- [x] Bilder: echte Fotos aus dem Check24-Profil eingebaut (KI-Symbolbilder entfernt)
- [ ] Google-Unternehmensprofil: Link „Rezension schreiben“ im Abschnitt Bewertungen in `index.html` eintragen und `hidden` entfernen
- [ ] Impressum und Datenschutz prüfen lassen, danach die gelben Hinweis-Kästen entfernen
- [ ] In allen HTML-Dateien `<meta name="robots" content="noindex, nofollow">` entfernen, damit Google die Seite findet

## Bilder austauschen

1. Bild als `.jpg` oder `.webp` in `assets/img/` ablegen, idealerweise max. 1600 px breit und unter 400 KB
2. In `index.html` `src` und `alt` des jeweiligen Bildes anpassen
3. Nur echte Fotos von Galabau Jusufi verwenden, keine KI-Bilder von Personen

## Bewertungen aktualisieren

Die Bewertungen stehen fest in `index.html` (Abschnitt `#bewertungen`). Quelle sind alle Check24-Bewertungen mit „Verifizierte Buchung“, ungekürzt und auch kritische; Antworten des Inhabers werden nicht übernommen, ausgeschriebene Nachnamen von Kunden werden abgekürzt. Zum Aktualisieren die Check24-Bewertungsseite (alle Bewertungen geladen) mit Strg+S als „Webseite, vollständig“ in `check24/` speichern. Die Daten stecken als JSON in der Seite (`"publicId":"re_…"` mit `rating`, `text`, `createdAt`). Bewertungen aus dem eigenen Formular erst nach Prüfung von Hand ergänzen (siehe unten).

## Kontakt- und Bewertungsformular

Beide Formulare senden über [Formspark](https://formspark.io) direkt an das Postfach. Formspark ist ein belgischer Dienst, speichert in der EU (Irland, Deutschland) und schließt den Vertrag zur Auftragsverarbeitung automatisch mit allen Kunden. Kostenlos sind 250 Einsendungen, danach gibt es einmalig 50.000 Einsendungen für 25 $ (kein Abo). Solange keine Formular-ID eingetragen ist, öffnen die Formulare stattdessen das E-Mail-Programm des Besuchers.

Einrichtung:

1. Auf formspark.io ein kostenloses Konto mit `info@galabau-jusufi.de` anlegen (erst, wenn das Postfach bei STRATO existiert)
2. Zwei Formulare anlegen: „Anfrage“ und „Bewertung“
3. Bei jedem Formular im Tab „How-to“ die ID ablesen (der Teil hinter `https://submit-form.com/`) und in `js/main.js` bei `formspark` eintragen: `'contact-form'` für die Anfrage, `'review-form'` für die Bewertung
4. Prüfen, dass die E-Mail-Benachrichtigung an `info@galabau-jusufi.de` eingeschaltet ist
5. Auf der Webseite je eine Test-Anfrage und eine Test-Bewertung absenden und im Postfach nachsehen

Was ankommt: eine E-Mail mit Betreff wie „Anfrage über die Webseite: Terrassenbau“ oder „Bewertung über die Webseite: 5 Sterne“. Mit „Antworten“ geht die Antwort direkt an den Kunden (Formspark setzt die Antwortadresse). Die Spamfalle ist das versteckte Feld `_honeypot`, das Formspark von selbst erkennt.

Pflege: Erledigte Anfragen im Formspark-Dashboard löschen (so steht es in der Datenschutzerklärung). Bewertungen dort aufbewahren, solange sie auf der Seite stehen, denn sie belegen die Einwilligung zur Veröffentlichung. Sind die 250 Einsendungen aufgebraucht, zeigt das Formular eine Fehlermeldung mit Telefon und E-Mail.

### Neue Bewertung veröffentlichen

1. Bewertung kommt per E-Mail. Prüfen, ob es den Auftrag wirklich gab (so steht es auf der Seite)
2. Bewertung oben in den Abschnitt `#bewertungen` in `index.html` einfügen (Name wie angegeben, Sterne, Datum des Eingangs, Text ungekürzt)
3. Durchschnitt und Anzahl in der Zusammenfassung über den Bewertungen anpassen. Der Text nennt bisher nur CHECK24 und muss dann auch das eigene Formular erwähnen

## Domain und E-Mail bei STRATO

Die Webseite bleibt kostenlos auf GitHub Pages. STRATO liefert nur Domain und Postfach: Tarif **„Domainpaket .de“** (im 1. Jahr 0,05 €/Monat, danach 1 €/Monat; kündbar bis 1 Monat vor Ablauf der 12 Monate). Das Paket hat keinen Webspace und kein PHP, das ist für diese Seite aber auch nicht nötig. Nicht „Mail Plus“ nehmen (5 €/Monat nach der Aktion).

1. `galabau-jusufi.de` bestellen, **Inhaber: Hamdi Jusufi** (nicht Omer)
2. Im STRATO-Login unter E-Mail das Postfach `info@galabau-jusufi.de` anlegen
3. Im STRATO-Login den Vertrag zur Auftragsverarbeitung abschließen
4. Unter Domains → Domainverwaltung → Zahnrad bei der Domain → DNS:

   | Eintrag | Einstellung |
   |---|---|
   | A-Record | „Eigene IP-Adresse“: `185.199.108.153` |
   | AAAA-Record | „Eigene IP-Adresse“: `2606:50c0:8000::153` |
   | MX-Record | **nicht ändern** (bleibt bei STRATO, sonst kommen keine E-Mails mehr an) |

   STRATO erlaubt beim A-Record nur eine Adresse. GitHub nennt vier (`185.199.108.153` bis `.111.153`), eine reicht aber.
5. Unter Domainverwaltung die Subdomain `www` anlegen und bei ihr den CNAME-Record auf `oxexjxsxfx.github.io` setzen
6. Bis zu 24 Stunden warten, dann prüfen: `dig galabau-jusufi.de +short` muss `185.199.108.153` zeigen, `dig www.galabau-jusufi.de +short` muss `oxexjxsxfx.github.io` zeigen
7. Auf GitHub: Settings → Pages → Custom domain `galabau-jusufi.de` eintragen und speichern. Sobald das Zertifikat bereitsteht, **Enforce HTTPS** einschalten. Danach leitet die alte Vorschau-Adresse automatisch auf die Domain um
