/* ============================================================
   CLUB DATA — this is the only file you need to edit each week.
   Nothing here is code you have to understand. Just copy an
   existing block, change the names, dates and scores, save.
   ============================================================ */

/* 1. YOUR CLUB -------------------------------------------- */
const CLUB = {
  name: "Aftershift Pickleclub",
  tagline: "Weekly open play rankings",
  about:
    "A friendly, all-levels pickleball club for people coming off work. We play social doubles — rotate partners, keep score, and everyone gets on court.",
  where: "Add your courts here",
  schedule: "Add your play days and times here",
  contacts: [
    { label: "Facebook group", url: "https://facebook.com/" },
    { label: "WhatsApp group", url: "https://chat.whatsapp.com/" },
    { label: "aftershift.pickleclub@example.com", url: "mailto:aftershift.pickleclub@example.com" }
  ],

  /* LOGO: save your logo as logo.png next to index.html and it
     appears in the header. Use the version with WHITE lettering on
     a transparent background — the site is black.
     logo.svg, logo.jpg and logo.webp work too.
     Your logo already says "Aftershift Pickleclub", so the setting
     below is true and the text name is hidden beside it. Set it to
     false if you ever use a mark without the name in it.          */
  logoIncludesName: true
};

/* 2. DIVISIONS --------------------------------------------
   Rankings and games are kept completely separate per division.
   Rename them here and the whole site follows. You can add a
   third later by copying a line.
   --------------------------------------------------------- */
const DIVISIONS = [
  { id: "regular", name: "Regular" },
  { id: "ascend",  name: "Ascend"  }
];

/* 3. PLAYERS ----------------------------------------------
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

/* 4. GAMES -------------------------------------------------
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

/* 5. PHOTO ALBUMS -----------------------------------------
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
