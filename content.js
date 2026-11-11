/*
  INHALTE DES ADVENTSKALENDERS
  ----------------------------
  Hier steht pro Türchen, was dahinter steckt.
  Alles ist optional. Türchen, die hier nicht stehen, zeigen einen Standardtext.

  Mögliche Felder pro Tag:
    titel:     Überschrift im Türchen
    tuete:     kleiner Hinweis zur physischen Tüte
    text:      Persönliche Nachricht (Zeilenumbruch mit \n)
    quelle:    { text, url }  Quelle zu einem Fakt, klein unter dem Text
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
      text: "Einer der ersten gedruckten Adventskalender stammt aus München: 1908 vom Verleger Gerhard Lang. Die Idee hatte er aus seiner Kindheit, denn seine Mutter gab ihm damals einen Karton mit 24 kleinen Gebäckstücken, von denen er jeden Tag eins essen durfte.",
      quelle: { text: "Schwäbische Zeitung", url: "https://www.schwaebische.de/regional/oberschwaben/ravensburg/adventskalender-tuer-23-gerhard-lang-machte-den-adventskalender-gross-2533" }
    },

    3: {
      titel: "Wusstet ihr schon? 🐙",
      tuete: "Viel Glück heute! 🍀",
      text: "Ein Oktopus hat drei Herzen und blaues Blut. Zwei Herzen pumpen das Blut durch die Kiemen, das dritte versorgt den restlichen Körper. Und zwei Drittel seiner Nervenzellen sitzen nicht im Kopf, sondern in den Armen.",
      quelle: { text: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/science-nature/ten-wild-facts-about-octopuses-they-have-three-hearts-big-brains-and-blue-blood-7625828/" }
    },

    4: {
      titel: "Wusstet ihr schon? 🐄",
      text: "Kühe sind für Menschen gefährlicher als Haie. In den USA sind laut CDC zwischen 2003 und 2007 im Schnitt etwa 22 Menschen pro Jahr durch Kühe gestorben. Haie haben 2022 weltweit 5 Menschen getötet.",
      quelle: { text: "Snopes", url: "https://www.snopes.com/fact-check/cows-kill-more-people-than-sharks/" }
    },

    5: {
      titel: "Wusstet ihr schon? 🧖",
      text: "In Finnland gibt es über 3 Millionen Saunen, bei rund 5,6 Millionen Einwohnern. Rechnerisch kommt also fast eine Sauna auf zwei Menschen.",
      quelle: { text: "MyHelsinki", url: "https://www.myhelsinki.fi/?p=13928" }
    },

    6: {
      titel: "Wusstet ihr schon? 🚗",
      tuete: "Viel Glück heute! 🍀",
      text: "Der gefährlichste Song am Steuer ist angeblich „American Idiot“ von Green Day. Forschende der South China University of Technology ließen Leute in einem Fahrsimulator fahren: Mit Rockmusik wechselten sie etwa doppelt so oft die Spur und fuhren im Schnitt 5 mph zu schnell. Schuld soll das schnelle Tempo ab etwa 120 BPM sein. Auf Platz zwei folgt „Party in the USA“ von Miley Cyrus, auf Platz drei „Mr. Brightside“ von The Killers. Gemessen wurde allerdings das Fahrverhalten im Simulator, keine echten Unfälle.",
      quelle: { text: "NME", url: "https://www.nme.com/news/music/most-dangerous-songs-drive-green-day-led-zeppelin-2549342" }
    },

    7: {
      titel: "Wusstet ihr schon? 🔔",
      text: "Laut Guinness-Buch der Rekorde war „Jingle Bells“ das erste Lied, das im Weltall gespielt wurde. 1965 spielten die Astronauten von Gemini 6 es mit einer Mundharmonika und Schlittenglöckchen, die sie heimlich an Bord hatten.",
      quelle: { text: "The Debrief", url: "https://thedebrief.org/jingle-bells-was-the-first-song-ever-played-in-outer-space/" }
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
      titel: "Wusstet ihr schon? 🦐",
      tuete: "Viel Glück heute! 🍀",
      text: "Der Fangschreckenkrebs schlägt mit rund 80 km/h zu, und der Schlag dauert weniger als 3 Millisekunden. Dabei bilden sich im Wasser kleine Bläschen, die beim Zerplatzen sogar einen Lichtblitz erzeugen.",
      quelle: { text: "National Geographic", url: "https://www.nationalgeographic.com/science/article/the-mantis-shrimp-has-the-worlds-fastest-punch" }
    },

    10: {
      titel: "Wusstet ihr schon? 🤗",
      text: "In einer Studie der Carnegie Mellon University mit 404 Erwachsenen wurden 14 Abende lang Umarmungen und Streit festgehalten. Wer öfter umarmt wurde, hatte bei einer Erkältung mildere Symptome.",
      quelle: { text: "Association for Psychological Science", url: "https://www.psychologicalscience.org/news/releases/hugs-may-help-protect-against-colds-stress-related-infection.html" }
    },

    11: {
      titel: "Wusstet ihr schon? 🪐",
      text: "Auf der Venus dauert ein Tag länger als ein Jahr. Sie braucht etwa 243 Erdtage für eine Drehung um sich selbst, aber nur etwa 225 Erdtage für eine Runde um die Sonne. Und weil sie sich andersherum dreht als die Erde, geht die Sonne dort im Westen auf.",
      quelle: { text: "NASA Space Place", url: "https://spaceplace.nasa.gov/all-about-venus/" }
    },

    12: {
      titel: "Wusstet ihr schon? 🐱",
      tuete: "Viel Glück heute! 🍀",
      text: "Katzen können Süßes nicht schmecken. Bei ihnen fehlt ein Stück eines Gens (Tas1r2), das für den Süßgeschmack gebraucht wird. Entdeckt haben das Forschende am Monell Chemical Senses Center in Philadelphia.",
      quelle: { text: "Scientific American", url: "https://www.scientificamerican.com/article/strange-but-true-cats-cannot-taste-sweets/" }
    },

    13: {
      titel: "Wusstet ihr schon? 🍅",
      text: "Ketchup wurde in den 1830er Jahren als Medizin verkauft. Der amerikanische Arzt John Cook Bennett bewarb Tomatenpillen gegen Durchfall, Verdauungsprobleme und Leberschäden, und ab 1837 gab es „Dr. Miles' Compound Extract of Tomato“. Um 1850 war die Idee wieder vom Tisch.",
      quelle: { text: "Chowhound", url: "https://www.chowhound.com/1779752/history-medicinal-ketchup/" }
    },

    14: {
      titel: "Wusstet ihr schon? ☕",
      text: "Laut einer Umfrage von 2019 trinken die Deutschen im Schnitt rund 152 Liter Kaffee im Jahr. Das ist mehr als Bier (102 Liter) und sogar etwas mehr als Mineralwasser (150 Liter).",
      quelle: { text: "Tageskarte (durgol Studie 2019)", url: "https://www.tageskarte.io/zahlen/detail/deutsche-trinken-mehr-kaffee-als-bier.html" }
    },

    15: {
      titel: "Wusstet ihr schon? 😂",
      text: "Gemeinsames Lachen macht schmerzunempfindlicher. In einer Studie der Universität Oxford stieg die Schmerztoleranz nach etwa 15 Minuten Comedy in der Gruppe im Schnitt um rund 10 Prozent.",
      quelle: { text: "The Royal Society", url: "https://royalsociety.org/news/2011/laughter-is-the-best-medicine/" }
    },

    16: {
      titel: "Wusstet ihr schon? 🌲",
      text: "Schon 20 bis 30 Minuten an einem Ort, der sich nach Natur anfühlt, senken das Stresshormon Cortisol am meisten, zeigt eine Studie der University of Michigan. Man muss dafür nicht mal wandern, Sitzen reicht.",
      quelle: { text: "Frontiers", url: "https://blog.frontiersin.org/2019/04/09/20-minute-nature-pill-relieves-stress/" }
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
      schluss: "Danke, dass es euch gibt 🫶"},

    18: {
      titel: "Wusstet ihr schon? 🐔",
      text: "Auf der Erde leben deutlich mehr Hühner als Menschen. Die FAO zählte 2020 über 33 Milliarden Hühner bei etwa 7,8 Milliarden Menschen, das sind rund vier Hühner pro Person.",
      quelle: { text: "The Humane League (nach FAO)", url: "https://thehumaneleague.org/article/how-many-chickens-are-in-the-world" }
    },

    19: {
      titel: "Wusstet ihr schon? 🦌",
      text: "Die Augen von Rentieren sind im Sommer golden und im Winter blau. Im Winter ist ihre Netzhaut mindestens 1000-mal lichtempfindlicher, was ihnen in der Dunkelheit der Polarnacht hilft.",
      quelle: { text: "National Geographic", url: "https://www.nationalgeographic.com/science/phenomena/2013/10/29/why-are-reindeer-eyes-golden-in-summer-but-blue-in-winter/" }
    },

    20: {
      titel: "Wusstet ihr schon? 🍪",
      tuete: "Viel Glück heute! 🍀",
      text: "Elisen-Lebkuchen müssen mindestens 25 Prozent Mandeln, Haselnüsse oder Walnüsse enthalten und dürfen höchstens 10 Prozent Mehl haben. Viele Bäcker verwenden sogar gar kein Mehl.",
      quelle: { text: "Stadt Nürnberg", url: "https://www.nuernberg.de/internet/stadtportal/nh_97_lebkuchen.html" }
    },

    21: {
      titel: "Wusstet ihr schon? 🍗",
      text: "In Japan gehört Kentucky Fried Chicken zu Weihnachten dazu. Die Kampagne „Kentucky für Weihnachten“ gibt es seit 1974, und viele bestellen schon Monate vorher, um nicht bis zu zwei Stunden anzustehen.",
      quelle: { text: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/arts-culture/why-japan-celebrates-christmas-with-kfc-1-161666960/" }
    },

    22: {
      titel: "Wusstet ihr schon? 🎄",
      tuete: "Viel Glück heute! 🍀",
      text: "Rund 29,8 Millionen Weihnachtsbäume stehen jedes Jahr in deutschen Wohnzimmern, also etwa einer in jedem zweiten Haushalt. Acht von zehn Deutschen entscheiden sich für eine Nordmanntanne (Stand 2019).",
      quelle: { text: "Bundesregierung", url: "https://www.bundesregierung.de/breg-de/service/archiv/fakten-zum-weihnachtsbaum-1688316" }
    },

    23: {
      titel: "Wusstet ihr schon? 🗼",
      text: "Der Eiffelturm bewegt sich. Wenn die Sonne nur eine Seite aufheizt, neigt sich die Spitze leicht von ihr weg und zeichnet an klaren Tagen einen Kreis von etwa 15 Zentimetern.",
      quelle: { text: "Tour Eiffel", url: "https://www.toureiffel.paris/en/news/history-and-culture/why-does-eiffel-tower-change-size" }
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
