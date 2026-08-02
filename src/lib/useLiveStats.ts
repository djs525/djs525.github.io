import { useEffect, useState } from "react";

/**
 * Live repository telemetry, fetched from the Worker.
 *
 * The Worker owns the GitHub token and the cache; the browser never calls
 * GitHub directly, because the unauthenticated API rate-limits by IP and a
 * recruiter's page load must not be the request that runs out of budget.
 *
 * Every figure it returns is cumulative: a project finished last year reports
 * the same commit count and the same build window it always will. Recency is
 * deliberately not among them, because a completed project is not a failing
 * one. What the reserved colour marks is provenance, not freshness.
 *
 * Until VITE_API_BASE is configured, every value reports `unavailable` and the
 * UI renders "Not available". That is the designed resting state, not a bug.
 * See DESIGN.md, The Fetched Value Rule.
 */

export interface RepoStats {
  readonly commits: number;
  /** The window the work happened in, e.g. "Mar – Jul 2026". */
  readonly activePeriod: string;
  /** Language name → percentage of bytes, largest first. */
  readonly languages: readonly (readonly [string, number])[];
}

export type LiveStats =
  | { readonly status: "unavailable" }
  | { readonly status: "loading" }
  | { readonly status: "error" }
  | { readonly status: "ok"; readonly data: RepoStats };

const API_BASE = import.meta.env["VITE_API_BASE"] as string | undefined;

export function useLiveStats(repo: string | undefined): LiveStats {
  const [state, setState] = useState<LiveStats>(
    API_BASE ? { status: "loading" } : { status: "unavailable" },
  );

  useEffect(() => {
    if (!API_BASE || !repo) return;

    const controller = new AbortController();

    fetch(`${API_BASE}/stats/${repo}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`stats ${res.status}`);
        return res.json() as Promise<RepoStats>;
      })
      .then((data) => setState({ status: "ok", data }))
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setState({ status: "error" });
      });

    return () => controller.abort();
  }, [repo]);

  return state;
}
