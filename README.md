# djs525.github.io

My personal site, live at **[djs525.github.io](https://djs525.github.io/)**.

Four projects, each written up as problem, approach, result, with the four
layers it was built from and live activity pulled from its repository. It is a
hiring artifact first: the whole thing exists to get someone to actually read a
project write-up.

## Two worlds

The site ships two complete visual worlds and lets the visitor choose.

**Studio** is the default. Warm neutral ground, hairline structure, one grotesk
used from 12px to 96px, and a signature that writes itself once per tab. It is
monochrome apart from one reserved green, which marks the only figures on the
site that did not come from me: commit count, build window and language
breakdown, fetched from GitHub during the visit. The colour means provenance,
not freshness.

**Arcade** is the opt-in second version, reachable from the footer. The same
four projects as a handheld-game roster screen: a lit arena sky, warm panels
with hard unblurred shadows, and hand-authored 16x16 pixel sprites with idle
animations driven entirely by CSS.

They are not a palette swap. `data-theme` on `<html>` selects both the token set
and the component tree, so each world renders its own components and shares no
presentation with the other. Data, routing and behavioural hooks are shared;
CSS, layout and markup are not. Fonts and the favicon swap with the world, so a
studio visitor never downloads the arcade faces.

The choice persists in `localStorage` and is stamped onto `<html>` by an inline
script before first paint, so the page never flashes the wrong world.

## Stack

React 19, TypeScript, Vite 6, React Router 7. That is the entire dependency
list.

No UI framework, no CSS framework, no component library, no icon package.
Styling is CSS Modules over custom properties, one token file per world. The
sprites are hand-authored pixel grids rendered as SVG rects, and their idle
loops are `steps()` animations on the compositor rather than timers or React
state.

TypeScript runs with `strict` and `exactOptionalPropertyTypes`.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build, output in dist/
npm run preview    # serve the built output
npm run typecheck
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm ci && npm run build` on a runner and publishes `dist/` to GitHub Pages.

`dist/` is never committed. The typecheck runs before the build, so a type error
fails the deploy and leaves the currently live site untouched.

Deep links work on a static host through `public/404.html`, which stashes the
requested path and hands control to the app at `/`.

## Layout

```
worker/        the Cloudflare Worker behind those three numbers
src/
  studio/      the default world: components, pages, CSS modules
  components/  the arcade world's components
  pages/       the arcade world's pages
  themes/      one token file per world, each scoped to its data-theme
  theme/       which world is live, persistence, font and favicon swapping
  data/        every fact on the site, and the sprites
  lib/         hooks shared by both worlds
```

`DESIGN.md` records the visual system for both worlds. `PRODUCT.md` records who
the site is for and what it is allowed to claim.

## The Worker

`worker/` is a single Cloudflare Worker serving one route:

```
GET /stats/:owner/:repo
-> { commits, activePeriod, languages: [name, percent][] }
```

No framework, no dependencies at runtime. It queries GitHub with a read-only
fine-grained token held as a Cloudflare secret, so the token never reaches the
browser and never enters this repository. Requests are restricted to this
account's repositories, because an open GitHub proxy is an invitation to spend
someone else's rate limit. Responses are cached at Cloudflare's edge for
fifteen minutes.

Every figure it returns is cumulative. Recency is deliberately absent: see the
rule below.

```bash
cd worker
npm install
npm run dev        # http://localhost:8787
npm run deploy
```

The site reads `VITE_API_BASE` at build time. Unset, every repository panel
renders `Not available`, which is a complete state rather than a broken one.

## Three rules that hold

**Fetched data is never faked.** The accent colour marks provenance: this
number came from GitHub during your visit, not from a string I typed. When the
API has not answered, the slot reads `Not available` in muted ink. There is
deliberately no hardcoded fallback, because a stale number dressed as a fetched
one is the exact failure the rule exists to prevent.

It follows that the figures are cumulative. Commit count, build window and
languages do not decay, so a finished project reports what it always will.
Recency is not shown: a completed project is not a failing one, and "last
pushed 8 months ago" would spend the page's loudest signal on its weakest
fact.

**The two worlds share no presentation.** A shared component that branches on
the current theme would be a violation, not a shortcut.

**No claim ships unapproved.** Every figure, placement and credential in
`src/data` is wording I signed off on directly. Nothing is transcribed from a
résumé PDF, because several of mine disagreed with each other.
