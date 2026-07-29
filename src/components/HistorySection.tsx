import type { HistoryEntry } from "../data/history";
import { useReveal } from "../lib/useReveal";
import styles from "./HistorySection.module.css";

function Entry({ entry }: { readonly entry: HistoryEntry }) {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`${styles.entry} ${revealed ? styles.revealed : ""}`}
    >
      <header className={styles.head}>
        <div>
          <h3 className={styles.role}>{entry.role}</h3>
          <span className={styles.org}>{entry.org}</span>
        </div>
        <span className={styles.when}>
          {entry.period}
          <span className={styles.place}>{entry.place}</span>
        </span>
      </header>

      {entry.stats ? (
        <div className={styles.stats}>
          {entry.stats.map((stat) => (
            <span key={stat} className={styles.stat}>
              {stat}
            </span>
          ))}
        </div>
      ) : null}

      <ul className={styles.bullets}>
        {entry.bullets.map((bullet) => (
          <li key={bullet} className={styles.bullet}>
            {bullet}
          </li>
        ))}
      </ul>

      {entry.stack ? <p className={styles.stack}>{entry.stack}</p> : null}
    </article>
  );
}

interface HistorySectionProps {
  readonly entries: readonly HistoryEntry[];
}

export function HistorySection({ entries }: HistorySectionProps) {
  return (
    <div className={styles.entries}>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
