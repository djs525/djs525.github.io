/**
 * Repository statistics for djs525.github.io.
 *
 * The site shows three numbers per project and colours them with the one
 * accent in its palette. That colour means the number was *fetched*, not
 * asserted: it came from GitHub during the visit rather than from a string
 * typed into the site's data files. Everything this Worker returns has to earn
 * that, which is why there is no fallback anywhere below. A request that
 * cannot be answered honestly fails, and the site renders "Not available".
 *
 * Contract, fixed by the site's `useLiveStats` hook:
 *
 *   GET /stats/:owner/:repo
 *   -> 200 { commits: number, activePeriod: string,
 *            languages: [name, percent][] }
 *
 * All three are cumulative. None of them decay: a project finished last year
 * reports the same commit count and the same build window it always will.
 * Recency is deliberately not reported, because a completed project is not a
 * failing one and "last pushed 8 months ago" is the wrong axis for judging
 * portfolio work.
 */

export interface Env {
  /**
   * Fine-grained PAT, public repositories, read-only. Optional: without it the
   * Worker still answers, but GitHub's unauthenticated limit is 60 requests an
   * hour across Cloudflare's shared egress addresses, which in practice means
   * rate-limited. Set with `wrangler secret put GITHUB_TOKEN`.
   */
  readonly GITHUB_TOKEN?: string;
  /** Comma-separated. Anything not listed gets no CORS headers. */
  readonly ALLOWED_ORIGINS: string;
}

/**
 * Only this account's repositories may be queried. Without it the Worker is an
 * open GitHub proxy, and the first person to find it can spend the whole rate
 * limit on someone else's repositories.
 */
const ALLOWED_OWNER = "djs525";

/** GitHub requires a User-Agent and rejects requests without one. */
const USER_AGENT = "djs525.github.io-stats";

/**
 * Fifteen minutes. These figures move slowly by nature, so this is mostly
 * about not spending the rate limit on repeat visitors; a push shows up on the
 * site within the quarter hour.
 */
const CACHE_SECONDS = 900;

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };

function corsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get("origin");
  const allowed = env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  if (!origin || !allowed.includes(origin)) return {};
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "GET, OPTIONS",
    vary: "origin",
  };
}

function json(body: unknown, status: number, extra: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...extra },
  });
}

async function github(path: string, env: Env): Promise<Response> {
  const headers: Record<string, string> = {
    accept: "application/vnd.github+json",
    "user-agent": USER_AGENT,
    "x-github-api-version": "2022-11-28",
  };
  if (env.GITHUB_TOKEN) headers.authorization = `Bearer ${env.GITHUB_TOKEN}`;

  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`github ${path} -> ${res.status}`);
  return res;
}

/**
 * Total commits without walking the history.
 *
 * Asking for one commit per page makes the last page number equal to the
 * commit count, and GitHub puts that number in the Link header. One request
 * instead of one per hundred commits.
 */
function lastPageOf(link: string | null): number | null {
  const match = link?.match(/[?&]page=(\d+)>;\s*rel="last"/);
  return match?.[1] ? Number(match[1]) : null;
}

interface CommitEntry {
  readonly commit: { readonly committer: { readonly date: string } | null };
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/**
 * The window the work happened in, as "Mar – Jul 2026".
 *
 * Collapses to a single label when a project began and ended inside one month,
 * which is the honest rendering of a hackathon build. The separator is the en
 * dash the site already uses for date ranges elsewhere.
 */
function formatPeriod(firstISO: string, lastISO: string): string {
  const a = new Date(firstISO);
  const b = new Date(lastISO);
  const [am, ay] = [MONTHS[a.getUTCMonth()], a.getUTCFullYear()];
  const [bm, by] = [MONTHS[b.getUTCMonth()], b.getUTCFullYear()];

  if (ay === by && am === bm) return `${am} ${ay}`;
  if (ay === by) return `${am} – ${bm} ${by}`;
  return `${am} ${ay} – ${bm} ${by}`;
}

/** Bytes per language into whole percentages, largest first, top four. */
function toPercentages(
  bytes: Record<string, number>,
): [string, number][] {
  const total = Object.values(bytes).reduce((sum, n) => sum + n, 0);
  if (total === 0) return [];
  return Object.entries(bytes)
    .sort(([, a], [, b]) => b - a)
    .map(([name, n]): [string, number] => [name, Math.round((n / total) * 100)])
    // A language listed at 0% is noise: GitHub counts a single Dockerfile or a
    // stray HTML file the same way it counts the language the thing is
    // written in.
    .filter(([, percent]) => percent >= 1)
    .slice(0, 4);
}

async function repoStats(owner: string, repo: string, env: Env) {
  const slug = `${owner}/${repo}`;

  // The commit probe and the language breakdown are independent.
  const [probe, languagesRes] = await Promise.all([
    github(`/repos/${slug}/commits?per_page=1`, env),
    github(`/repos/${slug}/languages`, env),
  ]);

  const newest = (await probe.json()) as CommitEntry[];
  const commits = lastPageOf(probe.headers.get("link")) ?? newest.length;

  // An empty repository is a real answer, not an error.
  if (commits === 0 || !newest[0]) {
    return { commits: 0, activePeriod: "No commits", languages: [] };
  }

  // The last page holds the first commit ever made.
  const oldestRes = await github(
    `/repos/${slug}/commits?per_page=1&page=${commits}`,
    env,
  );
  const oldest = (await oldestRes.json()) as CommitEntry[];

  const lastDate = newest[0].commit.committer?.date;
  const firstDate = oldest[0]?.commit.committer?.date ?? lastDate;

  return {
    commits,
    activePeriod: lastDate ? formatPeriod(firstDate ?? lastDate, lastDate) : "",
    languages: toPercentages(
      (await languagesRes.json()) as Record<string, number>,
    ),
  };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const cors = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "GET") {
      return json({ error: "method not allowed" }, 405, cors);
    }

    const url = new URL(request.url);
    const match = url.pathname.match(
      /^\/stats\/([A-Za-z0-9-]+)\/([A-Za-z0-9._-]+)$/,
    );
    if (!match) return json({ error: "not found" }, 404, cors);

    const [, owner, repo] = match as unknown as [string, string, string];
    if (owner.toLowerCase() !== ALLOWED_OWNER) {
      return json({ error: "owner not allowed" }, 403, cors);
    }

    // Cloudflare's edge cache, keyed on the request URL. Repeat visitors and
    // repeat page loads never reach GitHub.
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), { method: "GET" });
    const hit = await cache.match(cacheKey);
    if (hit) {
      const headers = new Headers(hit.headers);
      for (const [k, v] of Object.entries(cors)) headers.set(k, v);
      return new Response(hit.body, { status: hit.status, headers });
    }

    try {
      const stats = await repoStats(owner, repo, env);
      const response = json(stats, 200, {
        ...cors,
        "cache-control": `public, max-age=${CACHE_SECONDS}`,
      });
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
      return response;
    } catch (error) {
      // Nothing is invented on failure. The site renders "Not available",
      // which is the correct answer when the truth is unavailable.
      console.error(error);
      return json({ error: "upstream unavailable" }, 502, cors);
    }
  },
} satisfies ExportedHandler<Env>;
