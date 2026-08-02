import { CREED, INTERESTS } from "../data/about";
import type { Interest } from "../data/about";
import { Page } from "./Shell";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Parts";
import styles from "./About.module.css";

function Tile({
  interest,
  index,
}: {
  readonly interest: Interest;
  readonly index: number;
}) {
  return (
    <Reveal as="article" delay={index * 60} className={styles.tile}>
      <span className={styles.kind}>{interest.kind}</span>
      <h3 className={styles.name}>{interest.name}</h3>
      <p className={styles.note}>{interest.note}</p>
    </Reveal>
  );
}

export default function About() {
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
