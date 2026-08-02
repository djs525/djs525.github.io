import { Banner, Screen } from "../components/Screen";
import { PixelSprite } from "../components/PixelSprite";
import { CREED, INTERESTS } from "../data/about";
import type { Interest } from "../data/about";
import { SPRITE_CONTROLLER } from "../data/sprites";
import { useReveal } from "../lib/useReveal";
import styles from "./About.module.css";
import { usePageMeta } from "../lib/usePageMeta";
import { ROUTE_META } from "../data/meta";

function Tile({ interest }: { readonly interest: Interest }) {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`${styles.tile} ${revealed ? styles.revealed : ""}`}
    >
      <span className={styles.kind}>{interest.kind}</span>
      <h3 className={styles.name}>{interest.name}</h3>
      <p className={styles.note}>{interest.note}</p>
    </article>
  );
}

export default function About() {
  usePageMeta(ROUTE_META.about);

  return (
    <Screen>
      <Banner title="GET TO KNOW ME" count="Off the clock" />

      <section className={styles.creed}>
        <div className={styles.creedSprite}>
          <PixelSprite sprite={SPRITE_CONTROLLER} size={112} />
        </div>
        <div className={styles.creedText}>
          {CREED.map((line) => (
            <p key={line} className={styles.creedLine}>
              {line}
            </p>
          ))}
        </div>
      </section>

      <div className={styles.interests}>
        {INTERESTS.map((interest) => (
          <Tile key={interest.id} interest={interest} />
        ))}
      </div>
    </Screen>
  );
}
