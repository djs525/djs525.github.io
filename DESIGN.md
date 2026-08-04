---
name: Dev Shah — Studio
description: A quiet, warm-neutral product surface where the only color on the page is a number that came from the API rather than from the author.
worlds:
  default: studio
  optional: arcade
colors:
  bg: '#faf9f7'
  surface: '#ffffff'
  surface-2: '#f4f2ef'
  surface-3: '#eeeae4'
  line: '#e7e2db'
  line-strong: '#d3ccc2'
  text: '#1b1917'
  text-2: '#57514a'
  text-3: '#756d64'
  live: '#0f6b52'
  live-wash: '#eaf4f0'
typography:
  display:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(2.5rem, 6vw, 4rem)'
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: '-0.035em'
  signature:
    fontFamily: "'Ms Madi', cursive"
    fontSize: 'clamp(3.6rem, 9.5vw, 6rem)'
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: '0'
  page-title:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(2rem, 4vw, 2.75rem)'
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: '-0.03em'
  headline:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(1.5rem, 3vw, 2rem)'
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: '-0.025em'
  project-name:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(1.5rem, 3vw, 1.875rem)'
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: '-0.025em'
  tally:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: '2rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '-0.02em'
  subhead:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.5rem'
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: '-0.025em'
  entry-title:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.375rem'
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: '-0.02em'
  plate-title:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.25rem'
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: '-0.02em'
  lead:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.1875rem'
    fontWeight: 400
    lineHeight: 1.55
  row-title:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: '-0.015em'
  body-small:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.8125rem'
    fontWeight: 500
    letterSpacing: '0'
  measure:
    fontFamily: "'Geist Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: '0.75rem'
    fontWeight: 500
    letterSpacing: '0.02em'
rounded:
  sm: '6px'
  md: '10px'
  lg: '16px'
  pill: '999px'
spacing:
  s1: '4px'
  s2: '8px'
  s3: '12px'
  s4: '16px'
  s5: '24px'
  s6: '32px'
  s7: '48px'
  s8: '64px'
  s9: '96px'
components:
  panel:
    backgroundColor: '{colors.surface}'
    borderColor: '{colors.line}'
    textColor: '{colors.text}'
    rounded: '{rounded.lg}'
    padding: '24px'
  button-primary:
    backgroundColor: '{colors.text}'
    textColor: '{colors.surface}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '11px 20px'
  button-secondary:
    backgroundColor: '{colors.surface}'
    borderColor: '{colors.line-strong}'
    textColor: '{colors.text}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '10px 18px'
  tag:
    backgroundColor: '{colors.surface-2}'
    textColor: '{colors.text-2}'
    rounded: '{rounded.sm}'
    padding: '4px 10px'
---

# Design System: Dev Shah

## Overview

The site ships **two worlds**. `studio` is the committed default and the subject of this document. `arcade` is a complete second rendition of the same facts, opt-in from the footer; its rules are recorded at the end of this file.

**Creative North Star (studio): "Everything here is checkable."**

The visitor is a hiring decision-maker on a bright monitor with several other candidates open. The surface's whole job is to get out of the way of four project write-ups and make them look like the work of someone precise. So the world is the modern product canon — warm neutral ground, hairline structure, one typographic family used at real scale, generous quiet — played straight, at the craft level of the companies that own that lane, with no irony and no smuggled quirk.

Its one POV, and the thing that keeps it from being any SaaS template: **the page is monochrome except for values fetched from the API this session.** Live green is the only chromatic event on the surface. A recruiter who scrolls the whole site sees color exactly where a claim is being verified in front of them, and nowhere else. That is the positioning argument — claims stay backed — rendered as a color rule rather than stated as one.

**Key characteristics:**
- Warm near-white ground; white plates; every edge a 1px hairline, never a heavy border
- Monochrome by default, with one reserved green for live data
- One grotesk family across the whole system; mono reserved for measured values
- Structure comes from rules and space, not from boxes — the project index is a list, not a card grid
- Depth is barely there: a hairline plus a low offset shadow, and only on things that lift
- Motion is a single authored entrance, exponential ease-out, from an already-visible default

## Colors

Restrained: warm neutrals plus one accent.

### Neutral
- **Ground** (`#faf9f7`): the page. Warm off-white, not cream — the warmth should be felt, not named.
- **Surface** (`#ffffff`): plates that carry content. The lift above ground is white plus a hairline, nothing more.
- **Surface 2** (`#f4f2ef`): tags, recessed rows, hover fills.
- **Surface 3** (`#eeeae4`): one step deeper, for a pressed or selected row.
- **Line** (`#e7e2db`): every default hairline.
- **Line Strong** (`#d3ccc2`): secondary button edges and dividers that must be found.

### Ink
- **Text** (`#1b1917`): headings, body, and the primary button fill. 16.4:1 on ground.
- **Text 2** (`#57514a`): supporting prose and captions. 7.4:1 on ground.
- **Text 3** (`#756d64`): labels and metadata. 4.9:1 on ground — the floor, and nothing may be set lighter.

### Accent
- **Live** (`#0f6b52`): a value that genuinely arrived from the API during this visit, and its status dot. 6.4:1 on surface.
- **Live Wash** (`#eaf4f0`): the fill behind a live value chip. Used nowhere else.

### Named Rules

**The Only Color Rule.** Live green is the only hue in the studio world. No brand blue, no category tinting, no status palette, no colored discipline tags. If a second color appears, either the system has broken or a genuinely new meaning was added — and there is only one meaning available.

**The Fetched Value Rule.** (Outranks visual preference.) The accent marks **provenance, not freshness**: this number came from the API during the visit, rather than from a string typed into `src/data`. Every other figure on the site is Dev's word; these are not, and the colour is what says so.

It follows that the figures behind it must be cumulative. Commit count, build window and language breakdown do not decay, so a project finished last year reports exactly what it always will. Recency is deliberately not among them: a completed project is not a failing one, and rendering "last pushed 8 months ago" in the one accent colour would spend the page's loudest signal on its weakest fact.

When the API has not answered, the slot reads `Not available` in Text 3, in the body face, with no dot and no chip. There is deliberately no hardcoded fallback: a stale number dressed as a fetched one is the exact failure this rule exists to prevent.

**The Warm Neutral Rule.** Every neutral carries the same warm cast (hue ≈ 35°). A pure-gray `#f5f5f5` or `#888` dropped into this system reads instantly as a foreign part.

**The Hairline Rule.** Structural edges are 1px `--line`. There is no 2px border and no colored left-border rule anywhere; emphasis is space, weight, and scale.

## Typography

**Family:** Schibsted Grotesk for everything — display, headline, body, label. **Geist Mono** for measured values only. **Ms Madi** for Dev's name on home, and nothing else.

**The Signature Exception.** The system is one grotesk plus a measurement mono. The single documented exception is the name on home, which is set as a signature in Ms Madi — a connected fountain-pen script — because a name at the head of a document is signed, not typeset. It is the only handwritten mark in the system: not on the header wordmark (illegible at 15px), not on page titles, not on project names, not as a decorative accent anywhere. A second use of this face breaks the exception and makes it a theme.

**Character:** one neutral grotesk with slightly open apertures, used across a wide scale so hierarchy comes from size and weight rather than from a second personality. Display sizes are set tight (-0.035em) and at weight 500 rather than 700: confidence without shouting.

### Hierarchy
- **Display** (500, `clamp(2.5rem, 6vw, 4rem)`, 1.04, -0.035em): the name, once per site, on home.
- **Page title** (500, `clamp(2rem, 4vw, 2.75rem)`, 1.08, -0.03em): the title of a route or a project.
- **Headline** (500, `clamp(1.5rem, 3vw, 2rem)`, 1.15, -0.025em): section and entry headings.
- **Body** (400, 1.0625rem, 1.6, max 68ch): all prose.
- **Label** (500, 0.8125rem, 1.4): tags, nav, buttons, captions. Sentence case, not uppercase.
- **Measure** (Geist Mono 500, 0.75rem, 0.02em): numbers, dates, counts, periods, live values.

**The settled ramp**, as the first build left it — a size outside this list is a new step and belongs here before it belongs in a stylesheet:

`0.75` · `0.8125` · `0.9375` · `1.0625` · `1.125` · `1.1875` · `1.25` · `1.375` · `1.5` · `2` rem, plus four clamps: `clamp(2.5rem, 6vw, 4rem)` for the name, `clamp(2rem, 4vw, 2.75rem)` for a page title, `clamp(1.5rem, 3vw, 2rem)` for a section heading, and `clamp(1.5rem, 3vw, 1.875rem)` for a project name in the index.

### Named Rules

**The Sentence Case Rule.** No uppercase tracked eyebrows. Section headings are sentence-case headlines; a tracked all-caps label anywhere in the studio world is arcade grammar leaking in.

**The Mono Is Measurement Rule.** Geist Mono appears on numbers, dates, durations, and repository values — things that were counted. It never sets a word that was written, and it is never used to make prose "look technical".

## Layout

A single centred column, `max-width: 1080px`, gutters 24px (16px under 600px). The header is sticky with a hairline underneath, and the content column runs the same width inside it so the wordmark aligns with the page's first character.

Vertical rhythm is the 8px scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Section separation is 96px on desktop and 64px on mobile — the largest interval in the system, and always larger above a heading than below it.

The project index is a **full-width list of rows divided by hairlines**, not a grid of equal cards: name at headline scale, the hook beneath it, tags and stack alongside at label scale. A recruiter reads four names in one sweep and then falls into one. Cards are used only where content is genuinely parallel and short — the stack strata, the stat rows, the interest tiles.

At 860px the two-column rows collapse to stacked blocks in reading order. At 600px the header nav becomes a horizontally scrolling rail with the hairline intact. Nothing shrinks below its legible floor.

## Elevation & Depth

Depth is almost absent by design; the page reads as paper with rules on it.

- **Flat** (default): a hairline, no shadow. Most surfaces.
- **Rest** (`0 1px 2px rgba(27,25,23,.05), 0 1px 3px rgba(27,25,23,.04)`): the sticky header once the page has scrolled, and the primary button.
- **Lift** (`0 2px 4px rgba(27,25,23,.05), 0 8px 24px -8px rgba(27,25,23,.12)` with `translateY(-1px)`): an interactive plate under the pointer.

**The Barely There Rule.** No shadow exceeds 24px of blur or 12% alpha. Every shadow carries a vertical offset — a zero-offset halo is decoration, and there is none in this system.

## Shapes

Rounded, small: 6px on tags and inline chips, 10px on rows and inputs, 16px on plates, full pill on buttons. Nothing is square, and nothing is a 24px+ blob.

## Components

### Buttons
- **Primary:** Text fill, Surface label, pill, 11px/20px, label type at 500. Hover does not change hue — it lifts 1px onto the Rest shadow. Active returns to 0.
- **Secondary:** Surface fill, 1px Line Strong, Text label, pill. Hover fills Surface 2.
- **Quiet (link-style):** Text label with a 1px underline offset 3px in Line Strong; hover brings the underline to Text.

### Project row
- A hairline-divided row, 32px vertical padding, two columns at 1fr / 280px.
- Left: project name at headline scale as the link, hook beneath in Text 2, tags below.
- Right: the four stack strata as `role → part` pairs in label and measure type.
- Hover fills the row Surface 2 to its full bleed and the trailing arrow travels 4px right. The whole row is one link target; the repository link sits outside it as a sibling.

### Icons
Drawn in the system's own grammar, not pulled from a library: 16px on a 16px grid, 1.4px strokes with round joins — the same hairline weight as everything else — and `currentColor` throughout, so one icon reads correctly on the ink-filled primary button and on the white secondary. They sit inside the button's line box with an 8px gap, never floating beside it.

**The Real Logo Rule.** A third party's mark is reproduced as the real thing, at its own proportions, never restyled to match this system. A stylised redraw of someone else's logo loses the recognition that is the only reason to show a logo, and recognition is the point on an outbound link. GitHub's and LinkedIn's marks are the two in use; both take `currentColor`, so each renders correctly on the ink primary and the white secondary without a second copy.

Icons belong to studio. Arcade's rule is unchanged: every pictorial element there is a hand-authored pixel grid in `src/data/sprites.ts`, so an arcade button wanting an icon gets a drawn sprite, not one of these.

### Tags
Surface 2 fill, Text 2 label, 6px radius, 4px/10px. Only applicable disciplines are shown — the studio world states what a project is rather than what it is not.

### Live value
The number in Text at body weight, preceded by a 6px Live dot, on a Live Wash chip with 6px radius. The dot aligns to the first line rather than the block's centre, because a language list wraps. Loading renders `Reading…` in Text 3 with no dot; unavailable renders `Not available` in Text 3 with no dot and no chip.

The panel carrying them is **Repository · Fetched from GitHub**, and it holds exactly three: commits, active period, languages. Arcade calls the same panel **SERVICE RECORD · Pulled from GitHub**.

### Stat row
Label in Text 3, value in Geist Mono at 1.125rem in Text, stacked, laid out in an auto-fit grid with hairline separators between cells. No card per stat, no big-number hero.

### Header
Sticky, Ground at 88% with a 12px backdrop blur, hairline beneath. Wordmark left (name in 500 plus a Text 3 role line), route links centre-right at label scale, primary action far right. The active route carries a 2px Text underline sitting on the header's own hairline; inactive links are Text 2 and darken on hover.

**Email is the standing action and never drops out.** It sits in the header on every route, at every width, which is what frees the home hero to spend its two slots on places the work can be checked rather than on a second contact link. Below 720px the header becomes a two-row grid — wordmark and action on the first, the nav rail on the second — and the Text 3 role line is what gives way, not the action.

### Footer
Two hairline-divided bands. The first is contact and repository links. The second is the arcade invitation — a short hook in full Text ink, its explanation in Text 2, and a quiet secondary button — placed last on the page, after every piece of work has had its chance. It is written as an offer, not as a settings toggle: the label names the experience ("Play the arcade version"), never the mechanism ("Switch theme").

## Motion

**The focal moment: the name signs itself.** On the first load of a tab, Ms Madi's connected script inks in left to right over 1400ms behind a soft-edged mask — a 220%-wide gradient with an 8% ramp, slid across the element, so ink *arrives* rather than being wiped in. The keyframe stops are deliberately uneven: a hand accelerates through a stroke, slows into a join, and lifts between words, and the near-flat 30%→38% segment is that lift, landing in the gap between "Dev" and "Shah". A linear sweep here reads as a machine and is the failure mode to avoid.

Rules that make it a signature rather than an intro effect:
- **The hand stays.** The name does not revert to the grotesk when the stroke finishes.
- **Once per tab**, tracked in `sessionStorage` — returning to home from another route must not re-sign the page.
- The mask is **removed outright** on completion, so nothing composites for the rest of the visit.
- It waits for the face to load, but never on it: `document.fonts.ready` raced against a 600ms timeout, because a hung font service must not leave the name masked out.
- Under `prefers-reduced-motion: reduce` the name is simply already signed.
- The hero carries **no other entrance**. A fade-and-rise underneath the signature would be a second moment competing with the first.

**The supporting motion**, everywhere below the fold: content **rises 12px and fades in as it enters the viewport**, once, 600ms, `cubic-bezier(.2,.7,.3,1)`, staggered 60ms across siblings in a group. Everything is fully visible by default and the effect is skipped entirely under `prefers-reduced-motion: reduce`.

Interaction motion is 150ms on the same curve and limited to background fill, a 1px translate, and the arrow travel. There is no scroll-linked parallax, no scroll-jacking, and no second entrance style.

## Theme switching

The theme is a first-class piece of state, not a CSS filter.

- `data-theme="studio" | "arcade"` on `<html>` selects the token set; each world's tokens live in its own file and neither leaks into the other.
- The choice persists in `localStorage` under `theme`. `studio` is the default for a visitor with no stored choice.
- Each world renders its **own component tree**. The studio world reuses no arcade component, module, or token — this is a hard rule, not a preference, and a shared "themed" component that branches on `data-theme` is a violation of it. Data, routing, and behavioral hooks are shared; presentation is not.
- Fonts are loaded per world through a single swapped `<link>`, so a studio visitor never downloads the arcade faces.
- **The favicon swaps with the world too.** Studio's is the wordmark's initials in a grotesk, ink on ink-dark — the signature is unreadable at 16px, so the mark falls back to the register the header already uses. Arcade's is frame one of the player sprite from `src/data/sprites.ts`, which is a 16×16 grid and therefore already exactly a favicon; regenerate it if that sprite changes. Both are SVG, swapped on one `<link id="favicon">` by the same code that swaps the fonts.
- **Titles and descriptions are shared, in the neutral vocabulary.** A tab label is metadata about the page, not part of a visual world, and a history entry reading "Roster" helps nobody find their way back. Crawlers and link unfurlers do not run the bundle, so the card they read is the static one in `index.html` — one per site, not per route.

## Do's and Don'ts (studio)

### Do:
- **Do** keep the surface monochrome and let live data be the only color.
- **Do** separate with hairlines and space before reaching for a container.
- **Do** set numbers, dates, and durations in Geist Mono, and everything written in Schibsted Grotesk.
- **Do** put more space above a heading than below it.
- **Do** render `Not available` whenever the API has not supplied a value.
- **Do** keep prose to 68ch.

### Don't:
- **Don't** introduce a second accent color, a status palette, or colored discipline tags.
- **Don't** use uppercase tracked eyebrows, section numbers, or a big-number hero metric.
- **Don't** build the project index as a grid of equal cards, and never nest a card in a card.
- **Don't** use gradient text, glass, glow, or a colored left-border rule.
- **Don't** carry an arcade token, class, module, or component into this world.
- **Don't** invent a live value when the API is unavailable.

---

# Second world: Arcade (opt-in)

The handheld-game roster world, reachable from the studio footer and previously the site's default. It is preserved intact; everything below still binds **inside that world only**, and none of it may be imported into studio.

**North star.** A character-select screen the visitor already knows how to read. Dev is the player; each project is a unit with a portrait, a type, the parts it was built from, and a log.

**Colors.** Arena Sky `#2f6ff2`, graded through Sky Deep `#1c46b0` to Sky Far `#123182` as the page ground. Panel `#fffaf0`, Panel Sunk `#f0e6d2`, Panel Edge `#c8b48c`. Ink `#14203d`, Ink Soft `#4a5a80`. Achievement Gold `#ffc93c` for action and achievement. Type colors, one meaning each: Interface Magenta `#ff4d8d`, Data Cyan `#35d6f5`, Product Green `#43dd80`. Live Green `#0d7a5f` for API-sourced values only.

**Type.** Lilita One for display and headlines, Baloo 2 500 for body, Baloo 2 700 uppercase tracked 0.06em for labels. Type is never pixelated; `image-rendering: pixelated` applies to the `.pixel` class, worn by sprites and nothing else.

**Form.** Zero border radius system-wide. 3px Ink outlines on panels, buttons, and tabs; 2px on badges. Every shadow is a hard offset in Sky Far with zero blur and zero spread — panel drop `6px 6px`, panel lift `10px 10px` with `translateY(-4px)`, button seat `4px 4px`, button press `6–7px` with `translate(-2px, -2px)`.

**Sprites.** Every pictorial element is a hand-authored pixel grid in `src/data/sprites.ts` — no icon fonts, no clipart. Each carries two or more frames laid side by side in one SVG strip and stepped by a CSS `steps()` animation; cycle lengths differ per unit so the roster never pulses in lockstep.

**Arena bands.** Three fixed, non-interactive SVG pattern bands in Panel at 0.35 / 0.5 / 0.75 opacity behind all content, drifting on a `scroll(root block)` timeline, guarded by `@supports` and `prefers-reduced-motion`.

**Standing prohibitions inside arcade.** No border-radius, no blurred shadow, no gradient on a component surface, no CRT scanlines or retro-arcade costume, no dark ground, no signal color reused for a second meaning, no sentence set in a label face, no invented live value.

**Vocabulary.** Arcade says Roster, units, campaigns, posts, telemetry, sheet numbers. Studio says Projects, Experience, Leadership, Overview, Stack, Activity. Same approved facts; the wording-approval rule in PRODUCT.md covers both sets.
