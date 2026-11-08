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
      text: "Liebe Antonia, lieber Stef,\n\nWillkommen bei eurem Adventskalender. Wir hoffen, dass wir euch den Dezember und die Weihnachtszeit mit jedem Türchen ein Stück versüßen können und dass ihr Freude an dem Kalender habt.\n\n🫶",
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
      titel: "Wusstet ihr schon? 🧱",
      text: "Lego stellt jedes Jahr rund 306 Millionen kleine Gummireifen her. Den Guinness-Rekord für die größte jährliche Stückzahl an Spielzeugreifen hält Lego, 2010 waren es sogar 381 Millionen.",
      quelle: { text: "Guinness World Records", url: "https://www.guinnessworldrecords.com/world-records/100909-largest-tyre-manufacture-per-annum" }
    },

    5: {
      titel: "Wusstet ihr schon? 🧖",
      text: "In Finnland gibt es über 3 Millionen Saunen, bei rund 5,6 Millionen Einwohnern. Rechnerisch kommt also fast eine Sauna auf zwei Menschen.",
      quelle: { text: "MyHelsinki", url: "https://www.myhelsinki.fi/?p=13928" }
    },

    6: {
      titel: "Wusstet ihr schon? 🦌",
      tuete: "Viel Glück heute! 🍀",
      text: "Rudolph wurde 1939 als Werbefigur für ein Kaufhaus erfunden. Der Texter Robert L. May schrieb die Geschichte für Montgomery Ward, und schon im ersten Jahr wurden 2,4 Millionen Exemplare verschenkt.",
      quelle: { text: "Smithsonian Institution", url: "https://newsdesk.si.edu/snapshot/rudolph-red-nosed-reindeer" }
    },

    7: {
      titel: "Wusstet ihr schon? 🔔",
      text: "Laut Guinness-Buch der Rekorde war „Jingle Bells“ das erste Lied, das im Weltall gespielt wurde. 1965 spielten die Astronauten von Gemini 6 es mit einer Mundharmonika und Schlittenglöckchen, die sie heimlich an Bord hatten.",
      quelle: { text: "The Debrief", url: "https://thedebrief.org/jingle-bells-was-the-first-song-ever-played-in-outer-space/" }
    },

    8: {
      titel: "Nitschis Konstanz-Empfehlung für euch",
      text: "Wenn ihr mal in Konstanz seid und Lust auf ein richtig gutes Eggdrop Sandwich habt, schaut unbedingt bei den beiden vorbei:",
      links: [
        { text: "khibar_konstanz auf Instagram", url: "https://www.instagram.com/khibar_konstanz/" },
        { text: "bloggers_kn auf Instagram", url: "https://www.instagram.com/bloggers_kn/" }
      ],
      schluss: "Lasst es euch schmecken 😋"},

    9: {
      titel: "Wusstet ihr schon? 🐾",
      tuete: "Viel Glück heute! 🍀",
      text: "Wombats machen würfelförmige Köttel, bis zu 100 Würfel pro Tag. Forschende der Georgia Tech haben herausgefunden, warum: Ihr Darm ist an manchen Stellen steifer und an anderen elastischer, und dadurch entstehen beim Zusammenziehen Ecken.",
      quelle: { text: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/smart-news/scientists-have-solved-mystery-how-wombats-poop-cubes-180976898/" }
    },

    10: {
      titel: "Wusstet ihr schon? 🤗",
      text: "In einer Studie der Carnegie Mellon University mit 404 Erwachsenen wurden 14 Abende lang Umarmungen und Streit festgehalten. Wer öfter umarmt wurde, hatte bei einer Erkältung mildere Symptome.",
      quelle: { text: "Association for Psychological Science", url: "https://www.psychologicalscience.org/news/releases/hugs-may-help-protect-against-colds-stress-related-infection.html" }
    },

    11: {
      titel: "Wusstet ihr schon? 🎄",
      text: "Der älteste Beleg für einen geschmückten Tannenbaum in einem Haus stammt aus Bremen, aus dem Jahr 1570. In der Zunftstube stand eine kleine Tanne mit Datteln, Äpfeln, Nüssen, Brezeln und Papierblumen.",
      quelle: { text: "waldwissen.net", url: "https://www.waldwissen.net/de/wald-und-mensch/forstgeschichte/geschichte-des-weihnachtsbaumes" }
    },

    12: {
      titel: "Wusstet ihr schon? 🎶",
      tuete: "Viel Glück heute! 🍀",
      text: "Wenn Menschen im Chor zusammen singen, gleichen sich ihr Atem und ihr Herzschlag an. Das haben Forschende aus Berlin schon 2011 gemessen: Die Herzen der Sängerinnen und Sänger schlagen dann im selben Rhythmus.",
      quelle: { text: "Universität Potsdam", url: "https://uni-potsdam.de/de/soundscapelab/computational-ethnomusicology/synchronisation-of-heartbeat-rates-during-singing" }
    },

    13: {
      titel: "Wusstet ihr schon? 🎓",
      text: "Die Universität Oxford ist älter als das Aztekenreich. In Oxford wird seit spätestens 1096 gelehrt, die Aztekenstadt Tenochtitlán wurde erst 1325 gegründet.",
      quelle: { text: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/smart-news/oxford-university-is-older-than-the-aztecs-1529607/" }
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
      titel: "Wusstet ihr schon? 🦌",
      text: "Rentierböcke werfen ihr Geweih schon zwischen Ende November und Januar ab, die Weibchen behalten es bis zum Frühjahr. Wenn Santas Rentiere an Weihnachten ein Geweih tragen, sind sie also wahrscheinlich Damen.",
      quelle: { text: "Snopes", url: "https://www.snopes.com/fact-check/reindeer-games" }
    },

    19: {
      titel: "Wusstet ihr schon? 🐶",
      text: "Wenn sich Hund und Mensch lange in die Augen schauen, steigt bei beiden das Bindungshormon Oxytocin. Bei Wölfen und Menschen passiert das nicht, denn für Wölfe ist direkter Blickkontakt eher eine Drohung.",
      quelle: { text: "TIME (Studie in Science, 2015)", url: "https://time.com/3824952/dog-gaze-eyes/" }
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
      titel: "Wusstet ihr schon? 🎅",
      text: "Seit 1955 verfolgt das US-Militär jedes Jahr den Weg des Weihnachtsmanns. Angefangen hat es mit einer falsch gedruckten Telefonnummer in einer Werbeanzeige, die Kinder beim Militär anrufen ließ. Oberst Harry Shoup nahm die Anrufe einfach an.",
      quelle: { text: "Fortune", url: "https://fortune.com/2024/12/24/norad-santa-tracker-history-cold-war/" }
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
