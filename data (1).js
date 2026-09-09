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
  established: "Est. 2026",
  tagline: "Clock out, court in.",
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
  headline: "Clock out, court in.",
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
       photos: ["photos/about/1.jpg", "photos/about/2.jpg"]
   Leave it as  photos: []  until you have images ready.
   --------------------------------------------------------- */
const ABOUT = {
  lede: "Aftershift Pickleclub started with a simple idea: finish the shift, grab a paddle, and meet on court.",
  paragraphs: [
    "We're a community built around friendship, pickleball, and the shared need to unwind after a long day. What started as a group of friends playing after work has grown into a space where regulars, beginners, and new faces can meet, play, improve, compete, and most importantly, enjoy the game together.",
    "Whether you've been playing for a while or you're holding a paddle for the first time, there's a place for you at Aftershift.",
    "We keep things social, competitive enough to make things interesting, and welcoming enough that you can show up alone and leave knowing a few more people."
  ],
  closing: "After work. After hours. Aftershift.",
  photos: []
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
   Your roster — everyone, both divisions together. Wins, losses,
   games and rank are calculated from the games below, so you
   never type them.

   The id is a short nickname with no spaces, all lowercase. You
   use that id in the games list. Add one line per player:

       { id: "john", name: "John Smith", photo: "" },

   PHOTOS: leave the photo line as "" and save the picture as the
   player's id — john.jpg — inside the photos folder. No file yet?
   Their initials show instead. Nothing breaks.
   --------------------------------------------------------- */
const PLAYERS = [

];


/* 7. GAMES -------------------------------------------------
   One line per game. This is the part you update each week.

   date    written YYYY-MM-DD
   div     "regular" or "ascend" — keeps the two rankings apart
   game    numbering starts at 1 again for each division
   team1   the two player ids on one side
   team2   the two player ids on the other side
   score1  team1's score        score2  team2's score

   The winner is worked out from the score, so you don't set it.
   Here is the exact shape of one line to copy:

   { date: "2026-09-11", div: "regular", game: 1, team1: ["john", "alex"], team2: ["michael", "david"], score1: 11, score2: 8 },

   Until you add your first game the site shows "no sessions yet",
   which is normal.
   --------------------------------------------------------- */
const MATCHES = [

];


/* 8. PHOTO ALBUMS -----------------------------------------
   Paste the share link from Google Photos (Album > Share >
   Create link > Copy). cover can stay "" — the card draws a
   court pattern instead. One block per album:

   {
     date: "2026-09-11",
     title: "September 11 open play",
     description: "A short line about the session.",
     url: "https://photos.app.goo.gl/your-album-link",
     cover: ""
   },
   --------------------------------------------------------- */
const ALBUMS = [

];


/* 8b. SESH GALLERY PAGE -----------------------------------
   The words at the top of the Photos page. The albums above
   appear underneath this.
   --------------------------------------------------------- */
const GALLERY = {
  title: "Sesh gallery",
  intro: "Life after shift — a little look at what happens when the workday ends and the paddles come out.",
  categories: [
    { name: "Open play",   text: "Regular ASPC sessions, rallies, matchups and court moments." },
    { name: "Ascend",      text: "First games, beginner sessions, learning moments and player progress." },
    { name: "Social play", text: "Mixed games, community nights, group moments and friendly matchups." },
    { name: "Drills",      text: "Training sessions, skill work, practice and development." },
    { name: "Community",   text: "Group photos, celebrations, funny moments, rankings, winners and everything in between." }
  ],
  captions: [
    "Another night after shift.",
    "Good games. Better company.",
    "Clocked out. Paddled up.",
    "From coworkers to court rivals.",
    "One more game.",
    "After hours, on court.",
    "The Aftershift crew.",
    "See you in the queue."
  ]
};

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
      "Same-day cancellations are non-refundable. Once your place has been confirmed, that slot has been reserved specifically for you and may be difficult to fill at short notice.",
      "Thank you for helping us keep sessions organised and fair for everyone."
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
  { label: "Instagram",          handle: "@aftershift.official", url: "https://www.instagram.com/aftershift.official/" },
  { label: "Threads",            handle: "@aftershift.official", url: "https://www.threads.com/@aftershift.official" },
  { label: "Pickleheads",        handle: "Aftershift Pickleclub", url: "https://www.pickleheads.com/groups/aftershift-pickleclub" },
  { label: "Email",              handle: "TBA", url: "" }
];

const LINKS = [
  { label: "Official ASPC registration form", note: "One form for every session", url: REGISTRATION_FORM },
  { label: "Regular open play registration",  note: "Uses the official ASPC form", url: REGISTRATION_FORM },
  { label: "Ascend registration",             note: "Uses the official ASPC form", url: REGISTRATION_FORM },
  { label: "Social play registration",        note: "Uses the official ASPC form when announced", url: REGISTRATION_FORM },
  { label: "Current venue map",               note: "The English College – Al Safa", url: VENUE_MAP },
  { label: "WhatsApp community",              note: "TBA", url: "" },
  { label: "Instagram",                       note: "@aftershift.official", url: "https://www.instagram.com/aftershift.official/" },
  { label: "Threads",                         note: "@aftershift.official", url: "https://www.threads.com/@aftershift.official" },
  { label: "Pickleheads group",               note: "Find our sessions on Pickleheads", url: "https://www.pickleheads.com/groups/aftershift-pickleclub" },
  { label: "Drills sessions",                 note: "TBA", url: "" }
];


/* 15. WHATSAPP COMMUNITY ----------------------------------
   Shown on the About page. Put your group invite link in url
   when you have it — until then it shows as TBA.
   --------------------------------------------------------- */
const COMMUNITY = {
  title: "Join the Aftershift community",
  intro: "Stay connected with the Aftershift Pickleclub community through WhatsApp. Our group is where we share:",
  shares: [
    "Upcoming open play sessions",
    "Registration announcements",
    "Available slots",
    "Schedule changes",
    "Venue updates",
    "Ascend sessions",
    "Social play",
    "Drills",
    "Community announcements",
    "Photos and session highlights"
  ],
  groupName: "Aftershift Pickleclub",
  button: { label: "Join our WhatsApp group", url: "" }
};
