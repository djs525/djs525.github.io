# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Dev Shah as a candidate. They arrive from a résumé link, LinkedIn, GitHub, or an application, usually mid-screen with several other candidates open, deciding whether this person is worth a conversation. They skim first and read only if something earns it.

Secondary: Dev Shah himself, as the authenticated operator of the tracking dashboard. This is a real second user with its own interface and success condition, not an afterthought.

Tertiary (unconfirmed weight): engineers and peers arriving from GitHub or shared links.

## Product Purpose

A personal site that gets a hiring decision-maker to actually read Dev Shah's project work. Success is not a click to a résumé PDF and not a contact form submission — it is a recruiter reading a project write-up and coming away convinced the work is real and well-executed.

The site is also instrumentation: it tells Dev which applications produced real engagement.

## Positioning

Dev is a product-centric builder: he conceives a product and builds every layer of it himself — interface, service, data, model. He does not fit a single discipline label, and the site treats that as the claim rather than the problem. Roles targeted span software engineering, data, and product; the work is what argues for the fit.

The differentiator is depth of demonstrated work: real projects with real write-ups, not a résumé restated as a web page. Live data drawn from GitHub makes the claims checkable rather than asserted.

## Operating Context

- Visitors are short on time, often scanning on a second monitor between applications.
- The site is a supporting artifact in an application flow, not a destination people seek out. It must work cold, with no prior context about who Dev Shah is.
- Dev distributes a distinct tracked URL per application, then reviews engagement on a private dashboard during an active job search.
- Split deployment: static frontend on GitHub Pages, separate API origin. Every backend call is cross-origin.

## Capabilities and Constraints

**Frontend**
- React + TypeScript. Chosen deliberately — deepening React/TS skill is a stated goal, so the implementation should use current idiomatic patterns rather than the minimum needed to render a page.
- Hosted on GitHub Pages at the **`djs525.github.io` root user site**, base path `/`. Fully static bundle, no server-side rendering at request time. Routing must survive static hosting (hash routing or a 404 fallback).
- Structure: hub home surface plus dedicated project pages, so each project is individually linkable and individually trackable. Hobbies and personal interests live on the About page only, never on home.

**Backend** — TypeScript on Cloudflare Workers (Hono), with Postgres. Confirmed scope:
- **Tracked résumé links with a private dashboard.** Unique link per application; records opens, referrer, and which projects that visitor read. Authenticated admin view for Dev only.
- **GitHub aggregation with server-side caching.** Commit activity, language breakdown, and stars per featured project. Server-side because the unauthenticated GitHub API rate-limits by IP.
- **Hobby data widget.** Gaming and interest stats (Steam, chess.com, Last.fm or similar) pulled on a cache interval. Renders on the About page.

**Constraints**
- All third-party API keys and database credentials live server-side only; nothing secret may enter the static bundle.
- CORS must be configured explicitly for the Pages origin.
- The public site must degrade gracefully when the API is unreachable — a sleeping or failing backend cannot blank out project content for a recruiter.
- Visitor tracking collects engagement data on real people; scope it to what the dashboard actually uses.
- **Wording approval is binding.** No factual claim enters the site until Dev has approved its exact wording. His résumé variants contain claims he has not verified, and several conflicted with each other; he is the only person who can adjudicate them. Never transcribe from a résumé PDF directly.

**Considered and declined:** RAG-based "ask about my experience" chat.

## Brand Commitments

**Superseded 1 Aug 2026 — the site now ships two worlds, and the default is no longer the game world.** Dev's judgement: the handheld-game world does not survive a professional read, and the site's first job is a hiring decision.

**The default world is the modern product canon, pinned by Dev.** Asked to choose a register, Dev took the standing exit: the product-marketing lane played straight, at the craft level of the companies that own it. The named bar is Notion — its warm neutrals, humanist type, calm readable surfaces — **as a craft level only**. Dev's instruction is explicit: *"don't directly use their colors or styles, be a little subtle."* No borrowed palette, no borrowed component shapes, no pastiche. The canon is executed at full fidelity with no irony and no smuggled quirk; a knowing wink inside this world is a failure, not a signature.

Two further commitments follow from that:
- **Light ground.** The scene is a recruiter mid-screen on a bright office monitor. The dark-mode developer portfolio stays rejected — now on use-scene grounds as well as taste.
- **Neutral professional vocabulary.** The default world says Projects, Experience, Overview, Stack, Activity. Game vocabulary — Roster, units, campaigns, telemetry, sheet numbers — belongs to the arcade world only. Same approved facts, different labels; the wording-approval rule covers both sets.

**The handheld-game world survives as an opt-in second rendition.** It is not deleted and not deprecated: it is the fun side of Dev, offered deliberately once the work has been read, from the footer. Everything DESIGN.md records about it still binds inside it.

The document metaphor stays permanently rejected — sheets, borders, title blocks, anything reading as a printed CV — in both worlds.

The rule that hobby *content* lives on the About page is unchanged. Gaming no longer supplies the default visual language; gaming *data* — Steam, chess.com, and similar — still appears only on About.

## Evidence on Hand

**Featured projects (settled).** Four, each with an approved Problem → Approach → Outcome:

| Project | Repo | Grounding |
|---|---|---|
| BrawlBot | `djs525/brawlbot` | README, live Supercell API, Gemini tool-use agent |
| GSD.AI | `djs525/bits-datathon` | README; 1st place, Rutgers BITS × IBM Datathon |
| Cortex | `djs525/cortex-startup-oi` | README; built during Notion × MLH hackathon, did not place |
| F1 Strategy Lab | `djs525/f1-strategy-app` | No README; claims confirmed by Dev directly |

Excluded by Dev: `home-repair-hub`, `tcg-pocket` (incomplete). Excluded as an untouched scaffold: `startup-spotlight`. Available if a fifth is ever wanted: `spotify-popularity-predictor`.

**Externally verifiable.** GPA 3.80/4.00 and Dean's List for 7 consecutive semesters (Spring 2023 – Spring 2026), both confirmed against the transcript; CS major with a Data Science minor, per the transcript; all four featured repositories and their commit history.

**True on Dev's word, approved for use.** Internship and externship metrics (100+ queries/day at 90% accuracy; 78% recall donor-churn model; 10% retention lift; $50K+ protected; 25% operational efficiency), leadership scope (60+ staff, 200+ monthly events, ~30 students advanced to Calculus I), and all competition placements and honors.

**Corrections already applied — do not reintroduce from any résumé PDF.** The figure is 100+ queries/day, not 500+. The churn model is described by 78% recall, not 87% accuracy. The library externship stack is Python, R, Flask, Streamlit — not React. MLflow and the term "MLOps" are removed everywhere, including from the skills list, because Dev did not work on that directly. The "500+ predictions/day" figure is removed entirely. Leadership bullets carry no percentages. "Operating Systems" is not claimed as coursework; it is not on the transcript. LangGraph, Linux, and CI/CD are removed from skills.

**Must not be fabricated.** Testimonials, endorsements, employer names or titles beyond what the résumé supports, user counts, performance benchmarks, press mentions, and client work. Cortex and F1 Strategy Lab have no external outcome, and neither may be given one.

## Product Principles

1. **Project work is the product.** Every layout decision is judged by whether it moves a skimming recruiter into reading a project.
2. **Legible to a non-engineer.** Write-ups convey problem, approach, and outcome before implementation detail.
3. **Cold-start clarity.** A visitor with zero prior context knows who this is and what he does within one viewport.
4. **Claims stay backed.** Only facts Dev has approved by exact wording; live data over assertion; no invented proof. A project with no outcome says so.
5. **The backend serves the visit, never blocks it.** Dynamic features enrich the page; their failure never costs a recruiter the content.
6. **Personality earns its place.** Hobbies make the person memorable but never outrank the work in the visual hierarchy.
