# KI-Bilder für die Webseite

Bis echte Fotos von Aufträgen vorhanden sind, nutzt die Webseite KI-generierte Symbolbilder (erstellt mit Google Gemini).

## Aktueller Stand

| Bereich | Datei(en) in `assets/img/` | Status |
|---|---|---|
| Hero (oben) | `hero-terrasse-1400.jpg` | ✅ eingebaut |
| Galerie: Rollrasen | `galerie-rollrasen-800/1400.jpg` | ✅ eingebaut |
| Galerie: Winterdienst | `galerie-winterdienst-800/1400.jpg` | ✅ eingebaut |
| Galerie: Heckenschnitt | `galerie-hecke-600/976.jpg` | ⚠️ eingebaut, Ersatz empfohlen: nachgemachte „STIHL“-Logos, gut erkennbares Gesicht |
| Galerie: Zaunbau | `galerie-zaun-800/1400.jpg` | ⚠️ eingebaut, Ersatz empfohlen: dasselbe Haus wie beim Rollrasen-Bild |
| Galerie: Baumfällung | – | ❌ nicht eingebaut: fachlich falsche und gefährliche Fälltechnik |
| Über uns | – | bewusst ohne KI-Bild, hier gehört ein echtes Foto von Hamdi hin |

## So geht's

1. Bild mit Gemini (oder einem anderen Generator mit erlaubter kommerzieller Nutzung) erstellen, Prompt unten plus **Stil-Zusatz**
2. Das Originalbild in `assets/img_ki/` ablegen. Der Ordner wird nicht ins Repo hochgeladen.
3. Bescheid geben: Das Bild wird verkleinert, komprimiert und eingebaut.

## Regeln

- **Als KI-Symbolbilder kennzeichnen.** Die Bilder dürfen nicht als echte Aufträge erscheinen. Dafür sorgen der Hinweis unter der Galerie, das Label im Hero-Bild und der Bildnachweis im Impressum.
- **Keine Personen.** Galabau Jusufi ist im Wesentlichen ein Ein-Mann-Betrieb. Fremde KI-Gesichter würden mit Hamdi verwechselt, und mehrere Arbeiter wirken wie ein Team, das es nicht gibt.
- **Keine Markenlogos und keine Schrift.** KI erfindet gerne verfälschte Logos wie „STIHL“, das wirkt unseriös.
- **Fachlich korrekt.** Werkzeug, Schutzausrüstung und Arbeitsweise müssen stimmen; Fachleute und Kunden erkennen Fehler.
- **Verschiedene Häuser.** Mehrmals dasselbe Haus fällt in der Galerie sofort auf.
- **Genau prüfen.** Bilder mit typischen KI-Fehlern verwerfen: verbogene Latten, schwebende Gegenstände, verzerrte Werkzeuge, unlogische Schatten.

## Stil-Zusatz (an jeden Prompt anhängen)

> Fotorealistisch, wie mit einer Profi-Kamera fotografiert, natürliches Licht, realistische Farben. Typisches Grundstück in Deutschland. Querformat 16:9. Menschenleer, keine Personen, keine Markenlogos, kein Text, kein Wasserzeichen.

## Prompts für die fehlenden bzw. empfohlenen Ersatzbilder

### Baumfällung (fehlt)

> Nach einer fachgerechten Baumfällung in einem Privatgarten: Ein frischer, sauber und dicht über dem Boden abgesägter Baumstumpf, daneben ordentlich gestapelte Stammstücke gleicher Länge. Auf dem Stumpf liegen eine orangefarbene Motorsäge und ein Forsthelm mit Gesichts- und Gehörschutz. Im Hintergrund ein gepflegter Garten mit Hecke und ein Holzhaus-Schuppen. Herbstlicht mit etwas Laub auf dem Rasen.

### Heckenschnitt (Ersatz)

> Eine frisch und exakt gerade geschnittene, dichte Ligusterhecke entlang eines Gartens mit Fachwerkhaus im Hintergrund. Davor liegt Schnittgut auf einer Plane, daneben lehnt eine orangefarbene Akku-Heckenschere an der Hecke. Gepflegter Rasen im Vordergrund, warmes Abendlicht.

### Zaunbau (Ersatz)

> Ein fertig montierter, moderner Sichtschutzzaun aus horizontalen Lärchenholz-Latten an der Grundstücksgrenze eines Reihenhausgartens mit rotem Klinkerhaus. Davor ein frisch angelegtes Beet mit Ziergräsern und Hortensien, im Vordergrund gepflegter Rasen. Sonniger Nachmittag.

## Echte Fotos (am besten)

Sobald möglich, echte Fotos verwenden, am besten mit dem Handy bei Tageslicht und im Querformat:

- **Hamdi bei der Arbeit** für den Bereich „Über uns“, das schafft das meiste Vertrauen
- **Vorher/Nachher** von Aufträgen, zum Beispiel Hecke vor und nach dem Schnitt
- Nur Grundstücke fotografieren, deren Eigentümer einverstanden sind; keine Hausnummern oder Kennzeichen im Bild
