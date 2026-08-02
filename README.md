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
monochrome apart from one reserved green, which appears only on values fetched
from the GitHub API during that session. The only colour on the page is a claim
being checked in front of you.

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

## Three rules that hold

**Live data is never faked.** A value styled as live has to have arrived from
the API this session. When it has not, the slot reads `Not available` in muted
ink. There is deliberately no hardcoded fallback, because a stale number dressed
as a live one is the exact failure this site exists to avoid.

**The two worlds share no presentation.** A shared component that branches on
the current theme would be a violation, not a shortcut.

**No claim ships unapproved.** Every figure, placement and credential in
`src/data` is wording I signed off on directly. Nothing is transcribed from a
résumé PDF, because several of mine disagreed with each other.
