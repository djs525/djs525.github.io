import { DISCIPLINES, type Project } from "../data/projects";
import { useLiveStats } from "../lib/useLiveStats";
import { useReveal } from "../lib/useReveal";
import { LiveValue } from "./LiveValue";
import { PixelSprite } from "./PixelSprite";
import styles from "./UnitCard.module.css";

interface UnitCardProps {
  readonly project: Project;
}

export function UnitCard({ project }: UnitCardProps) {
  const { ref, revealed } = useReveal<HTMLElement>();
  const stats = useLiveStats(project.repo);

  return (
    <article
      ref={ref}
      id={project.slug}
      className={`${styles.card} ${revealed ? styles.revealed : ""}`}
    >
      <header className={styles.head}>
        <div className={styles.portrait}>
          <PixelSprite sprite={project.sprite} size={88} />
        </div>
        <div className={styles.identity}>
          <h3 className={styles.name}>{project.name}</h3>
          <div className={styles.badges}>
            {DISCIPLINES.map((discipline) => {
              const on = project.classification.includes(discipline);
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
        </div>
      </header>

      {/* The stack, as one line. The role names are the same four every time,
          so naming them per row was sixteen repetitions of nothing. */}
      <p className={styles.stack}>
        {project.layers.map((layer) => layer.part).join(" · ")}
      </p>

      <div className={styles.log}>
        <p className={styles.logEntry}>
          <span className={styles.logKey}>PROBLEM</span>
          {project.problem}
        </p>
        <p className={styles.logEntry}>
          <span className={styles.logKey}>METHOD</span>
          {project.approach}
        </p>
        <p className={styles.logEntry}>
          <span className={styles.logKey}>RESULT</span>
          {project.outcome}
        </p>
      </div>

      <footer className={styles.footer}>
        <span className={styles.stat}>
          Commits
          <span className={styles.statValue}>
            <LiveValue stats={stats} select={(d) => String(d.commits)} />
          </span>
        </span>
        <a className={styles.open} href={`https://github.com/${project.repo}`}>
          Open repo
        </a>
      </footer>
    </article>
  );
}
