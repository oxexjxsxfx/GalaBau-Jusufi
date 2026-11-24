# Galabau Jusufi – Webseite

Moderne, responsive Webseite für **Galabau Jusufi**, Garten- und Landschaftsbau in Gummersbach (Inhaber: Hamdi Jusufi).

- **Adresse:** https://galabau-jusufi.de (die alte Vorschau-Adresse auf github.io leitet dorthin um)
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

- [x] STRATO „Domainpaket .de“ bestellt, E-Mail-Adressen und DNS eingerichtet (siehe „Domain und E-Mail bei STRATO“)
- [x] Formspark eingerichtet, Formular-IDs in `js/main.js` eingetragen und am 23.11.2026 mit je einer Testeinsendung geprüft
- [x] Verträge zur Auftragsverarbeitung: bei STRATO am 22.11.2026 abgeschlossen (neue Version verfügbar: Mein Konto → Auftragsverarbeitung → „Vereinbarung abschließen“); bei Formspark gilt er automatisch
- [ ] Falls die E-Mail-Adresse anders als `info@galabau-jusufi.de` heißt: in `index.html`, `impressum.html`, `datenschutz.html` und `js/main.js` ändern
- [x] Bilder: echte Fotos aus dem Check24-Profil eingebaut (KI-Symbolbilder entfernt)
- [x] Google-Unternehmensprofil: Knopf „Auf Google bewerten“ verlinkt auf `https://g.page/r/CYIiSkWTDagpECE/review` (eingebaut am 23.11.2026)
- [ ] Wirtschafts-Identifikationsnummer (Format `DE` + 9 Ziffern): Ohne USt-IdNr teilt das Bundeszentralamt für Steuern sie **nur über ELSTER** mit, nicht per Post. Hamdi hat (Stand 24.11.2026) kein ELSTER-Konto → beim Steuerberater bzw. bei dem, der seine Steuererklärung macht, nachfragen oder ein ELSTER-Konto anlegen. Sobald sie da ist, muss sie ins Impressum (§ 5 DDG)
- [x] Gelbe Hinweis-Kästen entfernt (24.11.2026). Prüfung von Impressum und Datenschutz durch IHK oder Anwalt bleibt empfohlen, ist aber kein Muss
- [ ] Alle Testdaten löschen: Testmails im Postfach (Absender „TEST Claude“, Betreff „Test: Absender info@“) und die Testeinsendungen im Formspark-Dashboard (beide Formulare)
- [x] `noindex` aus allen Seiten entfernt (24.11.2026), nur `404.html` behält es absichtlich
- [x] Google Search Console eingerichtet (Google-Konto info@, Property `https://galabau-jusufi.de/`), Indexierung der Startseite am 24.11.2026 beantragt. Die Datei `googlee719f6db6216ac70.html` ist der Inhabernachweis und darf **nicht gelöscht** werden
- [x] Domain bei GitHub verifiziert (24.11.2026, Konto oxexjxsxfx → Settings → Pages → Verified domains). Schützt davor, dass jemand anderes eine GitHub-Seite unter galabau-jusufi.de einhängt. Der TXT-Record `_github-pages-challenge-oxexjxsxfx` bei STRATO (TXT- und CNAME-Records) muss **bleiben**, sonst verfällt die Verifizierung

## Bilder austauschen

1. Bild als `.jpg` oder `.webp` in `assets/img/` ablegen, idealerweise max. 1600 px breit und unter 400 KB
2. In `index.html` `src` und `alt` des jeweiligen Bildes anpassen
3. Nur echte Fotos von Galabau Jusufi verwenden, keine KI-Bilder von Personen

## Bewertungen aktualisieren

Die Bewertungen stehen fest in `index.html` (Abschnitt `#bewertungen`). Quelle sind alle Check24-Bewertungen mit „Verifizierte Buchung“, ungekürzt und auch kritische; Antworten des Inhabers werden nicht übernommen, ausgeschriebene Nachnamen von Kunden werden abgekürzt. Zum Aktualisieren die Check24-Bewertungsseite (alle Bewertungen geladen) mit Strg+S als „Webseite, vollständig“ in `check24/` speichern. Die Daten stecken als JSON in der Seite (`"publicId":"re_…"` mit `rating`, `text`, `createdAt`). Bewertungen aus dem eigenen Formular erst nach Prüfung von Hand ergänzen (siehe unten).

## Kontakt- und Bewertungsformular

Beide Formulare senden über [Formspark](https://formspark.io) direkt an das Postfach. Formspark ist ein belgischer Dienst, speichert in der EU (Irland, Deutschland) und schließt den Vertrag zur Auftragsverarbeitung automatisch mit allen Kunden. Kostenlos sind 250 Einsendungen, danach gibt es einmalig 50.000 Einsendungen für 25 $ (kein Abo). Solange keine Formular-ID eingetragen ist, öffnen die Formulare stattdessen das E-Mail-Programm des Besuchers.

Einrichtung:

1. Auf formspark.io ein kostenloses Konto mit `info@galabau-jusufi.de` anlegen
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

Eingerichtet am 23.11.2026, Inhaber der Domain ist **Hamdi Jusufi**.

**E-Mail:** Im Paket steckt genau ein Postfach. STRATO legt es selbst als `webmaster@` an, umbenennen geht nicht. Alle anderen Adressen sind Aliasse (bis zu 20) und landen im selben Postfach:

- Anmeldung (Webmail, Handy, Formspark-Bestätigung): immer `webmaster@galabau-jusufi.de` mit dem Postfach-Passwort. Mit einem Alias kann man sich nicht anmelden
- Aliasse: `info@`, `kontakt@` sowie die festen `postmaster@` und `abuse@`
- Neue Aliasse: E-Mail → E-Mail-Verwaltung → `webmaster@[Alle Domains]` anklicken → „Weitere Namen (Aliasse)“ → Namen eintragen, Domain `galabau-jusufi.de` wählen → **Speichern ganz unten auf der Seite** (der Knopf speichert die ganze Seite, nicht nur den Alias-Bereich)
- Mailprogramm/Handy: IMAP `imap.strato.de` Port 993 (SSL/TLS), SMTP `smtp.strato.de` Port 465 (SSL/TLS), Benutzername `webmaster@galabau-jusufi.de`, als E-Mail-Adresse (Absender) aber `info@galabau-jusufi.de` und als Name „Galabau Jusufi“ eintragen. So geht jede Mail mit info@ raus (getestet am 23.11.2026)
- Im STRATO Webmail geht Senden als info@ nicht: Das Webmail kennt die Aliasse nicht, dort ist der Absender immer webmaster@. Das webmaster-Postfach lässt sich weder umbenennen noch löschen (STRATO-Standardpostfach); ein zweites Postfach würde 1,50 €/Monat kosten

**DNS** (Domains → Domainverwaltung → galabau-jusufi.de → Reiter DNS):

| Eintrag | Einstellung |
|---|---|
| A-Record | „Eigene IP-Adresse“: `185.199.108.153` (STRATO erlaubt nur eine, GitHub nennt vier, eine reicht) |
| AAAA-Record | „Eigene IP-Adresse“: `2606:50c0:8000::153` |
| TXT- und CNAME-Records | CNAME, Präfix `www`, Wert `oxexjxsxfx.github.io`; SPF-Regel „Standard STRATO Mailserver“; DMARC „STRATO Standard“ |
| MX-Record | „STRATO Mailserver“, **nicht ändern**, sonst kommen keine E-Mails mehr an |

Nicht nötig und nicht buchen: „SSL aktivieren“ (das Zertifikat kommt kostenlos von GitHub), „Domain Guard“, „Umleitung → Extern“. Nie „DNS-Einstellungen zurücksetzen“ klicken.

**GitHub:** Settings → Pages → Custom domain `galabau-jusufi.de`, „Enforce HTTPS“ an. Die Datei `CNAME` im Repo gehört dazu und darf nicht gelöscht werden. Prüfen: `dig galabau-jusufi.de +short` zeigt `185.199.108.153`, `dig www.galabau-jusufi.de +short` zeigt `oxexjxsxfx.github.io`
