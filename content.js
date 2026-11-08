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
      tuete: "In der Tüte: was Salziges zum Knabbern",
      text: "Liebe Antonia, lieber Stef,\n\nWillkommen bei eurem Adventskalender. Wir hoffen, dass wir euch den Dezember und die Weihnachtszeit mit jedem Türchen ein Stück versüßen können und dass ihr Freude an dem Kalender habt.",
      bild: "assets/willkommen.svg"
    },

    2: {
      titel: "Einfach mal durchatmen",
      tuete: "In der Tüte: eine kleine Überraschung aus Bayern",
      text: "Im Dezember ist immer so viel los. Deshalb gibt's heute einen kleinen Moment, der nur euch gehört.",
      spruch: "Du musst nicht alles schaffen. Du darfst auch einfach mal da sein."
    },

    3: {
      titel: "Viel Glück!",
      tuete: "In der Tüte: etwas zum Naschen und Lose",
      text: "Heute wird's spannend, denn es warten Lose auf euch. Wir drücken ganz fest die Daumen!",
      spruch: "Glück ist oft nur, die kleinen Dinge zu bemerken."
    },

    4: {
      titel: "Etwas für die Küche",
      tuete: "In der Tüte: was Gutes zum Würzen",
      text: "Ob aufs Brot, aufs Ei oder einfach über alles drüber: Lasst es euch schmecken.",
      spruch: "Gutes Essen mit lieben Menschen ist die einfachste Form von Glück."
    },

    5: {
      titel: "Feierabend, endlich",
      tuete: "In der Tüte: was für einen gemütlichen Abend",
      text: "Heute darf der Abend ruhig lang und gemütlich werden. Kerze an, Füße hoch, Handy weg.",
      spruch: "Manchmal ist das Beste, was man tun kann, einfach nichts zu tun."
    },

    6: {
      titel: "Noch mehr Glück",
      tuete: "In der Tüte: Lose, etwas Knuspriges und noch eine Kleinigkeit",
      text: "Die nächste Runde Lose ist da! Mal sehen, ob das Glück heute auf eurer Seite steht.",
      spruch: "Wer zusammen lacht, hat schon halb gewonnen."
    },

    7: {
      titel: "Kleine Auszeit",
      tuete: "In der Tüte: etwas Fruchtiges zum Naschen",
      text: "Naschen ist heute ausdrücklich erlaubt, und zwar ganz ohne schlechtes Gewissen.",
      spruch: "Du bist genug, genau so, wie du heute bist."
    },

    8: {
      titel: "Nitschis Konstanz-Empfehlung für euch",
      tuete: "In der Tüte: etwas Schönes für die Haare",
      text: "Wenn ihr mal in Konstanz seid und Lust auf ein richtig gutes Eggdrop Sandwich habt, schaut unbedingt bei den beiden vorbei:",
      links: [
        { text: "khibar_konstanz auf Instagram", url: "https://www.instagram.com/khibar_konstanz/" },
        { text: "bloggers_kn auf Instagram", url: "https://www.instagram.com/bloggers_kn/" }
      ],
      schluss: "Lasst es euch schmecken!"
    },

    9: {
      titel: "Süßes Glück",
      tuete: "In der Tüte: etwas Süßes zum Löffeln und wieder Lose",
      text: "Etwas Süßes und Lose zusammen, das klingt doch nach einem richtig guten Tag.",
      spruch: "Das Leben schmeckt besser, wenn man es teilt."
    },

    10: {
      titel: "Für unterwegs",
      tuete: "In der Tüte: etwas Kleines, das gut in die Handtasche passt",
      text: "Heute gibt's etwas, das euch ab jetzt begleiten darf. Egal, wohin es euch zieht.",
      spruch: "Nicht jeder Weg braucht ein Ziel. Manchmal reicht es, gemeinsam loszugehen."
    },

    11: {
      titel: "Snack-Alarm",
      tuete: "In der Tüte: ein Snack für den Filmabend",
      text: "Heute wird's richtig gemütlich auf der Couch. Wir sind gespannt, wie ihr den Geschmack findet!",
      spruch: "Zusammen auf dem Sofa: unterschätzt, aber unschlagbar."
    },

    12: {
      titel: "Das seid ihr",
      tuete: "In der Tüte: Lose und etwas, das ihr bestimmt wiedererkennt",
      text: "Dieses Türchen hat wirklich etwas zum Schmunzeln. Und Lose gibt's natürlich auch wieder.",
      spruch: "Wer über sich selbst lachen kann, hat nie Langeweile."
    },

    13: {
      titel: "Zum Naschen",
      tuete: "In der Tüte: etwas Süßes mit Kindheitsgefühl",
      text: "Heute gibt's ein bisschen Kindheit zum Mitnehmen. Haltet kurz inne und genießt es.",
      spruch: "Mut heißt nicht, keine Angst zu haben. Mut heißt, trotzdem anzufangen."
    },

    14: {
      titel: "Für alle Fälle",
      tuete: "In der Tüte: etwas zum Mitnehmen, überallhin",
      text: "Heute ist etwas dabei, das ihr bestimmt oft brauchen werdet. Wir freuen uns schon, wenn ihr es dabeihabt.",
      spruch: "Das Wichtigste im Leben passt in keine Tasche: Menschen, die einen mögen."
    },

    15: {
      titel: "Kekszeit",
      tuete: "In der Tüte: etwas Knuspriges zum Naschen",
      text: "Weihnachten ohne Kekse? Gibt's bei uns nicht. Also: Kaffee oder Tee machen und genießen.",
      spruch: "Die schönsten Momente sind selten geplant."
    },

    16: {
      titel: "Zeit für euch",
      tuete: "In der Tüte: etwas zum Wohlfühlen",
      text: "Heute geht's nur um euch beide. Gönnt euch eine kleine Pause und tut euch was Gutes.",
      spruch: "Geh mit dir selbst so um, wie du mit einem guten Freund umgehen würdest."
    },

    17: {
      titel: "Das lieben wir an euch",
      tuete: "In der Tüte: etwas Saures zum Knabbern",
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
      schluss: "Danke, dass es euch gibt."
    },

    18: {
      titel: "Ein Stück Urlaub",
      tuete: "In der Tüte: etwas zum Dranhängen",
      text: "Heute gibt's etwas, das euch hoffentlich ein bisschen Urlaubsgefühl schenkt, auch mitten im Winter.",
      spruch: "Fernweh ist nur Neugier mit Rucksack."
    },

    19: {
      titel: "Wärme von innen",
      tuete: "In der Tüte: etwas Würziges mit Schokolade",
      text: "Scharf, süß und schokoladig, genau richtig für kalte Tage.",
      spruch: "Wärme entsteht, wenn man sich Zeit füreinander nimmt."
    },

    20: {
      titel: "Zweimal Glück",
      tuete: "In der Tüte: Lose und eine Kleinigkeit zum Anstecken",
      text: "Heute gibt's wieder Lose, und dazu noch etwas, das ihr euch ans Revers stecken könnt. Das steht euch bestimmt richtig gut.",
      spruch: "Kleine Dinge, große Wirkung."
    },

    21: {
      titel: "Licht im Dunkeln",
      tuete: "In der Tüte: etwas, das für Licht sorgt",
      text: "Heute wird es richtig kuschelig. Zündet etwas an, rückt zusammen und genießt den Abend.",
      spruch: "Ein bisschen Licht reicht, um einen ganzen Raum warm zu machen."
    },

    22: {
      titel: "Von Herzen",
      tuete: "In der Tüte: Lose und etwas Herziges",
      text: "Heute dreht sich alles um die Liebe. Und natürlich noch einmal um das Glück.",
      spruch: "Liebe wächst, wenn man sie teilt."
    },

    23: {
      titel: "Platz für Gedanken",
      tuete: "In der Tüte: etwas zum Aufschreiben",
      text: "Für Ideen, Pläne fürs neue Jahr, Einkaufslisten oder einfach nur Gekritzel. Alles darf hier rein.",
      spruch: "Schreib auf, was dir wichtig ist. Der Rest findet sich."
    },

    24: {
      titel: "Frohe Weihnachten",
      tuete: "In der Tüte: das große Finale, mit Spaß für lange Abende",
      text: "Frohe Weihnachten, Antonia und Stef!\nFür ein paar Glücksgefühle umhüllt von Bao Buns oder Noooooodlessss.",
      gutschein: {
        titel: "Gutschein für Mamma Bao",
        bild: "assets/qr-24.png",
        hinweis: "Wert: 30,00 €. Zum Einlösen den Code scannen. Geschenkkartencode: 12795791"
      },
      schluss: "Wir haben euch lieb."
    }
  },

  // Standardtext für Türchen ohne eigenen Eintrag
  standard: {
    titel: "Heute ist Türchen {n}",
    text: "Schaut in die Tüte von heute. Wir wünschen euch einen wunderschönen Tag!"
  }
};
