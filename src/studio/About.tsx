import type { ReactElement } from "react";
import { CREED, INTERESTS } from "../data/about";
import type { Interest } from "../data/about";
import { Page } from "./Shell";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Parts";
import {
  CardsIcon,
  ControllerIcon,
  FlagIcon,
  PokeballIcon,
} from "./Icons";
import styles from "./About.module.css";

/* Presentation, so it is mapped here rather than added to src/data/about.ts —
   that file holds approved claims and nothing else. An interest with no mark
   simply renders its label alone. */
const MARKS: Record<string, () => ReactElement> = {
  "brawl-stars": ControllerIcon,
  "pokemon-champions": PokeballIcon,
  "tcg-pocket": CardsIcon,
  "formula-1": FlagIcon,
};
import { usePageMeta } from "../lib/usePageMeta";
import { ROUTE_META } from "../data/meta";

function Tile({
  interest,
  index,
}: {
  readonly interest: Interest;
  readonly index: number;
}) {
  const Mark = MARKS[interest.id];

  return (
    <Reveal as="article" delay={index * 60} className={styles.tile}>
      <span className={styles.kind}>
        {Mark ? <Mark /> : null}
        {interest.kind}
      </span>
      <h3 className={styles.name}>{interest.name}</h3>
      <p className={styles.note}>{interest.note}</p>
    </Reveal>
  );
}

export default function About() {
  usePageMeta(ROUTE_META.about);

  return (
    <Page>
      <section className={styles.section}>
        <SectionHeading title="About" meta="Off the clock" />

        <Reveal className={styles.creed}>
          {CREED.map((line) => (
            <p key={line} className={styles.creedLine}>
              {line}
            </p>
          ))}
        </Reveal>

        <div className={styles.tiles}>
          {INTERESTS.map((interest, index) => (
            <Tile key={interest.id} interest={interest} index={index} />
          ))}
        </div>
      </section>
    </Page>
  );
}
