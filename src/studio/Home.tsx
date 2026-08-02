/**
 * DIRECTION CONTRACT — studio home
 *
 * THESIS: A hiring read, not a portfolio performance. Four projects as a
 * hairline-ruled index a recruiter can sweep in one pass, then fall into.
 * Refuses the card-grid portfolio and the big-number hero metric.
 *
 * OWN-WORLD: Modern product canon, played straight. Warm near-white ground,
 * white plates, 1px hairlines, one grotesk from 0.75rem to 4rem, generous
 * quiet. Monochrome throughout except one reserved green that appears only on
 * values fetched from the API this session.
 *
 * STORY: A recruiter learns who this is in one viewport, reads four project
 * names and hooks in the next, and opens the one that matches their role.
 *
 * FIRST VIEWPORT: Sticky hairline header. Name at display scale, the
 * end-to-end claim beneath it at 68ch, three credentials on a hairline rail,
 * then the primary action — email — with the repository link beside it.
 *
 * FORM: Canon, taken as the standing exit over a direction roll (seed
 * 8835ba75) and pinned by Dev; craft bar named as Notion, colours and shapes
 * deliberately not borrowed from it. Staging: index-then-detail across routes.
 */

import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data/projects";
import { ROUTE_META } from "../data/meta";
import { usePageMeta } from "../lib/usePageMeta";
import { Page } from "./Shell";
import { Reveal } from "./Reveal";
import { GitHubIcon, MailIcon } from "./Icons";
import { Signature } from "./Signature";
import { SectionHeading, Tags } from "./Parts";
import styles from "./Home.module.css";

const EMAIL = "djshah2903@gmail.com";

function ProjectRow({
  project,
  index,
}: {
  readonly project: Project;
  readonly index: number;
}) {
  return (
    <Reveal as="li" delay={index * 60} className={styles.rowWrap}>
      <article className={styles.row}>
        <div className={styles.rowMain}>
          <h3 className={styles.rowName}>
            {/* Covers the whole row via ::after, so the row is one target and
                the repository link below stays independently clickable. */}
            <Link className={styles.rowLink} to={`/projects/${project.slug}`}>
              {project.name}
              <span className={styles.rowArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </h3>
          <p className={styles.rowHook}>{project.hook}</p>
          <Tags items={project.classification} />
        </div>

        <div className={styles.rowStack}>
          {project.layers.map((layer) => (
            <div key={layer.role} className={styles.stratum}>
              <span className={styles.stratumRole}>
                {layer.role.charAt(0) + layer.role.slice(1).toLowerCase()}
              </span>
              <span className={styles.stratumPart}>{layer.part}</span>
            </div>
          ))}
          <a
            className={styles.rowRepo}
            href={`https://github.com/${project.repo}`}
          >
            {project.repo}
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export default function Home() {
  usePageMeta(ROUTE_META.home);

  return (
    <Page>
      {/* Not wrapped in Reveal: the hero is above the fold and the signature is
          the surface's one authored moment. A fade-and-rise underneath it
          would be a second entrance competing with the first. */}
      <section className={styles.hero}>
        <Signature>Dev Shah</Signature>

        <p className={styles.lead}>
          I build products end to end. Every project here started as something I
          wanted to exist, and I built every layer of it — the interface you
          touch, the service behind it, the data underneath, and the model that
          decides.
        </p>

        <ul className={styles.credentials}>
          <li className={styles.credential}>
            B.S. Computer Science, Data Science minor — Rutgers,{" "}
            <span className={styles.figure}>2026</span>
          </li>
          <li className={styles.credential}>
            GPA <span className={styles.figure}>3.80</span>
          </li>
          <li className={styles.credential}>
            Dean&rsquo;s List, <span className={styles.figure}>7</span>{" "}
            semesters
          </li>
        </ul>

        <div className={styles.actions}>
          <a className={styles.primary} href={`mailto:${EMAIL}`}>
            <MailIcon />
            Email me
          </a>
          <a className={styles.secondary} href="https://github.com/djs525">
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </section>

      <section className={styles.projects}>
        <SectionHeading
          title="Projects"
          meta={`${PROJECTS.length} write-ups`}
        />
        <ol className={styles.rows}>
          {PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </ol>
      </section>
    </Page>
  );
}
