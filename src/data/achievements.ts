/**
 * Every factual claim in this file was approved verbatim by Dev Shah, then
 * converted to first person on his instruction with the facts unchanged.
 * Do not add or reword a claim here without his explicit sign-off.
 */

export type Rarity = "GOLD" | "SILVER" | "HONOR";

export interface Achievement {
  readonly id: string;
  readonly title: string;
  readonly rarity: Rarity;
  readonly when: string;
  readonly detail: string;
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: "bits-ibm",
    title: "1st Place, Rutgers BITS × IBM Datathon",
    rarity: "GOLD",
    when: "Mar 2026",
    detail: "I built GSD.AI. Judged by IBM and JPMorgan professionals.",
  },
  {
    id: "bits-barclays",
    title: "1st Place, Rutgers BITS × Barclays Datathon",
    rarity: "GOLD",
    when: "Mar 2025",
    detail: "Stock prediction model.",
  },
  {
    id: "dsc-datathon",
    title: "1st Place, Rutgers Data Science Club Datathon",
    rarity: "GOLD",
    when: "2024",
    detail: "Best Research.",
  },
  {
    id: "techstart",
    title: "2nd Place, Rutgers TechStart",
    rarity: "SILVER",
    when: "Mar 2026",
    detail: "I pitched FleetSovereign via Road to Silicon V/Alley.",
  },
  {
    id: "leadership-award",
    title: "Excellence in Leadership & Academic Achievement Award",
    rarity: "HONOR",
    when: "May 2026",
    detail: "Rutgers University.",
  },
  {
    id: "sas-award",
    title: "SAS Excellence Award",
    rarity: "HONOR",
    when: "Feb 2025",
    detail: "Rutgers School of Arts and Sciences.",
  },
];

/** Headline counts, surfaced as a stat strip. */
export const TROPHY_COUNTS: readonly { label: string; value: number }[] = [
  { label: "First places", value: 3 },
  { label: "Podiums", value: 4 },
  { label: "Honors", value: 2 },
  { label: "Dean's List", value: 7 },
];
