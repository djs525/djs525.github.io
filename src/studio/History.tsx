import type { HistoryEntry } from "../data/history";
import { Reveal } from "./Reveal";
import styles from "./History.module.css";

function Entry({
  entry,
  index,
}: {
  readonly entry: HistoryEntry;
  readonly index: number;
}) {
  return (
    <Reveal as="article" delay={index * 60} className={styles.entry}>
      <div className={styles.meta}>
        <span className={styles.period}>{entry.period}</span>
        <span className={styles.place}>{entry.place}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.role}>{entry.role}</h3>
        <p className={styles.org}>{entry.org}</p>

        {entry.stats ? (
          <ul className={styles.figures}>
            {entry.stats.map((stat) => (
              <li key={stat} className={styles.figure}>
                {stat}
              </li>
            ))}
          </ul>
        ) : null}

        <ul className={styles.bullets}>
          {entry.bullets.map((bullet) => (
            <li key={bullet} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>

        {entry.stack ? <p className={styles.stack}>{entry.stack}</p> : null}
      </div>
    </Reveal>
  );
}

export function History({
  entries,
}: {
  readonly entries: readonly HistoryEntry[];
}) {
  return (
    <div className={styles.entries}>
      {entries.map((entry, index) => (
        <Entry key={entry.id} entry={entry} index={index} />
      ))}
    </div>
  );
}
