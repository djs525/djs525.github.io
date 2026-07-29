import { useEffect, useState } from "react";

/**
 * Live repository telemetry, fetched from the Worker.
 *
 * The Worker owns the GitHub token and the cache; the browser never calls
 * GitHub directly, because the unauthenticated API rate-limits by IP and a
 * recruiter's page load must not be the request that runs out of budget.
 *
 * Until VITE_API_BASE is configured, every value reports `unavailable` and the
 * UI renders NO DATA. That is the designed resting state, not a bug — see
 * DESIGN.md, The Live Ink Rule.
 */

export interface RepoStats {
  readonly commits: number;
  readonly lastPush: string;
  /** Language name → percentage of bytes, largest first. */
  readonly languages: readonly (readonly [string, number])[];
}

export type LiveStats =
  | { readonly status: "unavailable" }
  | { readonly status: "loading" }
  | { readonly status: "error" }
  | { readonly status: "ok"; readonly data: RepoStats };

const API_BASE = import.meta.env["VITE_API_BASE"] as string | undefined;

export function useLiveStats(repo: string): LiveStats {
  const [state, setState] = useState<LiveStats>(
    API_BASE ? { status: "loading" } : { status: "unavailable" },
  );

  useEffect(() => {
    if (!API_BASE) return;

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
