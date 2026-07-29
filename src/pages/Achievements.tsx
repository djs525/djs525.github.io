import { Banner, Screen } from "../components/Screen";
import { CountUp } from "../components/CountUp";
import { PixelSprite } from "../components/PixelSprite";
import { ACHIEVEMENTS, TROPHY_COUNTS } from "../data/achievements";
import type { Achievement } from "../data/achievements";
import { SPRITE_TROPHY } from "../data/sprites";
import { useReveal } from "../lib/useReveal";
import styles from "./Achievements.module.css";

function Row({ item }: { readonly item: Achievement }) {
  const { ref, revealed } = useReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`${styles.row} ${styles[item.rarity]} ${revealed ? styles.revealed : ""}`}
    >
      <div className={styles.medal}>
        <PixelSprite sprite={SPRITE_TROPHY} size={48} />
      </div>
      <div>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.detail}>{item.detail}</p>
      </div>
      <span className={styles.when}>{item.when}</span>
    </li>
  );
}

export default function Achievements() {
  return (
    <Screen>
      <Banner title="ACHIEVEMENTS" count={`${ACHIEVEMENTS.length} unlocked`} />

      <div className={styles.tally}>
        {TROPHY_COUNTS.map((count) => (
          <div key={count.label} className={styles.tallyCell}>
            <CountUp value={count.value} className={styles.tallyValue} />
            <span className={styles.tallyLabel}>{count.label}</span>
          </div>
        ))}
      </div>

      <ul className={styles.list}>
        {ACHIEVEMENTS.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </ul>
    </Screen>
  );
}
