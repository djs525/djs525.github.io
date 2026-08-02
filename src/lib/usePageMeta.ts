import { useEffect } from "react";

/**
 * Sets the document title and description for a route.
 *
 * Behavioural, not presentational, so both worlds share it: a tab label is
 * metadata about the page, not part of a visual system. Both worlds therefore
 * use the neutral vocabulary — a browser history entry reading "Roster" helps
 * nobody find their way back.
 *
 * A caveat worth knowing: search engines and link unfurlers read the static
 * `index.html`, because they do not run the bundle. What this hook changes is
 * the live tab, the history entry, and the bookmark name. The crawler-facing
 * title and card live in `index.html` and are one per site.
 */

const NAME = "Dev Shah";
const HOME_TITLE = "Dev Shah — Software, data, product";

function setDescription(content: string) {
  const tag = document.querySelector('meta[name="description"]');
  if (tag instanceof HTMLMetaElement) tag.content = content;
}

interface PageMeta {
  /** The page's own name. Omit on home, which owns the full site title. */
  readonly title?: string | undefined;
  readonly description: string;
}

export function usePageMeta({ title, description }: PageMeta): void {
  useEffect(() => {
    document.title = title ? `${title} · ${NAME}` : HOME_TITLE;
    setDescription(description);
  }, [title, description]);
}
