import { DISCIPLINES, type Discipline } from "../data/projects";
import styles from "./Badges.module.css";

interface BadgesProps {
  readonly classification: readonly Discipline[];
}

/**
 * All three disciplines, every time — the ones a unit does not span are shown
 * dimmed rather than omitted, so two units can be compared by shape alone.
 */
export function Badges({ classification }: BadgesProps) {
  return (
    <div className={styles.badges}>
      {DISCIPLINES.map((discipline) => {
        const on = classification.includes(discipline);
        return (
          <span
            key={discipline}
            className={`${styles.badge} ${on ? styles[`badge${discipline}`] : styles.badgeOff}`}
          >
            {discipline}
          </span>
        );
      })}
    </div>
  );
}
