# Pickleball club site — setup guide

Two files plus a photos folder. No server, no database, no monthly bill.
`index.html` is the site. `data.js` is the only file you edit after launch, and
player pictures are just images you drop into `photos/`.

Try it now: double-click `index.html` and it opens in your browser.

---

## Part 1 — Put it online for free (GitHub + Vercel)

GitHub stores the files. Vercel publishes them. Both free, no credit card.
You'll end up with an address like `https://riverside-pickleball.vercel.app`.

**1. Make a GitHub account**
Go to github.com → Sign up. Free plan.

**2. Create a repository**
Click **+** (top right) → **New repository**.
- Repository name: `pickleball` (or your club name)
- Public or Private both work with Vercel
- Click **Create repository**

**3. Upload your files**
On the new repository page click **uploading an existing file**.
Drag in `index.html`, `data.js` and the `photos` folder, then **Commit changes**.
`index.html` must sit at the top level, not inside another folder.

**4. Sign in to Vercel using GitHub**
Go to vercel.com → **Continue with GitHub**. Choose the **Hobby** plan (the free one).

**5. Import the repository**
Vercel dashboard → **Add New** → **Project** → **Import** next to `pickleball`.
First time only, you may need **Adjust GitHub App Permissions** to let Vercel see it.

**6. Deploy**
Leave Framework Preset as **Other**. Leave Build Command and Output Directory
**empty** — there is nothing to build. Click **Deploy**.

**7. Get your link**
About twenty seconds later you get something like `pickleball-abc123.vercel.app`.
To tidy it up: **Settings** → **Domains** → add `riverside-pickleball.vercel.app`.

Share that link in your club chat. Done.

From now on, every change you commit on GitHub republishes automatically. You never
open Vercel again.

> There is no "Settings → Pages" step. That belongs to GitHub Pages, a different
> free host. You don't need it when you're using Vercel.

---

## Part 2 — About "free domains"

Be careful here. The genuinely free, genuinely reliable option is the free subdomain
that comes with your host:

- `yourclub.vercel.app` — Vercel (what you're using)
- `yourclub.github.io` — GitHub Pages
- `yourclub.pages.dev` — Cloudflare Pages

These cost nothing, never expire, and include HTTPS. For a club site they are fine.

Free top-level domains (`.tk`, `.ml`, `.ga` from Freenom and similar) are no longer
dependable — registrations get cancelled without warning and you lose the address.
Don't build your club's identity on one.

If you eventually want `riversidepickleball.com`, that's roughly $10–15 a year from
Namecheap, Porkbun or Cloudflare. Hosting stays free — you add the domain in Vercel
under Settings → Domains and it walks you through the rest.

---

## Part 3 — Updating it after each open play

Open `data.js`. You can edit it right on github.com: click the file → pencil icon →
edit → **Commit changes**. Vercel notices the commit and republishes in about twenty
seconds. Nothing to press, nothing to re-upload. Works from your phone.

### Add a new play date

Copy one block of games, paste it at the top of `MATCHES`, change the date and the
lines. Use the short player ids, not full names:

```js
{ date: "2026-09-12", div: "regular", game: 1, team1: ["john","alex"], team2: ["michael","david"], score1: 11, score2: 8 },
{ date: "2026-09-12", div: "ascend",  game: 1, team1: ["nico","tessa"], team2: ["omar","lian"],    score1: 11, score2: 7 },
```

`div` is either `"regular"` or `"ascend"`. It keeps the two rankings apart —
Regular games never affect Ascend standings and vice versa. Game numbers start at 1
again for each division, so both can have a "Game 1".

If a division didn't play that week, just leave its games out. The site notices and
shows the other one.

That's all. Wins, losses, games played, win percentage, ranking and the podium are
calculated from the scores, so they can never disagree with the Games page. The new
date appears at the top of the date selector automatically.

### Add a new player

Add a line to `PLAYERS`. The `id` is your shorthand — lowercase, no spaces:

```js
{ id: "tina", name: "Tina Alvarez", photo: "" },
```

Leave `photo: ""` alone. See the photos section below.

### Add your logo

Save your logo file as `logo.png` and upload it next to `index.html` (the top level
of the repository, not inside `photos`). It appears in the header automatically.

- Use the version with **white lettering on a transparent background** — the site is
  black, so the black-text version would disappear. The lockup from your dark posters
  is the right one.
- `logo.svg`, `logo.jpg` and `logo.webp` work too — the site checks for all of them.
- It's displayed 44px tall, so anything around 200–500px tall is plenty.
- No logo yet? The ball-and-speed-lines mark shows instead. Nothing breaks.
- `data.js` has `logoIncludesName: true`, which hides the text name beside the logo
  because your lockup already says Aftershift Pickleclub. Set it to `false` if you
  ever switch to a plain ball mark with no words.

### Add or change a player photo

No code involved. Save the picture as the player's id and put it in the `photos`
folder: `photos/tina.jpg`. That's the whole job.

On github.com: open the `photos` folder → **Add file** → **Upload files** → drag the
image in → **Commit changes**. Vercel redeploys and the photo appears.

- Filename must match the id exactly, lowercase: `tina.jpg`, not `Tina.JPG`.
- jpg, jpeg, png and webp work. **HEIC (the iPhone default) does not** — email or
  AirDrop the photo to yourself and it usually converts to jpg on the way.
- Square, head-and-shoulders crops look best; the site crops to a circle.
- Keep files under about 500 KB so the page loads fast on phones. Crop on your
  phone first, or use squoosh.app.
- No file yet? Their initials show in a coloured circle. Nothing breaks.
- To replace a photo, upload a new file with the same name and confirm the overwrite.

Album covers work the same way: `photos/albums/2026-09-12.jpg`. Optional — without
one the card shows a court pattern with the date.

### Add a photo album

In Google Photos: open the album → **Share** → **Create link** → **Copy**.
Paste it into a new block at the top of `ALBUMS`:

```js
{ date: "2026-09-12", title: "September 12 open play", description: "Windy morning.",
  url: "https://photos.app.goo.gl/xxxxx", cover: "" },
```

Anyone with the link can view the album — they don't need a Google account or a
login to your site.

### Club details

Everything in the `CLUB` block at the top — name, tagline, About text, courts,
schedule, contact links — appears on the site as soon as you change it.

---

### Rename a division, or add a third

At the top of `data.js`:

```js
const DIVISIONS = [
  { id: "regular", name: "Regular" },
  { id: "ascend",  name: "Ascend"  }
];
```

`name` is what visitors see — change it and the buttons, headings and podium follow.
`id` is what you type on each game line, so if you change an id you must change it on
those lines too. Adding a third division is one more line here plus games tagged with
its id.

## Changing the ranking rules

In `index.html`, find the `standings` function. One line does the ranking:

```js
list.sort((a,b) => b.wins - a.wins || b.pct - a.pct || a.name.localeCompare(b.name));
```

Most wins first, then win percentage, then name. To rank by win percentage first,
swap the first two parts. Players with identical wins and percentage share a rank
(1, 2, 2, 4) — that's why two players can both show "2nd place".

---

## Good to know

- Everything runs in the visitor's browser. There is no login and no admin panel by
  design — the fewer moving parts, the less there is to break or pay for.
- Anyone can read `data.js`, so don't put phone numbers or addresses in it.
- Keep a copy of the folder on your own computer as a backup.
