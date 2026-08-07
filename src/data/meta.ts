/**
 * One description per route, shared by both worlds.
 *
 * These are page summaries rather than factual claims — no metric, placement
 * or credential appears here that is not already approved elsewhere in
 * src/data. Keep it that way: a description is still published copy.
 */

export const ROUTE_META = {
  home: {
    description:
      "I build products end to end: the interface you touch, the service behind it, the data underneath, and the model that decides. Four projects, each written up in full.",
  },
  projects: {
    title: "Projects",
    description:
      "Four projects built end to end — the interface, the service, the data, and the model — each written up in full.",
  },
  experience: {
    title: "Experience",
    description:
      "AI engineering and data science roles: what I built, and what it did.",
  },
  leadership: {
    title: "Leadership",
    description:
      "Operations management and teaching, alongside the engineering work.",
  },
  achievements: {
    title: "Achievements",
    description: "Competition placements and university honors.",
  },
  about: {
    title: "About",
    description: "Off the clock: what I play, and what I watch.",
  },
} as const;
