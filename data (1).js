/* ============================================================
   PASTE 1 of 2 — replace the empty  const PLAYERS = [ ];
   28 players from the Sept 11 session, alphabetical.
   Organisers are flagged so they can be left out of rankings.
   ============================================================ */
const PLAYERS = [
  { id: "adrian",     name: "Adrian",     photo: "" },
  { id: "bon",        name: "Bon",        photo: "", organiser: true },
  { id: "christian",  name: "Christian",  photo: "" },
  { id: "clark",      name: "Clark",      photo: "" },
  { id: "colleen",    name: "Colleen",    photo: "" },
  { id: "david",      name: "David",      photo: "" },
  { id: "ejay",       name: "Ejay",       photo: "" },
  { id: "emman",      name: "Emman",      photo: "" },
  { id: "gilbert",    name: "Gilbert",    photo: "" },
  { id: "hubert",     name: "Hubert",     photo: "" },
  { id: "janelle",    name: "Janelle",    photo: "" },
  { id: "jared",      name: "Jared",      photo: "", organiser: true },
  { id: "jelo",       name: "Jelo",       photo: "" },
  { id: "joy",        name: "Joy",        photo: "" },
  { id: "julian",     name: "Julian",     photo: "" },
  { id: "justin",     name: "Justin",     photo: "" },
  { id: "karen",      name: "Karen",      photo: "" },
  { id: "marie",      name: "Marie",      photo: "" },
  { id: "maryan",     name: "Maryan",     photo: "" },
  { id: "mitch",      name: "Mitch",      photo: "" },
  { id: "nique",      name: "Nique",      photo: "" },
  { id: "paul",       name: "Paul",       photo: "", organiser: true },
  { id: "pj",         name: "PJ",         photo: "" },
  { id: "rocelyn",    name: "Rocelyn",    photo: "" },
  { id: "russel",     name: "Russel",     photo: "" },
  { id: "sam",        name: "Sam",        photo: "" },
  { id: "sandy",      name: "Sandy",      photo: "" },
  { id: "warren",     name: "Warren",     photo: "" }
];


/* ============================================================
   PASTE 2 of 2 — replace the empty  const MATCHES = [ ];
   44 games, oldest first, numbered per division.
   ============================================================ */
const MATCHES = [
  { date: "2026-09-11", div: "regular",  game:  1, team1: ["jelo", "paul"],           team2: ["david", "hubert"],        score1: 11, score2:  6 },
  { date: "2026-09-11", div: "regular",  game:  2, team1: ["ejay", "colleen"],        team2: ["russel", "karen"],        score1: 11, score2:  5 },
  { date: "2026-09-11", div: "ascend",   game:  1, team1: ["pj", "justin"],           team2: ["sam", "emman"],           score1:  8, score2: 11 },
  { date: "2026-09-11", div: "regular",  game:  3, team1: ["jelo", "russel"],         team2: ["hubert", "karen"],        score1:  5, score2: 11 },
  { date: "2026-09-11", div: "regular",  game:  4, team1: ["jared", "clark"],         team2: ["warren", "david"],        score1:  4, score2:  8 },
  { date: "2026-09-11", div: "ascend",   game:  2, team1: ["mitch", "joy"],           team2: ["maryan", "marie"],        score1: 11, score2: 10 },
  { date: "2026-09-11", div: "regular",  game:  5, team1: ["janelle", "ejay"],        team2: ["paul", "colleen"],        score1:  1, score2: 11 },
  { date: "2026-09-11", div: "ascend",   game:  3, team1: ["sam", "pj"],              team2: ["emman", "justin"],        score1:  2, score2: 11 },
  { date: "2026-09-11", div: "regular",  game:  6, team1: ["jared", "janelle"],       team2: ["karen", "ejay"],          score1: 11, score2:  8 },
  { date: "2026-09-11", div: "regular",  game:  7, team1: ["warren", "clark"],        team2: ["hubert", "jelo"],         score1:  8, score2: 11 },
  { date: "2026-09-11", div: "ascend",   game:  4, team1: ["rocelyn", "mitch"],       team2: ["joy", "marie"],           score1: 11, score2:  5 },
  { date: "2026-09-11", div: "regular",  game:  8, team1: ["david", "colleen"],       team2: ["russel", "bon"],          score1: 11, score2:  2 },
  { date: "2026-09-11", div: "ascend",   game:  5, team1: ["nique", "julian"],        team2: ["maryan", "emman"],        score1:  2, score2: 11 },
  { date: "2026-09-11", div: "regular",  game:  9, team1: ["paul", "clark"],          team2: ["warren", "jared"],        score1: 11, score2:  3 },
  { date: "2026-09-11", div: "regular",  game: 10, team1: ["janelle", "jelo"],        team2: ["hubert", "karen"],        score1:  5, score2: 11 },
  { date: "2026-09-11", div: "regular",  game: 11, team1: ["bon", "ejay"],            team2: ["david", "russel"],        score1:  4, score2: 11 },
  { date: "2026-09-11", div: "ascend",   game:  6, team1: ["justin", "joy"],          team2: ["pj", "marie"],            score1: 11, score2:  4 },
  { date: "2026-09-11", div: "regular",  game: 12, team1: ["clark", "janelle"],       team2: ["jared", "russel"],        score1:  5, score2: 11 },
  { date: "2026-09-11", div: "regular",  game: 13, team1: ["bon", "colleen"],         team2: ["paul", "warren"],         score1: 10, score2:  9 },
  { date: "2026-09-11", div: "ascend",   game:  7, team1: ["christian", "sandy"],     team2: ["adrian", "gilbert"],      score1: 11, score2:  8 },
  { date: "2026-09-11", div: "regular",  game: 14, team1: ["david", "ejay"],          team2: ["karen", "jelo"],          score1: 18, score2: 11 },
  { date: "2026-09-11", div: "ascend",   game:  8, team1: ["rocelyn", "julian"],      team2: ["nique", "sam"],           score1: 11, score2:  9 },
  { date: "2026-09-11", div: "regular",  game: 15, team1: ["hubert", "clark"],        team2: ["janelle", "colleen"],     score1: 10, score2: 12 },
  { date: "2026-09-11", div: "ascend",   game:  9, team1: ["christian", "gilbert"],   team2: ["justin", "pj"],           score1:  5, score2: 11 },
  { date: "2026-09-11", div: "ascend",   game: 10, team1: ["sandy", "adrian"],        team2: ["mitch", "maryan"],        score1: 10, score2:  8 },
  { date: "2026-09-11", div: "regular",  game: 16, team1: ["bon", "paul"],            team2: ["jared", "jelo"],          score1:  7, score2:  9 },
  { date: "2026-09-11", div: "ascend",   game: 11, team1: ["rocelyn", "nique"],       team2: ["julian", "joy"],          score1: 11, score2:  3 },
  { date: "2026-09-11", div: "regular",  game: 17, team1: ["warren", "russel"],       team2: ["david", "karen"],         score1:  4, score2: 11 },
  { date: "2026-09-11", div: "regular",  game: 18, team1: ["ejay", "clark"],          team2: ["janelle", "hubert"],      score1: 11, score2:  3 },
  { date: "2026-09-11", div: "ascend",   game: 12, team1: ["christian", "adrian"],    team2: ["sandy", "emman"],         score1:  0, score2: 11 },
  { date: "2026-09-11", div: "regular",  game: 19, team1: ["bon", "jelo"],            team2: ["colleen", "paul"],        score1:  7, score2:  9 },
  { date: "2026-09-11", div: "regular",  game: 20, team1: ["jared", "karen"],         team2: ["david", "janelle"],       score1:  8, score2: 11 },
  { date: "2026-09-11", div: "ascend",   game: 13, team1: ["gilbert", "pj"],          team2: ["marie", "sam"],           score1:  7, score2:  6 },
  { date: "2026-09-11", div: "ascend",   game: 14, team1: ["maryan", "julian"],       team2: ["rocelyn", "justin"],      score1:  2, score2: 10 },
  { date: "2026-09-11", div: "ascend",   game: 15, team1: ["mitch", "christian"],     team2: ["joy", "emman"],           score1:  4, score2: 11 },
  { date: "2026-09-11", div: "regular",  game: 21, team1: ["warren", "clark"],        team2: ["ejay", "hubert"],         score1: 11, score2:  4 },
  { date: "2026-09-11", div: "ascend",   game: 16, team1: ["nique", "adrian"],        team2: ["gilbert", "marie"],       score1:  5, score2:  7 },
  { date: "2026-09-11", div: "regular",  game: 22, team1: ["karen", "russel"],        team2: ["janelle", "colleen"],     score1:  2, score2: 11 },
  { date: "2026-09-11", div: "ascend",   game: 17, team1: ["sandy", "maryan"],        team2: ["sam", "julian"],          score1:  9, score2:  7 },
  { date: "2026-09-11", div: "ascend",   game: 18, team1: ["mitch", "emman"],         team2: ["joy", "marie"],           score1: 11, score2:  0 },
  { date: "2026-09-11", div: "regular",  game: 23, team1: ["warren", "ejay"],         team2: ["jelo", "clark"],          score1: 11, score2:  2 },
  { date: "2026-09-11", div: "ascend",   game: 19, team1: ["christian", "pj"],        team2: ["adrian", "justin"],       score1:  4, score2:  9 },
  { date: "2026-09-11", div: "regular",  game: 24, team1: ["bon", "david"],           team2: ["paul", "jared"],          score1: 11, score2: 12 },
  { date: "2026-09-11", div: "ascend",   game: 20, team1: ["rocelyn", "sandy"],       team2: ["gilbert", "nique"],       score1:  9, score2: 11 }
];
