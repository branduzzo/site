<div align="center">

<img src="https://branduzzo.it/assets/img/branduzzomii.png" alt="Branduzzo" height="90" />

**This is the source of [branduzzo.it](https://branduzzo.it).**

I build Minecraft plugins, run communities and make the websites around them. The site is handwritten HTML, one stylesheet and a bit of vanilla JavaScript. No framework, no build step, nothing to install.

[![Website](https://img.shields.io/badge/open-branduzzo.it-38BDF8.svg?style=for-the-badge&logo=googlechrome&logoColor=white)](https://branduzzo.it)
[![Source](https://img.shields.io/badge/source-github-181717.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/branduzzo/site)
[![Discord](https://img.shields.io/badge/discord-say%20hi-5865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://branduzzo.it/discord)

</div>

---

## Why it looks like this

I wanted a site that opens and immediately feels like something. The first screen is a full-height video of my Minecraft character with a floating navbar on top. As you scroll, the navbar shrinks into a small pill that tells you where you are, the section titles wipe into view, and the project list shows a preview image that follows your cursor.

There is no page builder behind it. Everything is in this repository, which means I can change a margin without fighting a theme.

A few things I cared about:

- **One page, one idea.** The hero is the hero. It is not buried under three banners and a newsletter box.
- **No external requests.** No CDN fonts, no analytics, no embeds. The only requests are the files in this repo.
- **It should still work when JavaScript is slow.** The content is plain HTML. The animations are CSS first and the scripts only add the details.
- **It should feel the same on a phone.** The layout collapses into one column, the island becomes a compact bar and the notepad still fits.

## What is on the site

| Page | What you will find |
|------|-------------------|
| [`index.html`](https://branduzzo.it/) | Hero, the three active projects, about me, the notepad and staff experience |
| [`projects.html`](https://branduzzo.it/projects.html) | CheckHacks, TypeMC and MightSMP |
| [`info.html`](https://branduzzo.it/info.html) | Credits and the small things that went into the site |
| [`privacy.html`](https://branduzzo.it/privacy.html) | The three cookies, in plain language |
| `404.html` | The panda page, served with a real 404 status |
| `maintenance.html` | A standalone page nginx can serve when the site is down for work |

The hero video has two sources. WebM/VP9 comes first because Firefox on Linux often cannot decode H.264, and the MP4 is there for Safari and iOS. The transparent sides of the clip blend into the black background with `mix-blend-mode: screen`, so the character floats without a visible box.

## The notepad

The About section has a small notepad. It actually works:

- type in it, and the line and column numbers update as you go;
- **File → Save** writes the text to a cookie, **File → Open** loads either the default `todo.txt` or your `saved.txt`;
- there is an 800 character limit, and the counter tells you when you get close;
- minimize, maximize and close all do what they say, and the maximized window can be dragged by its title bar.

It also has a few surprises. Type `%cursor%` for a cursor picker, `%snake%` for a small game, `%checkhacks%` for a fake scan, `%terminal%` for a terminal that does not run anything, `%ai%` for an assistant that refuses every request, and `%credits%` for the credits card.

Nothing from the notepad leaves the browser. There is no endpoint behind it.

## Languages and cookies

The site speaks English, Italian, Spanish, French and Russian. The translations live in `assets/js/lang.js` and the choice is stored in a cookie.

Three cookies in total, all first party:

| Cookie | Why it exists |
|--------|---------------|
| `branduzzo-lang` | Remembers the language you picked |
| `branduzzo-todo` | Holds the notepad text after you press Save |
| `branduzzo-cursor` | Remembers the cursor you picked in `%cursor%` |

No analytics, no ads, no tracking pixels, no third-party scripts. The privacy page says the same thing in five languages.

## Running it locally

You need Node, and that is it. There are no dependencies to install.

```bash
git clone https://github.com/branduzzo/site.git
cd site
node server.js
```

The site is at `http://localhost:3000`. If you want another port, set `PORT`:

```bash
PORT=4173 node server.js
```

The server is about eighty lines. It serves static files, sends a real 404 page for anything missing and adds a handful of security headers. HTML is sent with `no-store`; CSS and JavaScript are cached for a year, which is why the links carry a `?v=` number.

## Deploying

The site runs on a small VPS behind nginx and Cloudflare. A deploy is a copy and a restart:

```bash
scp -r ./* user@server:/var/www/branduzzo.it/
ssh user@server "chown -R www-data:www-data /var/www/branduzzo.it && systemctl restart branduzzo.service"
```

When you change CSS or JavaScript, bump the `?v=` in the HTML. Cloudflare and the browser will happily keep the old file otherwise. Images are cached for 30 days, HTML is not cached at all.

To put the site in maintenance mode, create a `.maintenance` file in the docroot. nginx will answer every request with a 503 and the maintenance page until you remove it.

## Easter eggs

They are not part of the content, they are just there for people who poke around.

| Where | Trigger | What happens |
|-------|---------|--------------|
| Anywhere | Konami code | Retro CRT mode with scanlines and a glitch on the title |
| Anywhere | Type `hack` | Matrix rain with a short message |
| Anywhere | Type `aurora` | Three bands of light sweep across the screen |
| Anywhere | Type `ping` | Sonar rings expand from your cursor |
| Anywhere | Type `67` | The whole site shakes for a second |
| Footer | Double click the wordmark | The letters bounce in a wave |
| Notepad | `%cursor%` | Pick one of ten cursors for the whole site |
| Notepad | `%snake%` | A playable ASCII snake |
| Notepad | `%checkhacks%` | A  CheckHacks scan |
| Notepad | `%terminal%` | A erminal, about forty commands |
| Notepad | `%ai%` | A Claude Code clone  |
| Notepad | `%credits%` | The credits card |
| Notepad | `%mightsmp%` | This is the MightSMP |

The terminal is the only one that could worry someone: it does not execute anything. It prints text into a `div`. There is no `eval`, no fetch, no shell. You can start "hacking" with `sudo apt install opsec`.

## A couple of honest notes

Right click and the usual devtools shortcuts are blocked. That is not for security. Anyone can open their browser menu or turn JavaScript off, and none of the content is secret anyway.

The project previews, the notepad and all the easter eggs are client-side. There is no backend to attack because there is no backend.

Discord and WhatsApp cache link previews for a long time. If the image looks old after a deploy, the new URL has to be fetched again by them, and that can take a while. The page itself points at the current image.

## Credits

Designed and built by **Branduzzo**.

The two custom cursors are based on [Lucide](https://lucide.dev/) (ISC) and the ten selectable ones come from [Sweezy Cursors](https://sweezy-cursors.com/). Project logos belong to their respective owners. No templates, no UI kits, no generated icons.

If something looks broken or you want to say hi, the Discord is the fastest way:

[![Discord](https://img.shields.io/badge/join-branduzzo.it%2Fdiscord-5865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://branduzzo.it/discord)
