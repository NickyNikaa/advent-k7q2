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
      titel: "Wusstet ihr schon? 🍌",
      tuete: "Viel Glück heute! 🍀",
      text: "Bananen sind botanisch gesehen Beeren. Erdbeeren dagegen nicht, sie gehören zu den Sammelnussfrüchten. Und Auberginen enthalten winzige Mengen Nikotin, so wie manch anderes Gemüse auch."
    },

    7: {
      titel: "Reise-Quiz 🌍",
      raetsel: {
        frage: "Welches Land ist aktuell das meistbesuchte der Welt?",
        antworten: ["frankreich", "france"]
      },
      text: "Frankreich! 2024 kamen rund 100 Millionen Besucher, knapp vor Spanien mit 94 Millionen. 🥐"
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
      titel: "Wasser-Quiz ⛵",
      tuete: "Viel Glück heute! 🍀",
      raetsel: {
        frage: "Wie viele Menschen in Deutschland haben einen Sportbootführerschein? Tipp: Es geht um Millionen.",
        antworten: ["19", "19 millionen", "ca 19 millionen", "rund 19 millionen", "19 mio", "1900000", "1900000 menschen", "1 9 millionen"]
      },
      text: "Rund 1,9 Millionen Menschen! So viele besitzen laut einer ADAC-Studie von 2026 in Deutschland einen amtlichen Sportbootführerschein (ohne reine Jetskifahrer). ⚓"
    },

    10: {
      titel: "Wusstet ihr schon? 🖋️",
      text: "In Deutschland haben ungefähr 21 bis 26 Prozent der Menschen mindestens ein Tattoo. 🇩🇪 Das sind grob hochgerechnet etwa 18 bis 22 Millionen Menschen.\n\nBesonders interessant: Bei den jungen Erwachsenen (20 bis 29 Jahre) ist fast jeder Zweite tätowiert. Bei den Millennials (Jahrgang 1981 bis 1996) sind es etwa 36 Prozent, bei den Babyboomern nur etwa 15 Prozent.\n\nEine YouGov-Umfrage aus 2026 kam auf 26 Prozent tätowierte Menschen."
    },

    11: {
      titel: "Luxus-Quiz 🏨",
      raetsel: {
        frage: "Guinness-Weltrekord: Das teuerste Hotelzimmer der Welt ist das Mark Penthouse in New York. Was kostet eine Nacht? Tipp: Die Zahl ist sechsstellig.",
        antworten: ["114767", "114767 dollar", "114767 us dollar", "114767 usd", "114767 $", "100000", "100000 euro", "ca 100000 euro", "ca 100000", "rund 100000 euro", "100000 dollar", "100000 €"]
      },
      text: "114.767 US-Dollar pro Nacht, das sind rund 100.000 Euro! Dafür gibt es ein Penthouse mit rund 930 m², 5 Schlafzimmern, 6 Badezimmern, eigenem Fitnessraum und einer Dachterrasse mit Blick auf den Central Park. Guinness World Records hat den Preis am 22. April 2025 bestätigt. 🗽"
    },

    12: {
      titel: "Wusstet ihr schon? 🐱",
      tuete: "Viel Glück heute! 🍀",
      text: "Katzen können Süßes nicht schmecken. Bei ihnen fehlt ein Stück eines Gens (Tas1r2), das für den Süßgeschmack gebraucht wird. Entdeckt haben das Forschende am Monell Chemical Senses Center in Philadelphia."
    },

    13: {
      titel: "Tier-Quiz 🐾",
      raetsel: {
        frage: "Welches Tier macht würfelförmigen Kot?",
        antworten: ["wombat", "wombats", "das wombat", "ein wombat", "der wombat"]
      },
      text: "Das Wombat! Pro Nacht setzt es etwa 80 bis 100 kleine Würfel ab. Möglich macht das der Darm, dessen Wände sich unterschiedlich stark dehnen, sodass der Kot erst kurz vor dem Ende seine eckige Form bekommt. Die Würfel rollen nicht weg und helfen wohl dabei, anderen Wombats Nachrichten zu hinterlassen. 💩"
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
      titel: "3 Dinge, die wir an Euch lieben",
      abschnitte: [
        {
          titel: "Ante",
          punkte: [
            "Du bist weltoffen und verurteilst niemanden für seine Schwächen, sondern gibst jedem das Gefühl, genauso dazuzugehören.",
            "Bei dir fühlen sich Menschen gehört und öffnen sich, weil du ihnen das Gefühl gibst, dass ihnen nichts unangenehm sein muss.",
            "Du bist lustig und hast immer wieder gute Kommentare oder Jokes auf Lager."
          ]
        },
        {
          titel: "Stef",
          punkte: [
            "Du bist gutmütig, sodass man sich mit dir nicht mal streiten kann, selbst wenn man wollte. :-P",
            "Du packst immer mit an und willst nichts dafür zurück.",
            "Auf dein Wort ist Verlass. Du bist immer da, wenn man dich braucht."
          ]
        }
      ],
      schluss: "Und lustig bist du natürlich auch, Stef ;)\nDanke, dass es euch gibt 🫶"},

    18: {
      titel: "Wusstet ihr schon? 🐔",
      text: "Auf der Erde leben deutlich mehr Hühner als Menschen. Die FAO zählte 2020 über 33 Milliarden Hühner bei etwa 7,8 Milliarden Menschen, das sind rund vier Hühner pro Person."
    },

    19: {
      titel: "Wusstet ihr schon? 🦌",
      text: "Die Augen von Rentieren sind im Sommer golden und im Winter blau. Im Winter ist ihre Netzhaut mindestens 1000-mal lichtempfindlicher, was ihnen in der Dunkelheit der Polarnacht hilft."
    },

    20: {
      titel: "Lebkuchen-Quiz 🍪",
      tuete: "Viel Glück heute! 🍀",
      raetsel: {
        frage: "Elisen-Lebkuchen sind die edelste Sorte. Wie viel Prozent Mandeln, Haselnüsse oder Walnüsse müssen sie mindestens enthalten?",
        antworten: ["25", "25 prozent", "25 %", "25%", "25 pro", "25 prozent nüsse", "mindestens 25 prozent"]
      },
      text: "Mindestens 25 Prozent! Außerdem dürfen Elisen-Lebkuchen höchstens 10 Prozent Mehl enthalten. Viele Bäcker verwenden sogar gar kein Mehl. 🌰"
    },

    21: {
      titel: "Wusstet ihr schon? 🍗",
      text: "In Japan gehört Kentucky Fried Chicken zu Weihnachten dazu. Die Kampagne „Kentucky für Weihnachten“ gibt es seit 1974, und viele bestellen schon Monate vorher, um nicht bis zu zwei Stunden anzustehen."
    },

    22: {
      titel: "Weihnachtsbaum-Quiz 🎄",
      tuete: "Viel Glück heute! 🍀",
      raetsel: {
        frage: "Wie viele Weihnachtsbäume stehen jedes Jahr in deutschen Wohnzimmern? Tipp: Die Zahl ist zweistellig, in Millionen.",
        antworten: ["298", "298 millionen", "298 mio", "30", "30 millionen", "ca 30 millionen", "rund 30 millionen", "ca 298 millionen", "rund 298 millionen", "29800000"]
      },
      text: "Rund 29,8 Millionen! Das ist etwa ein Baum in jedem zweiten Haushalt. Acht von zehn Deutschen entscheiden sich dabei für eine Nordmanntanne (Stand 2019). 🌲"
    },

    23: {
      titel: "Quiz: Wo isst man am wenigsten heimisch? 🍽️",
      raetsel: {
        frage: "Einer Studie von 2019 zufolge servieren in einem Land im Vergleich die wenigsten Restaurants die heimische Küche. Zur Wahl stehen: Deutschland, Russland, Frankreich, Griechenland, Italien, Japan. Welches Land ist es?",
        antworten: ["deutschland", "in deutschland", "germany"]
      },
      text: "Deutschland! Nur 35,5 Prozent der Restaurants bieten deutsche Küche an, der niedrigste Wert im Ländervergleich. In Russland sind es 42 Prozent, in Frankreich 44,5 und in Italien 77,3 Prozent. 🍝"
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
