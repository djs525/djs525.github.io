/**
 * Every factual claim in this file was approved verbatim by Dev Shah.
 * Do not add, reword, or "improve" a claim here without his explicit sign-off,
 * and never transcribe from a résumé PDF — several of those conflict with
 * each other. See PRODUCT.md → Evidence on Hand.
 */

import type { Sprite } from "./sprites";
import { SPRITE_BOT, SPRITE_CHIP, SPRITE_HELMET, SPRITE_PIN } from "./sprites";

/** The four strata every unit is built from. */
export type LayerRole = "INTERFACE" | "SERVICE" | "DATA" | "MODEL";

export interface Layer {
  readonly role: LayerRole;
  /** What this stratum actually is, in this project. */
  readonly part: string;
}

/** Classification across the disciplines this work spans. */
export type Discipline = "INTERFACE" | "DATA" | "PRODUCT";

export interface Project {
  readonly slug: string;
  readonly name: string;
  readonly repo: string;
  /** Drawing sheet number, in filing order. */
  readonly sheet: string;
  readonly problem: string;
  readonly approach: string;
  readonly outcome: string;
  readonly layers: readonly [Layer, Layer, Layer, Layer];
  readonly classification: readonly Discipline[];
  readonly sprite: Sprite;
}

export const PRACTICE_STACK: readonly [Layer, Layer, Layer, Layer] = [
  { role: "INTERFACE", part: "What the person actually touches" },
  { role: "SERVICE", part: "The API that answers it" },
  { role: "DATA", part: "What is stored, and where it came from" },
  { role: "MODEL", part: "The thing that decides" },
];

export const PROJECTS: readonly Project[] = [
  {
    slug: "brawlbot",
    name: "BrawlBot",
    repo: "djs525/brawlbot",
    sheet: "02",
    problem:
      "Brawl Stars players check their stats on dashboards, away from the chat where they actually talk about the game.",
    approach:
      "I built a Discord bot that answers natural-language questions from live Supercell API data. A Gemini tool-use agent drives a drop-in plugin registry and a model-fallback chain; SQLite persistence extends the API's 25-battle log window.",
    outcome:
      "Players link a tag with /link and ask anything with /ask — profile, brawlers, battle log, meta, event rotation, rankings.",
    layers: [
      { role: "INTERFACE", part: "Discord slash commands" },
      { role: "SERVICE", part: "Plugin registry, model-fallback chain" },
      { role: "DATA", part: "Supercell API, SQLite persistence" },
      { role: "MODEL", part: "Gemini tool-use agent" },
    ],
    classification: ["INTERFACE", "DATA", "PRODUCT"],
    sprite: SPRITE_BOT,
  },
  {
    slug: "gsd-ai",
    name: "GSD.AI",
    repo: "djs525/bits-datathon",
    sheet: "03",
    problem:
      "Culinary entrepreneurs sign leases without knowing which cuisines a neighborhood already oversupplies, or whether a concept survives there.",
    approach:
      "I built a full-stack platform that mines thousands of Yelp reviews and restaurant firmographic data across New Jersey — XGBoost classification, VADER sentiment, SHAP attribution — behind a React and Leaflet/Carto map UI on a FastAPI backend.",
    outcome: "1st place at the Rutgers BITS × IBM Datathon.",
    layers: [
      { role: "INTERFACE", part: "React, Leaflet/Carto map" },
      { role: "SERVICE", part: "FastAPI backend" },
      { role: "DATA", part: "Yelp reviews, firmographics" },
      { role: "MODEL", part: "XGBoost, VADER, SHAP" },
    ],
    classification: ["INTERFACE", "DATA", "PRODUCT"],
    sprite: SPRITE_PIN,
  },
  {
    slug: "cortex",
    name: "Cortex",
    repo: "djs525/cortex-startup-oi",
    sheet: "04",
    problem:
      "A startup's weekly review means manually assembling deals, goals, investors, and hiring pipeline from scattered sources.",
    approach:
      'I wrote a system prompt that turns Claude into an autonomous operating agent over a Notion workspace via MCP. "run Cortex" writes the full weekly review — health-scored, eight sections populated — with no manual input.',
    outcome:
      "I built it during the Notion × MLH hackathon; it did not place. I wrote it to behave like an enterprise operating tool rather than a hackathon demo — an agent that runs the review, not a script that formats one.",
    layers: [
      { role: "INTERFACE", part: "Notion workspace" },
      { role: "SERVICE", part: "MCP connection" },
      { role: "DATA", part: "Deals, goals, investors, hiring" },
      { role: "MODEL", part: "Claude agent, system prompt" },
    ],
    classification: ["DATA", "PRODUCT"],
    sprite: SPRITE_CHIP,
  },
  {
    slug: "f1-strategy-lab",
    name: "F1 Strategy Lab",
    repo: "djs525/f1-strategy-app",
    sheet: "05",
    problem:
      "Fans argue pit strategy every race with no way to test whether the alternative call would have worked.",
    approach:
      "I built a full-stack race strategy simulator trained on 7+ years of F1 telemetry; an ML pit-stop optimizer ranks strategies by projected finish position, served via REST API, containerized with Docker, deployed on DigitalOcean.",
    outcome:
      "A passion project — I'm a longtime F1 fan, and building in that space was the motivation. No competition, no external outcome.",
    layers: [
      { role: "INTERFACE", part: "Strategy simulator UI" },
      { role: "SERVICE", part: "FastAPI REST, Docker" },
      { role: "DATA", part: "7+ years F1 telemetry" },
      { role: "MODEL", part: "Pit-stop optimizer" },
    ],
    classification: ["INTERFACE", "DATA"],
    sprite: SPRITE_HELMET,
  },
];

export const DISCIPLINES: readonly Discipline[] = [
  "INTERFACE",
  "DATA",
  "PRODUCT",
];
