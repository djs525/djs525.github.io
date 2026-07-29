import type { LiveStats, RepoStats } from "../lib/useLiveStats";
import styles from "./LiveValue.module.css";

interface LiveValueProps {
  readonly stats: LiveStats;
  readonly select: (data: RepoStats) => string;
}

/**
 * Renders a value only when it genuinely came from the API. Every other state
 * reads NO DATA — there is deliberately no hardcoded fallback, because a
 * stale number dressed as a live one is the failure this system exists to
 * avoid. See DESIGN.md, The Live Ink Rule.
 */
export function LiveValue({ stats, select }: LiveValueProps) {
  if (stats.status === "ok") {
    return <span className={styles.live}>{select(stats.data)}</span>;
  }

  const label = stats.status === "loading" ? "READING…" : "NO DATA";
  return <span className={styles.absent}>{label}</span>;
}
