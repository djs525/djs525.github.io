/**
 * Every factual claim in this file was approved by Dev Shah, line by line,
 * including the first-person voice. Do not add, reword, or "improve" a claim
 * here without his explicit sign-off.
 */

export interface Interest {
  readonly id: string;
  readonly name: string;
  readonly kind: string;
  readonly note: string;
}

export const CREED = [
  "This is who I am in reality.",
  "If you see me playing any of these, come join. And let's meet up somewhere for a race weekend.",
] as const;

export const INTERESTS: readonly Interest[] = [
  {
    id: "brawl-stars",
    name: "Brawl Stars",
    kind: "Playing",
    note: "Enough of it that I built a Discord bot to answer questions about my own stats.",
  },
  {
    id: "pokemon-champions",
    name: "Pokémon Champions",
    kind: "Playing",
    note: "Recently started. Still learning, but aiming to be the very best.",
  },
  {
    id: "tcg-pocket",
    name: "Pokémon TCG Pocket",
    kind: "Playing",
    note: "Daily packs. The collection pressure is a very well-designed trap.",
  },
  {
    id: "formula-1",
    name: "Formula 1",
    kind: "Watching",
    note: "A longtime fan. Favorite drivers: Lewis Hamilton and Oscar Piastri.",
  },
];
