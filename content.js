/*
  INHALTE DES ADVENTSKALENDERS
  ----------------------------
  Hier trägst du pro Türchen ein, was dahinter steckt.
  Alles ist optional. Türchen, die hier nicht stehen, zeigen einen Standardtext.

  Mögliche Felder pro Tag:
    titel:     Überschrift im Türchen
    tuete:     Hinweis auf die physische Tüte, z.B. "In der Tüte: Schokolade"
    text:      Persönliche Nachricht (Zeilenumbruch mit \n)
    bild:      Pfad zu einem Foto oder GIF, z.B. "assets/tag-02.jpg"
    gutschein: { titel, bild, hinweis }   (bild = dein QR-Code, z.B. "assets/qr-24.png")
    raetsel:   { frage, antworten: ["lösung1", "lösung2"], hinweis }
               Der Inhalt des Türchens erscheint erst, wenn das Rätsel gelöst ist.
*/

window.KALENDER = {
  jahr: 2026,
  titel: "Adventskalender",
  untertitel: "24 Türchen für euch zwei",

  tage: {
    1: {
      titel: "Willkommen",
      text: "Liebe Antonia, lieber Stef,\n\nWillkommen bei eurem Adventskalender. Wir hoffen, dass wir euch den Dezember und die Weihnachtszeit mit jedem Türchen ein Stück versüßen können und dass ihr Freude an dem Kalender habt.",
      bild: "assets/willkommen.svg"
    },

    2: {
      titel: "Ein Foto für euch",
      text: "Hier kann ein gemeinsames Foto oder ein GIF stehen.\nTrag unter 'bild' einfach den Dateinamen ein."
      // bild: "assets/tag-02.jpg"
    },

    3: {
      titel: "Kleines Rätsel",
      raetsel: {
        frage: "Wie heißt Rudolph mit Nachnamen?",
        antworten: ["rentier", "das rentier"],
        hinweis: "Beispiel-Rätsel. Die Lösung ist: Rentier"
      },
      tuete: "In der Tüte: etwas Süßes",
      text: "Richtig! Das war nur ein Beispiel, du kannst hier eigene Fragen stellen."
    },

    8: {
      titel: "Nitschis Konstanz Empfehlung",
      text: "Für das Eggdrop Sandwich schaut bei diesen beiden vorbei:",
      links: [
        { text: "khibar_konstanz auf Instagram", url: "https://www.instagram.com/khibar_konstanz/" },
        { text: "bloggers_kn auf Instagram", url: "https://www.instagram.com/bloggers_kn/" }
      ]
    },

    12: {
      titel: "Zeit für einen Abend zu zweit",
      gutschein: {
        titel: "Gutschein",
        bild: "assets/beispiel-qr.png",
        hinweis: "Beispiel-Gutschein. Hier kommt dein echter QR-Code hin."
      },
      text: "Scannt den Code, wenn ihr einlösen wollt."
    },

    17: {
      titel: "Das lieben wir an euch",
      text: "Drei Eigenschaften, die euch besonders machen:",
      abschnitte: [
        {
          titel: "Antonia",
          punkte: [
            "Weltoffen: Du verurteilst Menschen nicht für ihre Schwächen, sondern gibst ihnen das Gefühl, genauso dazuzugehören.",
            "Gute Zuhörerin: Bei dir fühlen sich Menschen gehört und öffnen sich, weil du ihnen vermittelst, dass ihnen nichts unangenehm sein muss.",
            "Humorvoll: Du haust immer wieder unerwartete, trockene Sprüche raus und kannst richtig gut kontern."
          ]
        },
        {
          titel: "Stef",
          punkte: [
            "Gutmütig: Mit dir kann man nicht mal streiten, selbst wenn man wollte.",
            "Hilfsbereit: Du packst immer mit an und verlangst nichts dafür zurück.",
            "Zuverlässig: Auf dein Wort ist Verlass, und du möchtest Menschen nie enttäuschen."
          ]
        }
      ]
    },

    24: {
      titel: "Frohe Weihnachten",
      tuete: "In der Tüte: das große Finale",
      text: "Frohe Weihnachten, Antonia und Stef!\nFür ein paar Glücksgefühle umhüllt von Bao Buns oder Noooooodlessss.",
      gutschein: {
        titel: "Gutschein für Mamma Bao",
        bild: "assets/qr-24.png",
        hinweis: "Wert: 30,00 €. Zum Einlösen den Code scannen. Geschenkkartencode: 12795791"
      }
    }
  },

  // Standardtext für Türchen ohne eigenen Eintrag
  standard: {
    titel: "Heute ist Türchen {n}",
    text: "Schaut in die Tüte von heute. Ich wünsche euch einen schönen Tag!"
  }
};
