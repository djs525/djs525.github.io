/**
 * The two worlds the site ships. See DESIGN.md → Theme switching.
 *
 * Studio is the default: the professional read is the site's first job, and a
 * visitor who has never chosen must land there. Arcade is a complete second
 * rendition of the same facts, opted into from the studio footer.
 *
 * The values here are duplicated by the inline boot script in index.html,
 * which stamps the attribute before first paint so the page never flashes the
 * wrong world. Change one, change the other.
 */

export type Theme = "studio" | "arcade";

export const DEFAULT_THEME: Theme = "studio";

/** localStorage key. Matches the boot script in index.html. */
export const THEME_STORAGE_KEY = "theme";

/**
 * One font stylesheet per world, swapped on a single <link>. A studio visitor
 * never downloads Lilita One or Baloo 2, and an arcade visitor never
 * downloads Schibsted Grotesk.
 */
export const THEME_FONTS: Readonly<Record<Theme, string>> = {
  studio:
    "https://fonts.googleapis.com/css2?family=Ms+Madi&family=Schibsted+Grotesk:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap",
  arcade:
    "https://fonts.googleapis.com/css2?family=Lilita+One&family=Baloo+2:wght@500;600;700;800&display=swap",
};

/**
 * One favicon per world. Studio is the wordmark's initials; arcade is frame
 * one of the player sprite, which is a 16×16 grid and therefore already
 * exactly a favicon. Generated from `src/data/sprites.ts` — regenerate it if
 * that sprite changes.
 */
export const THEME_ICONS: Readonly<Record<Theme, string>> = {
  studio: "/favicon.svg",
  arcade: "/favicon-arcade.svg",
};

export function isTheme(value: unknown): value is Theme {
  return value === "studio" || value === "arcade";
}

/**
 * Reads the stored choice. Storage can throw outright in a locked-down
 * browser, so a failure here resolves to the default rather than to a blank
 * page — the visit outranks the preference.
 */
export function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}
