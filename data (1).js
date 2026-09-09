/* ============================================================
   AFTERSHIFT PICKLECLUB — SITE CONTENT
   This is the only file you need to edit. Nothing here is code
   you have to understand. Change the words between the "quote
   marks", save, and the website updates.

   Two rules that keep it working:
     1. Never delete a  "  ,  {  }  or  [  ]
     2. Every line inside a list ends with a comma, except the last

   WHAT'S IN THIS FILE
     1.  Shared links      the registration form and map, used everywhere
     2.  Your club         name, tagline, short description, logo
     3.  Home page hero    the big headline visitors see first
     4.  About us          your story + photos
     5.  Divisions         Regular / Ascend
     6.  Players           the roster
     7.  Games             scores — the part you update each week
     8.  Photo albums      Google Photos links
     9.  How queueing works
     10. Play sessions     Open Play, Ascend, Social Play, Drills
     11. Weekly schedule
     12. Announcements     upcoming sessions, venue, payment policy
     13. FAQ
     14. Contact, social media and important links
   ============================================================ */


/* 1. SHARED LINKS -----------------------------------------
   These two links appear in many places on the site. Change
   them here once and every button updates.
   --------------------------------------------------------- */
const REGISTRATION_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSek8K6HOml05qrdmo8a3V8I4TUkbTM-c9-SSId7s6at6tQqHA/viewform";
const VENUE_MAP = "https://maps.app.goo.gl/TCNKFhghdgNyuupn9";


/* 2. YOUR CLUB -------------------------------------------- */
const CLUB = {
  name: "Aftershift Pickleclub",
  tagline: "Clock out. Paddle up.",
  about:
    "Aftershift Pickleclub is a Dubai-based pickleball community bringing people together after work through open play, beginner sessions, social games, drills, and a shared love of the sport.",
  where:
    "The English College – Al Safa Primary Hall, opposite Oasis Mall, Al Safa 1, off Sheikh Zayed Road, Dubai. Venues may change from session to session.",
  schedule:
    "Friday and Saturday, 7:00 PM – 10:00 PM. Ascend and drills sessions are announced separately.",
  contacts: [
    { label: "Register for a session", url: REGISTRATION_FORM },
    { label: "Bon — WhatsApp +971 50 837 2571", url: "https://wa.me/971508372571" },
    { label: "Jes — WhatsApp +971 55 448 2655", url: "https://wa.me/971554482655" }
  ],

  /* LOGO: save your logo as logo.png next to index.html and it
     appears in the header. Use the version with WHITE lettering on
     a transparent background — the site is black.
     logo.svg, logo.jpg and logo.webp work too.                    */
  logoIncludesName: true
};


/* 3. HOME PAGE HERO ---------------------------------------
   The first thing people see. Keep the headline short.
   --------------------------------------------------------- */
const HERO = {
  eyebrow: "Same time after shift?",
  headline: "Clock out. Paddle up.",
  text: "A Dubai pickleball community built for good games, good people, and everything that happens after shift.",
  buttons: [
    { label: "Join open play", url: REGISTRATION_FORM },
    { label: "Start with Ascend", url: REGISTRATION_FORM, quiet: true }
  ]
};


/* 4. ABOUT US ---------------------------------------------
   PHOTOS: make a folder called  photos  next to index.html,
   then a folder called  about  inside it. Drop your pictures
   in and list the file names below, like:
       photos: ["photos/about/1.png", "photos/about/2.jpg"]
   Leave it as  photos: []  until you have images ready.
   --------------------------------------------------------- */
const ABOUT = {
  lede: "Aftershift Pickleclub started with a simple idea: finish the shift, grab a paddle, and meet on court.",
  paragraphs: [
    "We're a community built around friendship, pickleball, and the shared need to unwind after a long day. What started as a group of friends playing after work has grown into a space where regulars, beginners, and new faces can meet, play, improve, compete, and most importantly, enjoy the game together.",
    "Whether you've been playing for a while or you're holding a paddle for the first time, there's a place for you at Aftershift.",
    "We keep things social, competitive enough to make things interesting, and welcoming enough that you can show up alone and leave knowing a few more people."
  ],
  closing: "Same time. Aftershift.",
  photos: ["photos/about/a.png]
};


/* 5. DIVISIONS --------------------------------------------
   Rankings and games are kept completely separate per division.
   Rename them here and the whole site follows.
   --------------------------------------------------------- */
const DIVISIONS = [
  { id: "regular", name: "Regular" },
  { id: "ascend",  name: "Ascend"  }
];


/* 6. PLAYERS ----------------------------------------------
   Just the roster — everyone, both divisions together. Wins,
   losses, games and rank are calculated from the games below,
   so you never type them.

   PHOTOS: don't touch the photo line. Save the picture as the
   player's id — john.jpg — and drop it in the photos folder.
   No file yet? Their initials show instead. Nothing breaks.
   --------------------------------------------------------- */
const PLAYERS = [
  // Regular
  { id: "john",    name: "John Smith",    photo: "" },
  { id: "alex",    name: "Alex Brown",    photo: "" },
  { id: "michael", name: "Michael Lee",   photo: "" },
  { id: "david",   name: "David Cruz",    photo: "" },
  { id: "maria",   name: "Maria Santos",  photo: "" },
  { id: "grace",   name: "Grace Tan",     photo: "" },
  { id: "ryan",    name: "Ryan Cooper",   photo: "" },
  { id: "priya",   name: "Priya Nair",    photo: "" },
  { id: "sam",     name: "Sam Okafor",    photo: "" },
  { id: "elena",   name: "Elena Ruiz",    photo: "" },
  // Ascend
  { id: "nico",    name: "Nico Delgado",  photo: "" },
  { id: "tessa",   name: "Tessa Villar",  photo: "" },
  { id: "omar",    name: "Omar Haddad",   photo: "" },
  { id: "lian",    name: "Lian Reyes",    photo: "" },
  { id: "kaye",    name: "Kaye Domingo",  photo: "" },
  { id: "ben",     name: "Ben Ocampo",    photo: "" }
];

/* 7. GAMES -------------------------------------------------
   One line per game. Use the player id from the list above.
   date  must be written YYYY-MM-DD.
   div   is "regular" or "ascend" — this keeps the two rankings
         apart. Leave it out and the game counts as regular.
   game  numbering starts at 1 again for each division.
   The winner is worked out from the score, so you don't set it.
   --------------------------------------------------------- */
const MATCHES = [
  // ======== Saturday, September 5, 2026 · REGULAR ========
  { date: "2026-09-05", div: "regular", game: 1,  team1: ["john", "alex"],     team2: ["michael", "david"],  score1: 11, score2: 8  },
  { date: "2026-09-05", div: "regular", game: 2,  team1: ["maria", "grace"],   team2: ["ryan", "priya"],     score1: 11, score2: 6  },
  { date: "2026-09-05", div: "regular", game: 3,  team1: ["sam", "elena"],     team2: ["john", "michael"],   score1: 11, score2: 9  },
  { date: "2026-09-05", div: "regular", game: 4,  team1: ["alex", "david"],    team2: ["maria", "sam"],      score1: 9,  score2: 11 },
  { date: "2026-09-05", div: "regular", game: 5,  team1: ["john", "grace"],    team2: ["priya", "elena"],    score1: 11, score2: 4  },
  { date: "2026-09-05", div: "regular", game: 6,  team1: ["ryan", "michael"],  team2: ["alex", "sam"],       score1: 11, score2: 7  },
  { date: "2026-09-05", div: "regular", game: 7,  team1: ["john", "david"],    team2: ["maria", "priya"],    score1: 11, score2: 9  },
  { date: "2026-09-05", div: "regular", game: 8,  team1: ["grace", "elena"],   team2: ["alex", "ryan"],      score1: 8,  score2: 11 },
  { date: "2026-09-05", div: "regular", game: 9,  team1: ["michael", "priya"], team2: ["sam", "david"],      score1: 11, score2: 6  },
  { date: "2026-09-05", div: "regular", game: 10, team1: ["john", "maria"],    team2: ["ryan", "elena"],     score1: 11, score2: 5  },
  { date: "2026-09-05", div: "regular", game: 11, team1: ["grace", "alex"],    team2: ["michael", "sam"],    score1: 11, score2: 9  },
  { date: "2026-09-05", div: "regular", game: 12, team1: ["david", "elena"],   team2: ["john", "priya"],     score1: 7,  score2: 11 },
  { date: "2026-09-05", div: "regular", game: 13, team1: ["ryan", "sam"],      team2: ["maria", "grace"],    score1: 11, score2: 8  },
  { date: "2026-09-05", div: "regular", game: 14, team1: ["alex", "priya"],    team2: ["michael", "elena"],  score1: 6,  score2: 11 },
  { date: "2026-09-05", div: "regular", game: 15, team1: ["grace", "david"],   team2: ["john", "ryan"],      score1: 11, score2: 9  },
  { date: "2026-09-05", div: "regular", game: 16, team1: ["grace", "priya"],   team2: ["david", "maria"],    score1: 8,  score2: 11 },

  // ======== Saturday, September 5, 2026 · ASCEND ========
  { date: "2026-09-05", div: "ascend",  game: 1,  team1: ["nico", "tessa"],    team2: ["omar", "lian"],      score1: 11, score2: 7  },
  { date: "2026-09-05", div: "ascend",  game: 2,  team1: ["kaye", "ben"],      team2: ["nico", "omar"],      score1: 11, score2: 9  },
  { date: "2026-09-05", div: "ascend",  game: 3,  team1: ["tessa", "lian"],    team2: ["kaye", "nico"],      score1: 8,  score2: 11 },
  { date: "2026-09-05", div: "ascend",  game: 4,  team1: ["omar", "ben"],      team2: ["tessa", "kaye"],     score1: 11, score2: 6  },
  { date: "2026-09-05", div: "ascend",  game: 5,  team1: ["nico", "lian"],     team2: ["ben", "omar"],       score1: 11, score2: 8  },
  { date: "2026-09-05", div: "ascend",  game: 6,  team1: ["kaye", "tessa"],    team2: ["nico", "ben"],       score1: 9,  score2: 11 },
  { date: "2026-09-05", div: "ascend",  game: 7,  team1: ["omar", "kaye"],     team2: ["lian", "ben"],       score1: 11, score2: 5  },
  { date: "2026-09-05", div: "ascend",  game: 8,  team1: ["tessa", "nico"],    team2: ["kaye", "lian"],      score1: 11, score2: 9  },

  // ======== Saturday, August 29, 2026 · REGULAR ========
  { date: "2026-08-29", div: "regular", game: 1,  team1: ["michael", "maria"], team2: ["john", "priya"],     score1: 11, score2: 7  },
  { date: "2026-08-29", div: "regular", game: 2,  team1: ["alex", "sam"],      team2: ["grace", "elena"],    score1: 9,  score2: 11 },
  { date: "2026-08-29", div: "regular", game: 3,  team1: ["john", "michael"],  team2: ["ryan", "david"],     score1: 11, score2: 6  },
  { date: "2026-08-29", div: "regular", game: 4,  team1: ["grace", "maria"],   team2: ["alex", "priya"],     score1: 11, score2: 9  },
  { date: "2026-08-29", div: "regular", game: 5,  team1: ["elena", "david"],   team2: ["sam", "ryan"],       score1: 5,  score2: 11 },
  { date: "2026-08-29", div: "regular", game: 6,  team1: ["michael", "grace"], team2: ["john", "alex"],      score1: 11, score2: 8  },
  { date: "2026-08-29", div: "regular", game: 7,  team1: ["priya", "elena"],   team2: ["maria", "sam"],      score1: 11, score2: 9  },
  { date: "2026-08-29", div: "regular", game: 8,  team1: ["ryan", "grace"],    team2: ["david", "michael"],  score1: 7,  score2: 11 },
  { date: "2026-08-29", div: "regular", game: 9,  team1: ["john", "sam"],      team2: ["maria", "elena"],    score1: 11, score2: 4  },
  { date: "2026-08-29", div: "regular", game: 10, team1: ["alex", "ryan"],     team2: ["priya", "david"],    score1: 11, score2: 8  },
  { date: "2026-08-29", div: "regular", game: 11, team1: ["michael", "elena"], team2: ["grace", "sam"],      score1: 11, score2: 9  },
  { date: "2026-08-29", div: "regular", game: 12, team1: ["john", "maria"],    team2: ["ryan", "priya"],     score1: 11, score2: 6  },

  // ======== Saturday, August 29, 2026 · ASCEND ========
  { date: "2026-08-29", div: "ascend",  game: 1,  team1: ["nico", "omar"],     team2: ["tessa", "ben"],      score1: 11, score2: 9  },
  { date: "2026-08-29", div: "ascend",  game: 2,  team1: ["kaye", "lian"],     team2: ["nico", "tessa"],     score1: 7,  score2: 11 },
  { date: "2026-08-29", div: "ascend",  game: 3,  team1: ["omar", "ben"],      team2: ["kaye", "nico"],      score1: 11, score2: 8  },
  { date: "2026-08-29", div: "ascend",  game: 4,  team1: ["tessa", "lian"],    team2: ["omar", "kaye"],      score1: 11, score2: 6  },
  { date: "2026-08-29", div: "ascend",  game: 5,  team1: ["ben", "lian"],      team2: ["nico", "kaye"],      score1: 9,  score2: 11 },
  { date: "2026-08-29", div: "ascend",  game: 6,  team1: ["tessa", "omar"],    team2: ["ben", "lian"],       score1: 11, score2: 7  },

  // ======== Saturday, August 22, 2026 · REGULAR ========
  { date: "2026-08-22", div: "regular", game: 1,  team1: ["grace", "david"],   team2: ["john", "sam"],       score1: 11, score2: 9  },
  { date: "2026-08-22", div: "regular", game: 2,  team1: ["alex", "maria"],    team2: ["michael", "ryan"],   score1: 8,  score2: 11 },
  { date: "2026-08-22", div: "regular", game: 3,  team1: ["john", "grace"],    team2: ["david", "maria"],    score1: 11, score2: 5  },
  { date: "2026-08-22", div: "regular", game: 4,  team1: ["sam", "michael"],   team2: ["alex", "ryan"],      score1: 11, score2: 7  },
  { date: "2026-08-22", div: "regular", game: 5,  team1: ["grace", "ryan"],    team2: ["john", "maria"],     score1: 9,  score2: 11 },
  { date: "2026-08-22", div: "regular", game: 6,  team1: ["david", "alex"],    team2: ["sam", "grace"],      score1: 6,  score2: 11 },
  { date: "2026-08-22", div: "regular", game: 7,  team1: ["michael", "john"],  team2: ["ryan", "david"],     score1: 11, score2: 8  },
  { date: "2026-08-22", div: "regular", game: 8,  team1: ["maria", "sam"],     team2: ["grace", "michael"],  score1: 9,  score2: 11 },
  { date: "2026-08-22", div: "regular", game: 9,  team1: ["alex", "john"],     team2: ["david", "ryan"],     score1: 11, score2: 4  },
  { date: "2026-08-22", div: "regular", game: 10, team1: ["maria", "michael"], team2: ["grace", "alex"],     score1: 7,  score2: 11 },

  // ======== Saturday, August 22, 2026 · ASCEND ========
  { date: "2026-08-22", div: "ascend",  game: 1,  team1: ["kaye", "tessa"],    team2: ["nico", "ben"],       score1: 11, score2: 8  },
  { date: "2026-08-22", div: "ascend",  game: 2,  team1: ["omar", "lian"],     team2: ["kaye", "nico"],      score1: 11, score2: 9  },
  { date: "2026-08-22", div: "ascend",  game: 3,  team1: ["tessa", "ben"],     team2: ["omar", "kaye"],      score1: 6,  score2: 11 },
  { date: "2026-08-22", div: "ascend",  game: 4,  team1: ["nico", "lian"],     team2: ["tessa", "omar"],     score1: 11, score2: 7  },
  { date: "2026-08-22", div: "ascend",  game: 5,  team1: ["ben", "kaye"],      team2: ["lian", "tessa"],     score1: 11, score2: 9  },
  { date: "2026-08-22", div: "ascend",  game: 6,  team1: ["omar", "nico"],     team2: ["ben", "lian"],       score1: 8,  score2: 11 }
];

/* 8. PHOTO ALBUMS -----------------------------------------
   Paste the share link from Google Photos (Album > Share >
   Create link > Copy). cover can stay "" — the card will draw
   a court pattern instead.
   --------------------------------------------------------- */
const ALBUMS = [
  {
    date: "2026-09-05",
    title: "September 5 open play",
    description: "Both divisions on court, four rotations, close finishes.",
    url: "https://photos.app.goo.gl/REPLACE-WITH-YOUR-ALBUM-1",
    cover: ""
  },
  {
    date: "2026-08-29",
    title: "August 29 open play",
    description: "Cooler evening, bigger turnout. New paddles all round.",
    url: "https://photos.app.goo.gl/REPLACE-WITH-YOUR-ALBUM-2",
    cover: ""
  },
  {
    date: "2026-08-22",
    title: "August 22 open play",
    description: "Beginners' clinic before the rotation started.",
    url: "https://photos.app.goo.gl/REPLACE-WITH-YOUR-ALBUM-3",
    cover: ""
  }
];


/* 9. HOW OUR QUEUEING WORKS -------------------------------
   Shown on the Sessions page.
   --------------------------------------------------------- */
const QUEUE = {
  title: "Play. Rotate. Repeat.",
  intro: [
    "Our open play sessions use a system-based queue to keep games organised and give everyone a fair opportunity to get on court.",
    "Depending on the number of players and courts available, we may also use stacking to help keep games moving smoothly and reduce unnecessary waiting time."
  ],
  steps: [
    { title: "Join the queue",          text: "Once you arrive and check in, you'll be added to the session queue." },
    { title: "Match and court assignment", text: "Players are assigned according to the active queue system. Depending on the session, turnout and court availability, we may use stacking or different player combinations to keep the rotation moving." },
    { title: "Play your game",          text: "Regular open play games have a maximum court time of around 10 minutes so everyone gets enough playing opportunities." },
    { title: "Return to the rotation",  text: "Once your game is finished, players return to the queue and wait for their next court assignment." },
    { title: "Session rankings",        text: "At the end of selected open play sessions, results may be ranked according to the number of wins achieved during the session." },
    { title: "Recognition",             text: "Players finishing at the top of the session standings may receive a special shoutout from the community." }
  ],
  format: [
    { label: "Rotation style",  value: "Popcorn-style rotation" },
    { label: "Players",         value: "Typically doubles, four players per court" },
    { label: "Game duration",   value: "Around 10 minutes during standard open play" },
    { label: "Scoring format",  value: "Session-dependent, announced before play" }
  ],
  rules: [
    "Please check in before joining the queue.",
    "Respect the queue and court assignments.",
    "Games may be limited to around 10 minutes during busy sessions.",
    "Once your game finishes, return to the queue for your next rotation.",
    "Player combinations may change throughout the session.",
    "Be ready when your court or name is called.",
    "Respect all players regardless of skill level.",
    "Keep it competitive, but keep it friendly."
  ],
  busy: "During high-attendance sessions we may adjust the queue, use stacking, shorten rotations, or change player combinations to make sure court time remains as fair as possible.",
  goal: "More playing. Less waiting. Everyone gets a turn."
};


/* 10. PLAY SESSIONS ---------------------------------------
   One block per session type. To add another, copy a whole
   block from {  down to  },  and change the words.
   Any line you don't need can be deleted, or just write "TBA".
   --------------------------------------------------------- */
const SESSIONS = [
  {
    name: "Regular open play",
    tagline: "The main Aftershift session",
    paragraphs: [
      "Our regular open play is where the ASPC community comes together.",
      "Sessions are organised through invitation and registration. Once a session is announced, players can complete the ASPC registration form to request a place.",
      "Expect rotating matches, different partners and opponents, friendly competition, session rankings, plenty of rallies, and the usual Aftershift energy."
    ],
    details: [
      { label: "Time",             value: "7:00 PM – 10:00 PM" },
      { label: "Regular price",    value: "AED 30" },
      { label: "With paddle rental", value: "AED 40" },
      { label: "Skill level",      value: "Players comfortable joining regular open play" },
      { label: "Courts",           value: "Usually 3, 4 or 6 depending on the venue" },
      { label: "Maximum players",  value: "Varies with the number of courts" },
      { label: "Registration",     value: "Required" }
    ],
    join: {
      title: "How to join",
      paragraphs: [
        "Sessions are announced through the Aftershift community.",
        "Complete the official ASPC registration form to register your interest. Your slot is confirmed according to availability and once the required payment has been completed."
      ]
    },
    button: { label: "Register for open play", url: REGISTRATION_FORM },
    venue: {
      title: "Current home court",
      lines: [
        "The English College – Al Safa Primary Hall",
        "Opposite Oasis Mall",
        "Al Safa 1, off Sheikh Zayed Road",
        "Dubai, UAE"
      ],
      mapUrl: VENUE_MAP,
      note: "Other venues may be announced depending on court availability."
    }
  },

  {
    name: "Ascend open play",
    tagline: "New to pickleball? Start here.",
    paragraphs: [
      "Ascend is our beginner-focused session, designed for players who are completely new to pickleball or still building the confidence to join regular open play.",
      "Players get the opportunity to understand the game, practise the basics, experience real rallies, and gradually become more comfortable on court without the pressure of immediately playing against experienced regulars.",
      "Ascend creates a more relaxed environment where beginners can develop at their own pace before stepping into regular community open play."
    ],
    motto: "Learn first. Play more. Build confidence. Ascend.",
    list: {
      title: "Ideal for",
      items: [
        "Complete beginners",
        "First-time players",
        "Players learning the rules",
        "Players still developing consistency",
        "Players not yet confident joining regular open play"
      ]
    },
    details: [
      { label: "Location",         value: "TBA per session" },
      { label: "Day",              value: "TBA" },
      { label: "Time",             value: "TBA" },
      { label: "Price",            value: "TBA" },
      { label: "Number of courts", value: "TBA" },
      { label: "Registration",     value: "Required" }
    ],
    button: { label: "Register for Ascend", url: REGISTRATION_FORM }
  },

  {
    name: "ASPC social play",
    tagline: "Mix. Play. Connect.",
    paragraphs: [
      "Social play is about mixing the community together.",
      "Instead of focusing heavily on rankings or skill groups, players rotate, mix partners, meet other members, and play with different people throughout the session.",
      "It's a lighter, more social format while still giving everyone plenty of opportunities to play. Expect different partners, different opponents, fun rallies, and plenty of chances to meet the rest of the Aftershift community."
    ],
    details: [
      { label: "Skill level",  value: "Mixed, all levels" },
      { label: "Location",     value: "TBA per session" },
      { label: "Day",          value: "TBA" },
      { label: "Time",         value: "TBA" },
      { label: "Price",        value: "TBA" },
      { label: "Registration", value: "Required when announced" }
    ],
    button: { label: "Register for social play", url: REGISTRATION_FORM }
  },

  {
    name: "ASPC drills",
    tagline: "Sometimes playing more isn't enough",
    paragraphs: [
      "Drills sessions are built around focused repetition and practical game situations, to help players develop better technique, consistency, movement and decision-making.",
      "Rather than only playing matches, these sessions give players dedicated time to work on individual skills before putting them into live-game situations."
    ],
    list: {
      title: "Skills may include",
      items: [
        "Serving", "Returns", "Dinking", "Drives", "Third-shot drops",
        "Volleys", "Reset shots", "Court positioning", "Partner movement",
        "Doubles strategy", "Shot selection", "Game awareness"
      ]
    },
    details: [
      { label: "Who can join",         value: "Session-dependent" },
      { label: "Session leader",       value: "TBA" },
      { label: "Location",             value: "TBA" },
      { label: "Day",                  value: "TBA" },
      { label: "Time",                 value: "TBA" },
      { label: "Price",                value: "TBA" },
      { label: "Maximum participants", value: "TBA" },
      { label: "Registration",         value: "TBA" }
    ]
  }
];


/* 11. WEEKLY SCHEDULE -------------------------------------- */
const SCHEDULE = {
  intro: "Our playing schedule may change depending on court availability.",
  days: [
    {
      day: "Friday",
      details: [
        { label: "Session",  value: "Regular open play" },
        { label: "Time",     value: "7:00 PM – 10:00 PM" },
        { label: "Location", value: "Current venue, or TBA in the weekly announcement" }
      ]
    },
    {
      day: "Saturday",
      details: [
        { label: "Session",  value: "Open play / social play" },
        { label: "Time",     value: "7:00 PM – 10:00 PM" },
        { label: "Location", value: "Current venue, or TBA in the weekly announcement" }
      ]
    }
  ],
  extras: [
    { title: "Ascend sessions", text: "Announced separately depending on court and schedule availability." },
    { title: "Drills",          text: "Announced separately." }
  ],
  notice: "Always check the latest ASPC announcement before heading to the venue. Locations, court availability and session formats may change from week to week."
};


/* 12. ANNOUNCEMENTS ---------------------------------------
   Update this each week. To add a session, copy one block
   from {  down to  },  and change the date and details.
   --------------------------------------------------------- */
const ANNOUNCEMENTS = {
  title: "Upcoming sessions",
  items: [
    {
      name: "Friday open play",
      date: "2026-09-11",
      time: "7:00 PM – 10:00 PM",
      note: "Registration and final session details will be announced through the ASPC community."
    },
    {
      name: "Saturday open play",
      date: "2026-09-12",
      time: "7:00 PM – 10:00 PM",
      note: "Please arrive by 6:50 PM so we can check everyone in and start on time."
    }
  ],
  venue: {
    title: "Venue",
    lines: [
      "The English College – Al Safa Primary Hall",
      "Opposite Oasis Mall",
      "Al Safa 1, off Sheikh Zayed Road",
      "Dubai, UAE"
    ],
    mapUrl: VENUE_MAP
  },
  registration: {
    title: "Registration",
    text: "Register for an upcoming Aftershift Pickleclub session using the official ASPC form.",
    button: { label: "Register here", url: REGISTRATION_FORM },
    note: "Submitting the form does not automatically guarantee a confirmed slot. Session availability and payment confirmation determine your final place."
  },
  policy: {
    title: "Cancellation and payment policy",
    paragraphs: [
      "To help prevent last-minute cancellations and keep session slots fair for everyone, ASPC follows a payment-first confirmation policy.",
      "Players may initially be placed on the waitlist or registration list. Your place is officially confirmed once the required payment has been completed.",
      "Same-day cancellations are non-refundable. Once your place has been confirmed, that slot has been reserved specifically for you and may be difficult to fill at short notice."
    ],
    payTitle: "Send your payment receipt to",
    payTo: [
      { name: "Bon", label: "WhatsApp +971 50 837 2571", url: "https://wa.me/971508372571" },
      { name: "Jes", label: "WhatsApp +971 55 448 2655", url: "https://wa.me/971554482655" }
    ]
  }
};


/* 13. FREQUENTLY ASKED QUESTIONS --------------------------
   To add a question, copy one block from {  down to  },
   --------------------------------------------------------- */
const FAQ = [
  {
    q: "Do I need to register before coming?",
    a: [
      "Yes. Our sessions have limited capacity depending on the number of courts available, so registration is required.",
      "Submitting the registration form does not automatically confirm your slot. Your place is confirmed once availability has been verified and the required payment has been completed."
    ],
    button: { label: "Open the registration form", url: REGISTRATION_FORM }
  },
  {
    q: "Can beginners join?",
    a: [
      "Absolutely. If you are completely new to pickleball, or not yet confident enough to join regular open play, we recommend starting with Ascend.",
      "Ascend gives new players a more comfortable environment to learn, play and build confidence before moving into regular sessions."
    ]
  },
  {
    q: "Do I need my own paddle?",
    a: [
      "No. Players without their own paddle can choose the paddle-rental option when available.",
      "For regular open play: AED 30 with your own paddle, AED 40 including paddle rental."
    ]
  },
  {
    q: "How much does a session cost?",
    a: [
      "Regular open play is AED 30 with your own paddle, or AED 40 including paddle rental.",
      "Pricing for Ascend, social play, drills or special sessions may vary and will be included in the session announcement."
    ]
  },
  {
    q: "How does the queue work?",
    a: [
      "We use a system-based queue to rotate players onto available courts. Games during regular open play may be limited to around 10 minutes to keep the rotation fair.",
      "Depending on attendance we may also use stacking and different player combinations to keep courts moving. After each game, players return to the queue and wait for their next rotation."
    ]
  },
  {
    q: "Do you keep track of wins?",
    a: [
      "During selected open play sessions, yes. Players may be ranked according to their wins during the session, and our top performers may receive a shoutout at the end of the night.",
      "A little friendly competition never hurts."
    ]
  },
  {
    q: "Can I come alone?",
    a: [
      "Definitely. A big part of Aftershift is meeting and playing with different people. Our rotation system naturally mixes players throughout the session, so you don't need to bring a partner.",
      "Come alone. Join the queue. Meet the crew."
    ]
  },
  {
    q: "What should I bring?",
    a: ["We recommend bringing:"],
    list: [
      "Comfortable sportswear",
      "Proper indoor or outdoor court shoes, depending on the venue",
      "Water",
      "Your paddle, if you have one",
      "A towel",
      "A good attitude",
      "Enough energy for one more game"
    ]
  },
  {
    q: "What if I cancel on the same day?",
    a: [
      "Same-day cancellations are non-refundable. Your slot is reserved specifically for you once confirmed, and replacing a player at short notice can be difficult."
    ]
  },
  {
    q: "Where do you normally play?",
    a: [
      "Our venues may change based on court availability. Our currently announced home court is The English College – Al Safa Primary Hall, opposite Oasis Mall, Al Safa 1, off Sheikh Zayed Road, Dubai.",
      "Always check the latest session announcement before travelling to the venue."
    ],
    button: { label: "Open in Google Maps", url: VENUE_MAP }
  }
];


/* 14. CONTACT, SOCIAL AND LINKS ---------------------------
   Anything not ready yet: leave the url as ""  and it shows
   as "TBA" instead of a broken link.
   --------------------------------------------------------- */
const TEAM = [
  { name: "Bon", role: "Organiser / ASPC admin", label: "WhatsApp +971 50 837 2571", url: "https://wa.me/971508372571" },
  { name: "Jes", role: "Organiser / ASPC admin", label: "WhatsApp +971 55 448 2655", url: "https://wa.me/971554482655" }
];

const SOCIAL = [
  { label: "WhatsApp community", handle: "Aftershift Pickleclub", url: "" },
  { label: "Instagram",          handle: "TBA", url: "" },
  { label: "Threads",            handle: "TBA", url: "" },
  { label: "Email",              handle: "TBA", url: "" }
];

const LINKS = [
  { label: "Official ASPC registration form", note: "Open play, Ascend and social play", url: REGISTRATION_FORM },
  { label: "Current venue map",               note: "The English College – Al Safa", url: VENUE_MAP },
  { label: "WhatsApp community",              note: "TBA", url: "" },
  { label: "Instagram",                       note: "TBA", url: "" },
  { label: "Threads",                         note: "TBA", url: "" },
  { label: "Drills sessions",                 note: "TBA", url: "" }
];
