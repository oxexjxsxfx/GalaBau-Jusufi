# KI-Bilder für die Webseite

Bis echte Fotos von Aufträgen vorhanden sind, nutzt die Webseite KI-generierte Symbolbilder (erstellt mit Google Gemini).

## Aktueller Stand

| Bereich | Datei(en) in `assets/img/` | Original in `assets/img_ki/` | Status |
|---|---|---|---|
| Hero (oben) | `hero-terrasse-1400.jpg` | `…moxcnmmoxcnmmoxc` | ✅ |
| Galerie: Holzterrasse | `galerie-terrasse-800/1376.jpg` | – (Original vom Zaunbild überschrieben, Webversion in voller Größe vorhanden) | ✅ |
| Galerie: Rollrasen | `galerie-rollrasen-800/1376.jpg` | `…k0df1rk0df1rk0df (3)` | ✅ |
| Galerie: Heckenschnitt | `galerie-hecke-800/1376.jpg` | `…k0df1rk0df1rk0df (1)` | ✅ |
| Galerie: Baumfällung | `galerie-baumfaellung-800/1376.jpg` | `…k0df1rk0df1rk0df (2)` | ✅ |
| Galerie: Zaunbau | `galerie-zaun-800/1376.jpg` | `…86luy286luy286lu` | ✅ |
| Galerie: Winterdienst | `galerie-winterdienst-800/1376.jpg` | `…k0df1rk0df1rk0df` | ✅ |
| Über uns | – | – | bewusst ohne KI-Bild, hier gehört ein echtes Foto von Hamdi hin |

Verworfen: das erste Baumfällung-Bild (falsche, gefährliche Fälltechnik) und die ersten Bilder zu Heckenschnitt, Rollrasen, Zaunbau und Winterdienst (Personen, nachgemachte Markenlogos, doppeltes Haus).

## So geht's

1. Bild mit Gemini (oder einem anderen Generator mit erlaubter kommerzieller Nutzung) erstellen, Prompt unten plus **Stil-Zusatz**
2. Das Originalbild in `assets/img_ki/` ablegen. Der Ordner wird nicht ins Repo hochgeladen. **Achtung:** Gemini vergibt innerhalb eines Chats oft denselben Dateinamen. Beim Speichern umbenennen (z. B. `zaun.jfif`), sonst wird ein älteres Bild überschrieben.
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

## Echte Fotos (am besten)

Sobald möglich, echte Fotos verwenden, am besten mit dem Handy bei Tageslicht und im Querformat:

- **Hamdi bei der Arbeit** für den Bereich „Über uns“, das schafft das meiste Vertrauen
- **Vorher/Nachher** von Aufträgen, zum Beispiel Hecke vor und nach dem Schnitt
- Nur Grundstücke fotografieren, deren Eigentümer einverstanden sind; keine Hausnummern oder Kennzeichen im Bild
