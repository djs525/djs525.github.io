/**
 * Icons for the studio world.
 *
 * Drawn in the world's own grammar rather than pulled from a library: 16px on
 * a 16px grid, 1.4px strokes with round joins — the same hairline weight the
 * rest of the surface uses — and `currentColor` throughout, so one icon reads
 * correctly on the ink-filled primary button and on the white secondary.
 *
 * The exception is GitHub's mark, which is a trademark and is reproduced as
 * the real thing. A stylised redraw of someone else's logo is worse than
 * either using it or not: it loses the recognition that is the entire reason
 * to show a logo at all.
 *
 * These belong to studio only. Arcade's rule is unchanged — every pictorial
 * element there is a hand-authored pixel grid in `src/data/sprites.ts`.
 */

/*
 * The five rooms, as they appear on the dial. A room has to be recognisable
 * before its name is read, so each one is the plainest possible sign for what
 * is behind it — a stack, a case, a chain of command, a cup, a person — and
 * none of them is clever.
 */

export function StackIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 1.9 14.3 5.5 8 9.1 1.7 5.5z" />
      <path d="M2.6 8.4 8 11.5l5.4-3.1" />
      <path d="M2.6 11.3 8 14.4l5.4-3.1" />
    </svg>
  );
}

export function CaseIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1.7" y="4.6" width="12.6" height="9" rx="1.8" />
      <path d="M5.8 4.6V3.5c0-.7.6-1.3 1.3-1.3h1.8c.7 0 1.3.6 1.3 1.3v1.1" />
      <path d="M1.7 8.6h12.6" />
    </svg>
  );
}

export function HierarchyIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="8" cy="3.3" r="1.8" />
      <circle cx="3.4" cy="12.5" r="1.8" />
      <circle cx="12.6" cy="12.5" r="1.8" />
      <path d="M8 5.1v2.3" />
      <path d="M3.4 10.7V7.4h9.2v3.3" />
    </svg>
  );
}

export function TrophyIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.6 2.2h6.8v3.6a3.4 3.4 0 0 1-6.8 0z" />
      <path d="M4.6 3.2H2.7v1.2a2.5 2.5 0 0 0 1.9 2.4" />
      <path d="M11.4 3.2h1.9v1.2a2.5 2.5 0 0 1-1.9 2.4" />
      <path d="M8 9.2v2.5" />
      <path d="M5.5 13.8h5" />
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="8" cy="5.4" r="2.7" />
      <path d="M2.9 13.8a5.3 5.3 0 0 1 10.2 0" />
    </svg>
  );
}

/*
 * The four interests on About, drawn to the same 16px/1.4px rule as everything
 * else here. They are the one place on the site where a mark is allowed to be
 * warm rather than functional — but they stay line drawings in currentColor,
 * because a set of little coloured illustrations would outrank the work.
 */

export function ControllerIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1.5" y="4.6" width="13" height="7.4" rx="2.8" />
      <path d="M4.3 8.3h2.1M5.35 7.25v2.1" />
      <path d="M10.3 9.1h.01M11.9 7.5h.01" />
    </svg>
  );
}

export function PokeballIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="8" cy="8" r="6.3" />
      <path d="M1.7 8h4M10.3 8h4" />
      <circle cx="8" cy="8" r="2.1" />
    </svg>
  );
}

export function CardsIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="2.2"
        y="3.4"
        width="6.6"
        height="9.2"
        rx="1.4"
        transform="rotate(-9 5.5 8)"
      />
      <rect
        x="7.2"
        y="3.4"
        width="6.6"
        height="9.2"
        rx="1.4"
        transform="rotate(9 10.5 8)"
      />
    </svg>
  );
}

export function FlagIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.3 2.2v11.6" />
      <path d="M3.3 3.4h9.4v5.8H3.3z" />
      <path
        d="M3.3 3.4h4.7v2.9H3.3zM8 6.3h4.7v2.9H8z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1.6" y="3.4" width="12.8" height="9.2" rx="1.6" />
      <path d="M2.4 4.6 8 8.9l5.6-4.3" />
    </svg>
  );
}

/**
 * The mark on a link that leaves the site. Every outbound link here opens in a
 * new tab, and a tab opening unannounced is a small surprise a reader has to
 * recover from; this says so before the click instead of after it.
 *
 * Drawn rather than set as the ↗ character: a glyph inherits the text face's
 * weight and optical size and lands differently in every context, where this
 * carries the same 1.4px hairline as the rest of the icon set. Deliberately
 * 12px rather than 16 — it annotates a link, it is not a button's icon.
 */
export function OutboundIcon() {
  return (
    <svg
      className="icon"
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.6 11.4 11.4 4.6" />
      <path d="M5.9 4.6h5.5v5.5" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg
      className="icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
