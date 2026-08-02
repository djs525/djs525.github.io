import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { useReveal } from "../lib/useReveal";
import { Badges } from "./Badges";
import { PixelSprite } from "./PixelSprite";
import styles from "./UnitCard.module.css";

interface UnitCardProps {
  readonly project: Project;
}

/**
 * A roster entry: enough to recognise the unit and decide to open it. The log,
 * the four strata and the telemetry all live on the unit's own page.
 */
export function UnitCard({ project }: UnitCardProps) {
  const { ref, revealed } = useReveal<HTMLElement>();
  const href = `/projects/${project.slug}`;

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
          <h3 className={styles.name}>
            <Link className={styles.nameLink} to={href}>
              {project.name}
            </Link>
          </h3>
          <Badges classification={project.classification} />
        </div>
      </header>

      <p className={styles.hook}>{project.hook}</p>

      {/* Two links side by side, never nested: an <a> inside an <a> is invalid
          HTML and the browser silently restructures it. */}
      <footer className={styles.footer}>
        <Link className={styles.view} to={href}>
          View log
        </Link>
        <a className={styles.open} href={`https://github.com/${project.repo}`}>
          Open repo
        </a>
      </footer>
    </article>
  );
}
