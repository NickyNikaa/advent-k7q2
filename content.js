/*
  INHALTE DES ADVENTSKALENDERS
  ----------------------------
  Hier steht pro Türchen, was dahinter steckt.
  Alles ist optional. Türchen, die hier nicht stehen, zeigen einen Standardtext.

  Mögliche Felder pro Tag:
    titel:     Überschrift im Türchen
    tuete:     kleiner Hinweis zur physischen Tüte
    text:      Persönliche Nachricht (Zeilenumbruch mit \n)
    spruch:    Ein Spruch oder Gedanke, groß und handgeschrieben dargestellt
    links:     [{ text, url }]
    abschnitte:[{ titel, punkte: [] }]
    schluss:   Kurzer Abschlusssatz
    bild:      Pfad zu einem Foto oder GIF, z.B. "assets/tag-02.jpg"
    gutschein: { titel, bild, hinweis }   (bild = QR-Code, z.B. "assets/qr-24.png")
    raetsel:   { frage, antworten: ["lösung1"], hinweis }
               Der Inhalt erscheint erst, wenn das Rätsel gelöst ist.
*/

window.KALENDER = {
  jahr: 2026,
  titel: "Adventskalender",
  untertitel: "24 kleine Türchen, nur für euch zwei",

  tage: {
    1: {
      titel: "Willkommen",
      text: "Liebe Antonia, lieber Stef,\n\nWillkommen bei eurem Adventskalender. Wir hoffen, dass wir euch den Dezember und die Weihnachtszeit mit jedem Türchen ein Stück versüßen können und dass ihr Freude an dem Kalender habt.",
      bild: "assets/willkommen.svg"},

    2: {
      titel: "Spruch des Tages",
      spruch: "Du musst nicht alles schaffen. Du darfst auch einfach mal da sein."
    },

    3: {
      titel: "Spruch des Tages",
      tuete: "Viel Glück heute!",
      spruch: "Glück ist oft nur, die kleinen Dinge zu bemerken."
    },

    4: {
      titel: "Spruch des Tages",
      spruch: "Gutes Essen mit lieben Menschen ist die einfachste Form von Glück."
    },

    5: {
      titel: "Spruch des Tages",
      spruch: "Manchmal ist das Beste, was man tun kann, einfach nichts zu tun."
    },

    6: {
      titel: "Spruch des Tages",
      tuete: "Viel Glück heute!",
      spruch: "Wer zusammen lacht, hat schon halb gewonnen."
    },

    7: {
      titel: "Spruch des Tages",
      spruch: "Du bist genug, genau so, wie du heute bist."
    },

    8: {
      titel: "Nitschis Konstanz-Empfehlung für euch",
      text: "Wenn ihr mal in Konstanz seid und Lust auf ein richtig gutes Eggdrop Sandwich habt, schaut unbedingt bei den beiden vorbei:",
      links: [
        { text: "khibar_konstanz auf Instagram", url: "https://www.instagram.com/khibar_konstanz/" },
        { text: "bloggers_kn auf Instagram", url: "https://www.instagram.com/bloggers_kn/" }
      ],
      schluss: "Lasst es euch schmecken!"},

    9: {
      titel: "Spruch des Tages",
      tuete: "Viel Glück heute!",
      spruch: "Das Leben schmeckt besser, wenn man es teilt."
    },

    10: {
      titel: "Spruch des Tages",
      spruch: "Nicht jeder Weg braucht ein Ziel. Manchmal reicht es, gemeinsam loszugehen."
    },

    11: {
      titel: "Spruch des Tages",
      spruch: "Zusammen auf dem Sofa: unterschätzt, aber unschlagbar."
    },

    12: {
      titel: "Spruch des Tages",
      tuete: "Viel Glück heute!",
      spruch: "Wer über sich selbst lachen kann, hat nie Langeweile."
    },

    13: {
      titel: "Spruch des Tages",
      spruch: "Mut heißt nicht, keine Angst zu haben. Mut heißt, trotzdem anzufangen."
    },

    14: {
      titel: "Spruch des Tages",
      spruch: "Das Wichtigste im Leben passt in keine Tasche: Menschen, die einen mögen."
    },

    15: {
      titel: "Spruch des Tages",
      spruch: "Die schönsten Momente sind selten geplant."
    },

    16: {
      titel: "Spruch des Tages",
      spruch: "Geh mit dir selbst so um, wie du mit einem guten Freund umgehen würdest."
    },

    17: {
      titel: "Das lieben wir an euch",
      text: "Wir wollten euch schon lange mal sagen, was wir an euch beiden so mögen. Hier sind je drei Dinge:",
      abschnitte: [
        {
          titel: "Antonia",
          punkte: [
            "Du bist so weltoffen. Du verurteilst niemanden für seine Schwächen, sondern gibst jedem das Gefühl, genauso dazuzugehören.",
            "Bei dir fühlen sich Menschen gehört. Sie öffnen sich, weil du ihnen das Gefühl gibst, dass ihnen nichts unangenehm sein muss.",
            "Du bist einfach witzig. Deine trockenen Sprüche kommen immer aus dem Nichts, und kontern kannst du auch richtig gut."
          ]
        },
        {
          titel: "Stef",
          punkte: [
            "Du bist so gutmütig, dass man sich mit dir nicht mal streiten kann, selbst wenn man wollte.",
            "Du packst immer mit an und willst nichts dafür zurück. Hilfsbereiter geht kaum.",
            "Auf dein Wort ist Verlass. Du willst Menschen nie enttäuschen, und das merkt man."
          ]
        }
      ],
      schluss: "Danke, dass es euch gibt."},

    18: {
      titel: "Spruch des Tages",
      spruch: "Fernweh ist nur Neugier mit Rucksack."
    },

    19: {
      titel: "Spruch des Tages",
      spruch: "Wärme entsteht, wenn man sich Zeit füreinander nimmt."
    },

    20: {
      titel: "Spruch des Tages",
      tuete: "Viel Glück heute!",
      spruch: "Kleine Dinge, große Wirkung."
    },

    21: {
      titel: "Spruch des Tages",
      spruch: "Ein bisschen Licht reicht, um einen ganzen Raum warm zu machen."
    },

    22: {
      titel: "Spruch des Tages",
      tuete: "Viel Glück heute!",
      spruch: "Liebe wächst, wenn man sie teilt."
    },

    23: {
      titel: "Spruch des Tages",
      spruch: "Schreib auf, was dir wichtig ist. Der Rest findet sich."
    },

    24: {
      titel: "Frohe Weihnachten",
      text: "Frohe Weihnachten, Antonia und Stef!\nFür ein paar Glücksgefühle umhüllt von Bao Buns oder Noooooodlessss.",
      gutschein: {
        titel: "Gutschein für Mamma Bao",
        bild: "assets/qr-24.png",
        hinweis: "Wert: 30,00 €. Zum Einlösen den Code scannen. Geschenkkartencode: 12795791"
      },
      schluss: "Wir haben euch lieb."}
  },

  // Standardtext für Türchen ohne eigenen Eintrag
  standard: {
    titel: "Heute ist Türchen {n}",
    text: "Schaut in die Tüte von heute. Wir wünschen euch einen wunderschönen Tag!"
  }
};
