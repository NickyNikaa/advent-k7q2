/*
  INHALTE DES ADVENTSKALENDERS
  ----------------------------
  Hier steht pro Türchen, was dahinter steckt.
  Alles ist optional. Türchen, die hier nicht stehen, zeigen einen Standardtext.

  Mögliche Felder pro Tag:
    titel:     Überschrift im Türchen
    tuete:     kleiner Hinweis zur physischen Tüte
    text:      Persönliche Nachricht (Zeilenumbruch mit \n)
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
      text: "Liebe Ante, lieber Stef,\n\nWillkommen in eurem Adventskalender. 🎄♥️\n\nDie meisten Türchen habt ihr ohnehin physisch in euren Tüten. Die digitale Version dient nur der Unterstützung. Manchmal erwarten euch Tipps, manche kuriose Fakten und ganz am Schluss vielleicht auch ein kleines digitales Wertgeschenk. Wir hoffen, dass ihr Freude an dem Kalender habt. 🫶",
      bild: "assets/willkommen.svg"},

    2: {
      titel: "Wusstet ihr schon? 🎄",
      text: "Einer der ersten gedruckten Adventskalender stammt aus München: 1908 vom Verleger Gerhard Lang. Die Idee hatte er aus seiner Kindheit, denn seine Mutter gab ihm damals einen Karton mit 24 kleinen Gebäckstücken, von denen er jeden Tag eins essen durfte."
    },

    3: {
      titel: "Schweiz-Quiz 🇨🇭",
      tuete: "Viel Glück heute! 🍀",
      raetsel: {
        frage: "Wahr oder falsch: In der Schweiz ist es gesetzlich vorgeschrieben, Meerschweinchen mindestens zu zweit zu halten?",
        antworten: ["wahr", "stimmt", "richtig", "ja", "true"]
      },
      text: "Wahr! Meerschweinchen brauchen Gesellschaft, deshalb darf man sie in der Schweiz nicht einzeln halten. Ein einziges Tier ist hier verboten, es müssen mindestens zwei sein. 🐹🐹"
    },

    4: {
      titel: "Wusstet ihr schon? 🐄",
      text: "Kühe sind für Menschen gefährlicher als Haie. In den USA sind laut CDC zwischen 2003 und 2007 im Schnitt etwa 22 Menschen pro Jahr durch Kühe gestorben. Haie haben 2022 weltweit 5 Menschen getötet."
    },

    5: {
      titel: "Wusstet ihr schon? 🧖",
      text: "In Finnland gibt es über 3 Millionen Saunen, bei rund 5,6 Millionen Einwohnern. Rechnerisch kommt also fast eine Sauna auf zwei Menschen."
    },

    6: {
      titel: "True Crime: Der Kunstraub von Zürich 🖼️",
      tuete: "Viel Glück heute! 🍀",
      text: "Zürich, 2008: Maskierte Männer überfallen an einem Sonntagnachmittag das Museum der Sammlung Bührle und stehlen vier Gemälde von van Gogh, Monet, Degas und Cézanne. Der Fall gilt als einer der größten Kunstdiebstähle Europas. Das wertvollste Bild, Cézannes „Der Knabe mit der roten Weste“, wurde auf rund 100 Millionen Franken geschätzt und blieb bis 2012 verschwunden.\n\nDann kam die Zürcher Polizei auf eine verrückte Idee: Beamte gaben sich jahrelang als Pornounternehmer aus, freundeten sich mit den mutmaßlichen Tätern in Belgrad an und kauften das Bild zum Schein für 2,8 Millionen Euro. Bei der Übergabe schnappte die Falle zu. 🕵️"
    },

    7: {
      titel: "Wusstet ihr schon? 🏔️",
      text: "In der Schweiz muss es für jeden Einwohner einen Schutzplatz im Bunker geben, das schreibt das Gesetz seit den 1960er Jahren vor. Eine Auswertung von 2006 zählte rund 300.000 Schutzräume mit Platz für etwa 8,6 Millionen Menschen, also 114 Prozent der Bevölkerung. Zum Vergleich: In Deutschland sind es nur etwa 3 Prozent.\n\nTheoretisch passt die ganze Schweiz also in ihre eigenen Keller. 😄"
    },

    8: {
      titel: "Nitschis Konstanz-Empfehlung für euch",
      text: "Zwei Tipps für euch, wenn ihr mal in Konstanz seid. Und wenn ihr Lust auf ein richtig gutes Eggdrop Sandwich habt, ist bloggers_kn genau die richtige Adresse:",
      links: [
        { text: "khibar_konstanz auf Instagram", url: "https://www.instagram.com/khibar_konstanz/" },
        { text: "bloggers_kn auf Instagram (Eggdrop Sandwich)", url: "https://www.instagram.com/bloggers_kn/" }
      ],
      schluss: "Lasst es euch schmecken 😋"},

    9: {
      titel: "Krimi-Quiz 🕵️",
      tuete: "Viel Glück heute! 🍀",
      raetsel: {
        frage: "Die Krimi-Autorin Agatha Christie verschwand 1926 spurlos und ganz England suchte nach ihr. Wie viele Tage blieb sie verschwunden?",
        antworten: ["11", "elf", "11 tage", "elf tage"]
      },
      text: "Elf Tage! Am 3. Dezember 1926 verließ sie ihr Zuhause, 15.000 Freiwillige halfen der Polizei bei der Suche. Gefunden wurde sie am 15. Dezember in einem Hotel in Harrogate, wo sie sich als „Mrs. Teresa Neele“ eingetragen hatte, mit dem Nachnamen der Geliebten ihres Mannes. Warum sie verschwand, gilt bis heute als Rätsel."
    },

    10: {
      titel: "Wusstet ihr schon? 🤗",
      text: "In einer Studie der Carnegie Mellon University mit 404 Erwachsenen wurden 14 Abende lang Umarmungen und Streit festgehalten. Wer öfter umarmt wurde, hatte bei einer Erkältung mildere Symptome."
    },

    11: {
      titel: "Wusstet ihr schon? 🪐",
      text: "Auf der Venus dauert ein Tag länger als ein Jahr. Sie braucht etwa 243 Erdtage für eine Drehung um sich selbst, aber nur etwa 225 Erdtage für eine Runde um die Sonne. Und weil sie sich andersherum dreht als die Erde, geht die Sonne dort im Westen auf."
    },

    12: {
      titel: "Wusstet ihr schon? 🐱",
      tuete: "Viel Glück heute! 🍀",
      text: "Katzen können Süßes nicht schmecken. Bei ihnen fehlt ein Stück eines Gens (Tas1r2), das für den Süßgeschmack gebraucht wird. Entdeckt haben das Forschende am Monell Chemical Senses Center in Philadelphia."
    },

    13: {
      titel: "Schweiz-Quiz 🗳️",
      raetsel: {
        frage: "Auf Bundesebene dürfen Schweizer Frauen seit 1971 abstimmen. In welchem Jahr mussten sie im Kanton Appenzell Innerrhoden per Gerichtsurteil zugelassen werden?",
        antworten: ["1990"]
      },
      text: "1990! Am 29. April 1990 lehnte die Landsgemeinde das Frauenstimmrecht per Handzeichen noch ab. Am 27. November 1990 entschied das Bundesgericht einstimmig: Wer Frauen das Recht verweigert, verstößt gegen die Bundesverfassung."
    },

    14: {
      titel: "Wusstet ihr schon? ☕",
      text: "Laut einer Umfrage von 2019 trinken die Deutschen im Schnitt rund 152 Liter Kaffee im Jahr. Das ist mehr als Bier (102 Liter) und sogar etwas mehr als Mineralwasser (150 Liter)."
    },

    15: {
      titel: "Wusstet ihr schon? 😂",
      text: "Gemeinsames Lachen macht schmerzunempfindlicher. In einer Studie der Universität Oxford stieg die Schmerztoleranz nach etwa 15 Minuten Comedy in der Gruppe im Schnitt um rund 10 Prozent."
    },

    16: {
      titel: "Wusstet ihr schon? 🌲",
      text: "Schon 20 bis 30 Minuten an einem Ort, der sich nach Natur anfühlt, senken das Stresshormon Cortisol am meisten, zeigt eine Studie der University of Michigan. Man muss dafür nicht mal wandern, Sitzen reicht."
    },

    17: {
      titel: "Das lieben wir an euch",
      text: "3 Dinge, die wir an Euch lieben:",
      abschnitte: [
        {
          titel: "Ante",
          punkte: [
            "Du bist weltoffen. Du verurteilst niemanden für seine Schwächen, sondern gibst jedem das Gefühl, genauso dazuzugehören.",
            "Bei dir fühlen sich Menschen gehört. Sie öffnen sich, weil du ihnen das Gefühl gibst, dass ihnen nichts unangenehm sein muss.",
            "Du bist witzig. Deine trockenen Sprüche kommen immer aus dem Nichts, und kontern kannst du auch richtig gut."
          ]
        },
        {
          titel: "Stef",
          punkte: [
            "Du bist so gutmütig, dass man sich mit dir nicht mal streiten kann, selbst wenn man wollte. :-P",
            "Du packst immer mit an und willst nichts dafür zurück.",
            "Auf dein Wort ist Verlass. Du bist immer da, wenn man dich braucht."
          ]
        }
      ],
      schluss: "Danke, dass es euch gibt 🫶"},

    18: {
      titel: "Wusstet ihr schon? 🐔",
      text: "Auf der Erde leben deutlich mehr Hühner als Menschen. Die FAO zählte 2020 über 33 Milliarden Hühner bei etwa 7,8 Milliarden Menschen, das sind rund vier Hühner pro Person."
    },

    19: {
      titel: "Wusstet ihr schon? 🦌",
      text: "Die Augen von Rentieren sind im Sommer golden und im Winter blau. Im Winter ist ihre Netzhaut mindestens 1000-mal lichtempfindlicher, was ihnen in der Dunkelheit der Polarnacht hilft."
    },

    20: {
      titel: "Wusstet ihr schon? 🍪",
      tuete: "Viel Glück heute! 🍀",
      text: "Elisen-Lebkuchen müssen mindestens 25 Prozent Mandeln, Haselnüsse oder Walnüsse enthalten und dürfen höchstens 10 Prozent Mehl haben. Viele Bäcker verwenden sogar gar kein Mehl."
    },

    21: {
      titel: "Wusstet ihr schon? 🍗",
      text: "In Japan gehört Kentucky Fried Chicken zu Weihnachten dazu. Die Kampagne „Kentucky für Weihnachten“ gibt es seit 1974, und viele bestellen schon Monate vorher, um nicht bis zu zwei Stunden anzustehen."
    },

    22: {
      titel: "Wusstet ihr schon? 🎄",
      tuete: "Viel Glück heute! 🍀",
      text: "Rund 29,8 Millionen Weihnachtsbäume stehen jedes Jahr in deutschen Wohnzimmern, also etwa einer in jedem zweiten Haushalt. Acht von zehn Deutschen entscheiden sich für eine Nordmanntanne (Stand 2019)."
    },

    23: {
      titel: "True Crime: D. B. Cooper ✈️",
      text: "24. November 1971: Ein Mann, der sich Dan Cooper nennt, kapert Flug 305 von Portland nach Seattle. Er verlangt 200.000 Dollar und vier Fallschirme. Nach der Landung bekommt er beides, und irgendwo in der Nacht springt er mit dem Fallschirm ab.\n\nGefunden wurde er nie. Erst 1980 entdeckte ein achtjähriger Junge am Columbia River verrottete 20-Dollar-Scheine im Wert von 5.800 Dollar, Teile des Lösegelds. Wer der Mann war, ist bis heute ungeklärt. 🪂"
    },

    24: {
      titel: "Frohe Weihnachten",
      text: "Frohe Weihnachten, Antonia und Stef!\nFür ein paar Glücksgefühle umhüllt von Bao Buns oder Noooooodlessss.",
      gutschein: {
        titel: "Gutschein für Mamma Bao",
        bild: "assets/qr-24.png",
        hinweis: "Wert: 30,00 €. Zum Einlösen den Code scannen. Geschenkkartencode: 12795791"
      },
      schluss: "Wir haben euch lieb 🫶"}
  },

  // Standardtext für Türchen ohne eigenen Eintrag
  standard: {
    titel: "Heute ist Türchen {n}",
    text: "Schaut in die Tüte von heute. Wir wünschen euch einen wunderschönen Tag!"
  }
};
