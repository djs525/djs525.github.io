import type { ReactNode } from "react";
import type { LiveStats, RepoStats } from "../lib/useLiveStats";
import styles from "./Parts.module.css";

interface SectionHeadingProps {
  readonly title: string;
  /** A counted fact about the section — set in the measurement face. */
  readonly meta?: string;
}

export function SectionHeading({ title, meta }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <h2 className={styles.headingTitle}>{title}</h2>
      {meta ? <span className={styles.headingMeta}>{meta}</span> : null}
    </div>
  );
}

/** Disciplines a project spans. Only the ones that apply are shown. */
export function Tags({ items }: { readonly items: readonly string[] }) {
  return (
    <ul className={styles.tags}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item.charAt(0) + item.slice(1).toLowerCase()}
        </li>
      ))}
    </ul>
  );
}

export interface Stat {
  readonly label: string;
  readonly value: ReactNode;
}

/** Label above value, hairline-separated. No card per stat, no hero number. */
export function StatGrid({ items }: { readonly items: readonly Stat[] }) {
  return (
    <dl className={styles.stats}>
      {items.map((stat) => (
        <div key={stat.label} className={styles.stat}>
          <dt className={styles.statLabel}>{stat.label}</dt>
          <dd className={styles.statValue}>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

interface LiveValueProps {
  readonly stats: LiveStats;
  readonly select: (data: RepoStats) => string;
}

/**
 * Renders a value only when it genuinely came from the API this session, and
 * carries the one accent colour in the studio world. Every other state reads
 * plainly in muted ink — there is deliberately no hardcoded fallback, because
 * a stale number dressed as a live one is the failure this system exists to
 * avoid. See DESIGN.md, The Live Value Rule.
 */
export function LiveValue({ stats, select }: LiveValueProps) {
  if (stats.status === "ok") {
    return (
      <span className={styles.live}>
        <span className={styles.liveDot} aria-hidden="true" />
        {select(stats.data)}
      </span>
    );
  }

  return (
    <span className={styles.absent}>
      {stats.status === "loading" ? "Reading…" : "Not available"}
    </span>
  );
}
