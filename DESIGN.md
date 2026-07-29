---
name: Dev Shah — Roster
description: A handheld-game roster screen where every project is a unit with a sprite, a type, and a log.
colors:
  sky: '#2f6ff2'
  sky-deep: '#1c46b0'
  sky-far: '#123182'
  panel: '#fffaf0'
  panel-sunk: '#f0e6d2'
  panel-edge: '#c8b48c'
  ink: '#14203d'
  ink-soft: '#4a5a80'
  gold: '#ffc93c'
  magenta: '#ff4d8d'
  cyan: '#35d6f5'
  green: '#43dd80'
  live: '#0d7a5f'
typography:
  display:
    fontFamily: "'Lilita One', ui-rounded, system-ui, sans-serif"
    fontSize: 'clamp(2.4rem, 7vw, 4.2rem)'
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: '-0.01em'
  headline:
    fontFamily: "'Lilita One', ui-rounded, system-ui, sans-serif"
    fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)'
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "'Baloo 2', ui-rounded, system-ui, sans-serif"
    fontSize: '1.05rem'
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "'Baloo 2', ui-rounded, system-ui, sans-serif"
    fontSize: '0.75rem'
    fontWeight: 700
    letterSpacing: '0.06em'
rounded:
  none: '0'
spacing:
  px: '4px'
  s1: '4px'
  s2: '8px'
  s3: '16px'
  s4: '24px'
  s5: '40px'
  s6: '64px'
components:
  panel:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '24px'
  button-primary:
    backgroundColor: '{colors.gold}'
    textColor: '{colors.ink}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '16px 24px'
  button-primary-hover:
    backgroundColor: '{colors.gold}'
    textColor: '{colors.ink}'
  button-secondary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.panel}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '8px 16px'
  badge-interface:
    backgroundColor: '{colors.magenta}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '3px 4px'
  badge-data:
    backgroundColor: '{colors.cyan}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '3px 4px'
  badge-product:
    backgroundColor: '{colors.green}'
    textColor: '{colors.ink}'
    rounded: '{rounded.none}'
    padding: '3px 4px'
  badge-off:
    backgroundColor: '{colors.panel-sunk}'
    textColor: '{colors.ink-soft}'
    rounded: '{rounded.none}'
    padding: '3px 4px'
---

# Design System: Dev Shah — Roster

## Overview

**Creative North Star: "The Roster Screen"**

This is the character-select screen of a game the visitor already knows how to read. Not a portfolio with a pixel filter over it — the roster format is the actual information architecture. Dev is the player; each project is a unit with a portrait, a type, the parts it was built from, and a log of what happened. Someone who has opened Brawl Stars or a Pokémon party screen understands the whole page in two seconds, and that instant legibility is the point: a recruiter with forty seconds gets the shape of everything before reading a single sentence.

The register is bright, saturated and confident. The ground is a lit arena sky rather than a dark void, because the visitor is on a bright office monitor in daylight and because dark-plus-neon is the tired half of this genre. Panels are warm plates that sit *on* that sky with hard unblurred offset shadows, so depth comes from physical stacking rather than from atmosphere. The sprite grid stays on a 4px unit, but the chrome around it is finer — 3px outlines, 6px shadow offsets — so the interface reads at a higher resolution than the art it frames.

Two things are rejected outright and both were confirmed by the user: the document metaphor — sheets, borders, title blocks, drawing furniture, anything that reads as a printed CV — and the dark-mode developer portfolio. A third is rejected on craft grounds: generic retro-arcade nostalgia, CRT scanlines, and "8-bit" as a costume. This world is contemporary handheld-game UI, which is a working interface language, not a nostalgia reference.

**Key Characteristics:**
- Lit arena sky, never a dark void
- Warm panels with 3px ink outlines and hard, unblurred offset shadows
- Sprites on a 4px pixel grid; chrome finer at 3px outlines and 6px shadows
- Hand-authored 16×16 sprites, never icon-font glyphs or clipart
- Heavy rounded display face over the same family's UI weight — no pixel type anywhere
- Type badges carry classification as real information, not decoration
- Motion settles on a spring; nothing snaps

## Colors

A saturated arena palette: one blue ground, warm plates, and four signal colours that each carry exactly one meaning.

### Primary
- **Arena Sky** (`#2f6ff2`): the page ground, graded through **Sky Deep** (`#1c46b0`) and **Sky Far** (`#123182`) in a single radial wash so light gathers at the top and falls toward the floor. Sky Far also fills every hard panel shadow, which is what makes panels read as floating above the same world rather than casting an arbitrary grey.
- **Achievement Gold** (`#ffc93c`): the primary action, credential chips, and log keys. Gold means "this matters" — a button you should press or a thing Dev earned.

### Secondary
The three type colours. Each maps to one discipline and appears nowhere else:
- **Interface Magenta** (`#ff4d8d`): the INTERFACE type.
- **Data Cyan** (`#35d6f5`): the DATA type.
- **Product Green** (`#43dd80`): the PRODUCT type.

### Tertiary
- **Live Green** (`#0d7a5f`): values that genuinely arrived from the API this session. 5.15:1 on panel, and reserved absolutely.

### Neutral
- **Panel** (`#fffaf0`): the warm plate every piece of content sits on.
- **Panel Sunk** (`#f0e6d2`): recessed rows inside a panel — the build list, inactive badges.
- **Panel Edge** (`#c8b48c`): the border of an inactive badge only.
- **Ink** (`#14203d`): all outlines and body text. 15.7:1 on panel.
- **Ink Soft** (`#4a5a80`): labels and secondary text. 6.7:1 on panel.

### Named Rules

**The One Meaning Rule.** Every signal colour carries exactly one meaning: gold is action and achievement, magenta/cyan/green are the three types, live green is API-sourced data. A colour used for a second purpose has broken the system, no matter how good it looks.

**The Live Value Rule.** Live Green appears only on a value fetched this session. When the API is unavailable the slot reads `NO DATA` in Ink Soft. There is deliberately no hardcoded fallback — a stale number dressed as a live one is the exact failure this site exists to avoid.

**The Daylight Rule.** The ground stays a lit sky. Near-black grounds, neon-on-black, and CRT glow are permanently out; they are the exhausted half of this genre and they fight the real use scene, which is a bright monitor in an office.

**The Small Text Off Sky Rule.** White text on Arena Sky measures 4.49:1 — sufficient for large display type only. Any text below 24px must sit on a panel, never directly on the sky.

## Typography

**Display Font:** Lilita One (with ui-rounded, system-ui fallback)
**Body Font:** Baloo 2 (with ui-rounded, system-ui fallback)
**Label Font:** Baloo 2 700, uppercase, tracked, 0.7–0.95rem

**Character:** A heavy rounded display face for names and section titles over the same family's UI weight for everything else. The games this world draws from are high-resolution, not 8-bit — their type is chunky and smooth, never pixelated. Pixel art survives only where it belongs: in the sprites. A pixel *font* would drag the whole interface back down to a resolution the rest of the system has left behind.

### Hierarchy
- **Display** (Lilita One, `clamp(2.4rem, 7vw, 4.2rem)`, 1.0): the player name. Once per screen.
- **Headline** (Lilita One, `clamp(1.3rem, 2.8vw, 1.75rem)`, 1.1): unit names, role titles, banner titles.
- **Body** (Baloo 2 500, 1.05–1.1rem, 1.55, max 62ch): all prose — blurb, stack lines, log entries, bullets.
- **Label** (Baloo 2 700, 0.7–0.95rem, 0.06em tracking, uppercase): badges, stat chips, tabs, buttons.

### Named Rules

**The Resolution Rule.** Type is never pixelated. `image-rendering: pixelated` applies to the `.pixel` class only, which is worn by sprites and nothing else. The interface reads at full resolution; the art is the only pixel object in the system.

**The Shouting Label Rule.** Labels are Baloo 2 700, uppercase, tracked. They mark a region; they never compete with the content inside it.

## Layout

Content is split across **separate routed screens** behind a persistent menu bar — `/` for the roster, `/experience`, `/leadership` — rather than one continuous scroll. Each screen is independently linkable, which is what makes per-screen engagement trackable. The active tab sits forward on a gold fill.

Within a screen: a single centred column, max 1120px, on the sky. The profile plate spans full width with the sprite portrait beside the identity block; the roster below is `repeat(auto-fit, minmax(340px, 1fr))`, which gives two units per row on desktop and one on narrow screens.

Spacing is the 4px unit multiplied: 4 / 8 / 16 / 24 / 40 / 64. Panel padding is 24px, gaps between panels 40px, and the gap between the profile plate and the roster heading is 64px — the largest interval on the page, because it separates the two things the visitor is looking at.

At 720px the profile plate collapses to a single column with the sprite above the identity, and the roster becomes one unit per row. Nothing shrinks below its legible floor; the layout reflows instead.

## Elevation & Depth

Depth is physical stacking, never atmosphere. Every raised surface casts a **hard, unblurred offset shadow** in Sky Far — the shadow a sprite casts in a game UI, not a soft ambient one. There is no blur radius anywhere in the system.

### Shadow Vocabulary
- **Panel drop** (`box-shadow: 6px 6px 0 0 var(--sky-far)`): profile plate, unit cards, and history entries at rest.
- **Panel lift** (`box-shadow: 10px 10px 0 0 var(--sky-far)` with `translateY(-4px)`): a card on hover.
- **Button seat** (`box-shadow: 4px 4px 0 0`): buttons at rest, in Ink for the gold primary and in Gold for the ink secondary.
- **Button press** (`box-shadow: 6–7px 6–7px 0 0` with `translate(-2px, -2px)`): the button moving out of its own shadow on hover.

### Named Rules

**The No Blur Rule.** Every shadow in this system has zero blur radius and zero spread. A blurred shadow belongs to a different world and instantly reads as a generic web card.

**The Shadow Is The Ground Rule.** Panel shadows are always Sky Far — the deepest colour in the ground gradient — so panels look lit by the same scene rather than floating on an unrelated grey.

## Shapes

**Zero border radius, system-wide.** Pixels are square. Every panel, badge, chip, button, and recessed row has hard corners.

Outlines are the primary form device: 3px Ink for panels, buttons, and tabs; 2px Ink for badges and chips; 3px Ink as a left rule on the recessed stack line. Sprites are 16×16 grids rendered as SVG rects with `shape-rendering: crispEdges`, scaled to integer multiples so pixels stay square at any zoom.

**The Square Corner Rule.** No `border-radius` anywhere, ever, including on images and focus rings.

**The Authored Sprite Rule.** Every pictorial element is a hand-authored pixel grid in `src/data/sprites.ts`. No icon fonts, no icon libraries, no clipart. If a new unit needs a portrait, someone draws it.

## Components

### Buttons
- **Shape:** hard corners (0 radius), 3px Ink outline.
- **Primary:** Gold background, Ink text, label type at 0.95rem, 16px/24px padding, seated on a 4px Ink shadow.
- **Hover:** translates `-3px, -3px` while the shadow grows to 7px — the button lifting out of its own seat. Spring easing, 180ms.
- **Secondary ("Open repo"):** Ink background, Panel text, seated on a 4px Gold shadow, same lift behaviour at a smaller scale.

### Badges (type chips)
- **Style:** 2px Ink border, hard corners, label type at 0.7rem, 2px/8px padding.
- **State:** an applicable type fills with its own colour; an inapplicable one drops to Panel Sunk with an Ink Soft label and a Panel Edge border. Both states are always shown — the greyed badge is information, not an omission.

### Cards (units)
- **Corner style:** hard, 3px Ink outline.
- **Background:** Panel, with Panel Sunk recessed rows for the build list.
- **Shadow:** panel drop at rest, panel lift on hover (see Elevation).
- **Internal padding:** 24px, with a 3px header rule and footer rule dividing portrait / body / stats.
- **Behaviour:** fades and rises 18px into place when scrolled into view, once, with a spring settle. The sprite bobs while the card is hovered.

### Sprite Portrait
- **Style:** the sprite sits on a Panel Sunk tile with a 3px Ink border and 8px padding — a framed portrait, exactly as a roster screen frames a character. Unit portraits render at 88px, the player at 160px.
- **On the profile plate:** the frame is Arena Sky instead, and the player sprite idles continuously with a 2.4s vertical bob.
- **Idle animation:** every sprite carries two or more hand-authored frames laid side by side in one SVG strip, stepped across a clipping window by a CSS `steps()` animation. No timers and no React re-renders; the loop lives entirely on the compositor. Cycle lengths differ per unit (1.4s–3.4s) so the roster never pulses in lockstep.

### Menu Bar
- **Style:** tabs in Panel Sunk with a 3px Ink outline, seated on a 4px Sky Far shadow, label type uppercase and tracked.
- **State:** the active tab fills Gold, sits forward by 2px, and casts an Ink shadow — the chosen menu item, pushed in. Hover lifts an inactive tab without filling it.

### Section Banner
- **Style:** Ink fill, 3px Ink border, seated on a 4px Gold shadow, with the title in Panel and the count in Gold.
- **Why:** section headings sit on a filled surface rather than directly on the sky, which is what keeps small label type above the contrast floor.

### Arena Bands
- **Style:** three fixed, non-interactive bands of hand-placed pixel cloud and stand shapes, tiled as SVG patterns in Panel at 0.35 / 0.5 / 0.75 opacity, sitting at `z-index: 0` behind all content.
- **Motion:** each band drifts at its own rate on a `scroll(root block)` timeline, giving depth as the page descends. Guarded by `@supports (animation-timeline: scroll())` and by `prefers-reduced-motion: no-preference`; where either fails the bands are simply a static scene, which is a complete result rather than a degraded one.

## Do's and Don'ts

### Do:
- **Do** keep sprite art on the 4px grid and interface chrome on the finer 3px/6px scale.
- **Do** author new sprites by hand as pixel grids in `src/data/sprites.ts`, with at least two frames whose difference is deliberate — a blink, a pulse, a moving highlight. Shifting the whole body between frames reads as jitter, not life.
- **Do** drive sprite and background motion from CSS timelines rather than JavaScript, and give every such effect a static fallback that stands on its own.
- **Do** use hard, zero-blur shadows in Sky Far for every raised surface.
- **Do** show inapplicable type badges greyed rather than hiding them — absence is information.
- **Do** set all prose in Baloo 2 and all labels in Silkscreen.
- **Do** render `NO DATA` in Ink Soft whenever the API has not supplied a value.
- **Do** put small text on a panel, never directly on the sky.

### Don't:
- **Don't** use `border-radius`, blurred shadows, or gradients on any component surface. The only gradient in the system is the page ground.
- **Don't** set a sentence in Silkscreen.
- **Don't** add CRT scanlines, screen curvature, glow, or any other retro-arcade costume. This is contemporary handheld UI, not nostalgia.
- **Don't** go dark-mode-with-neon. The ground is a lit sky.
- **Don't** reuse a signal colour for a second meaning.
- **Don't** substitute an icon font or clipart where a sprite belongs.
- **Don't** invent a live value when the API is unavailable.
