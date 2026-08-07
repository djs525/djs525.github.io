/**
 * DIRECTION CONTRACT — studio landing
 *
 * THESIS: The site opens on a choice, not a page. The name sits in an inked
 * disc and the five rooms are tucked behind it, each showing only its mark
 * until it is reached for — then that one slides out from under the disc and
 * says its name, outside itself, where nothing is competing for the space.
 * Refuses the hero-then-scroll opening: nothing here is read, only chosen.
 *
 * OWN-WORLD: The studio palette, played straight. Warm near-white ground,
 * white plates, hairline rims, ink for the chosen thing. One grotesk, and the
 * signature face on the name only.
 *
 * STORY: A visitor lands, watches the name ink itself, reads five marks in a
 * clockwise sweep, and pulls out the one that matches why they came.
 *
 * FORM: Dial. Five plateaus at 72°, wide edge inward and hidden under the
 * disc, narrow edge outward carrying the mark. Wide and shallow rather than
 * tall: what shows around the disc is a level tab, and the taper is only
 * enough to say the shape belongs to a circle.
 */

import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ROUTE_META } from "../data/meta";
import { usePageMeta } from "../lib/usePageMeta";
import { Signature } from "./Signature";
import {
  CaseIcon,
  HierarchyIcon,
  PersonIcon,
  StackIcon,
  TrophyIcon,
} from "./Icons";
import styles from "./Landing.module.css";

/**
 * The five rooms, placed clockwise from the top left. Angles are degrees from
 * straight up, 72° apart, so the ring stays even however the rooms are
 * reordered — only these numbers decide where a route sits.
 */
const SPOKES = [
  { to: "/projects", label: "Projects", angle: -36, Mark: StackIcon },
  { to: "/experience", label: "Experience", angle: 36, Mark: CaseIcon },
  { to: "/leadership", label: "Leadership", angle: 108, Mark: HierarchyIcon },
  { to: "/achievements", label: "Achievements", angle: 180, Mark: TrophyIcon },
  { to: "/about", label: "About", angle: 252, Mark: PersonIcon },
] as const;

type Point = readonly [number, number];

/** The box the shape is drawn in. The element has to keep this ratio. */
const BOX = { width: 160, height: 70 } as const;

/**
 * The plateau, narrow edge first — rotation turns the top of this box outward,
 * so the wide edge is the one that ends up under the disc.
 *
 * Wide and shallow, and the two go together. A shape reads as a petal when its
 * legs are as long as its edges and the taper is steep; this box is 160 across
 * against a rise of 64, edges of 156 and 122 against legs of 66. The parallel
 * sides are more than twice the legs, so what a room looks like is a tab
 * stretched sideways — the depth is only what it takes to hide under the disc.
 *
 * The gaps between rooms are the constraint on all of it. Five shapes on a
 * ring have 72° each, and the widest point of a shape still outside the disc
 * is on a leg, not on an edge: the legs here leave the disc at about 26° off
 * their own axis, so roughly 20° of ground shows between neighbours. A shape
 * that is both wider and shallower than this one cannot hide its inner corners
 * behind the disc, because near the rim the room to hide in runs out.
 */
const CORNERS: readonly Point[] = [
  [19, 3],
  [141, 3],
  [158, 67],
  [2, 67],
];
const RADIUS = 20;

/** Rounds coordinates so the path string stays legible in the DOM. */
function fmt([x, y]: Point): string {
  const round = (n: number) => Math.round(n * 10000) / 10000;
  return `${round(x)} ${round(y)}`;
}

/** The point `radius` along the edge from `corner` toward `neighbour`. */
function towards([cx, cy]: Point, [nx, ny]: Point, radius: number): Point {
  const dx = nx - cx;
  const dy = ny - cy;
  const length = Math.hypot(dx, dy) || 1;
  // Never past the midpoint of an edge, or two large radii on a short edge
  // would cross and the corner would fold inside out.
  const distance = Math.min(radius, length / 2);
  return [cx + (dx / length) * distance, cy + (dy / length) * distance];
}

/**
 * A polygon with every corner rounded to the same radius, clamped per edge.
 *
 * A quadratic curve whose control point is the corner itself is not a true
 * arc, but at these radii the difference is sub-pixel and it keeps the shape
 * to one path with no arc flags to get wrong.
 */
function roundedPolygonPath(
  points: readonly Point[],
  radius: number,
): string {
  const segments = points.flatMap((corner, index) => {
    const previous = points[(index - 1 + points.length) % points.length]!;
    const next = points[(index + 1) % points.length]!;
    const entry = towards(corner, previous, radius);
    const exit = towards(corner, next, radius);
    return [
      `${index === 0 ? "M" : "L"} ${fmt(entry)}`,
      `Q ${fmt(corner)} ${fmt(exit)}`,
    ];
  });

  return `${segments.join(" ")} Z`;
}

const PETAL_PATH = roundedPolygonPath(CORNERS, RADIUS);

function Spoke({
  spoke,
  index,
}: {
  readonly spoke: (typeof SPOKES)[number];
  readonly index: number;
}) {
  const { Mark } = spoke;

  // Which way "outward" points on the screen. A name is set level however the
  // shape is turned, so a name on the left or right of the dial runs back
  // across its own plateau unless it is pushed off the axis by hand — and ink
  // on ink is not a legible label. CSS gets the vector; the offset itself is
  // in the stylesheet, in units of the name's own box.
  const radians = (spoke.angle * Math.PI) / 180;
  const round = (n: number) => Math.round(n * 1000) / 1000;

  return (
    <Link
      className={styles.spoke}
      to={spoke.to}
      style={
        {
          "--angle": `${spoke.angle}deg`,
          "--i": index,
          "--nx": round(Math.sin(radians)),
          "--ny": round(-Math.cos(radians)),
        } as CSSProperties
      }
    >
      <svg
        className={styles.petal}
        viewBox={`0 0 ${BOX.width} ${BOX.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d={PETAL_PATH} />
      </svg>

      <span className={styles.face}>
        <Mark />
      </span>

      {/* Sits radially beyond the petal, not inside it: the shape is small and
          the mark already owns its middle. Real text, always in the
          accessibility tree — the reveal is only ever visual, so a screen
          reader never meets five unnamed links. */}
      <span className={styles.word}>
        {/* The slot is centred on the radial axis and levels the text; the
            span inside it is the size of the name itself, which is what the
            outward push has to be measured against. */}
        <span className={styles.wordText}>{spoke.label}</span>
      </span>
    </Link>
  );
}

export default function Landing() {
  usePageMeta(ROUTE_META.home);

  return (
    <main id="content" tabIndex={-1} className={styles.stage}>
      <div className={styles.dial}>
        <nav className={styles.spokes} aria-label="Sections">
          {SPOKES.map((spoke, index) => (
            <Spoke key={spoke.to} spoke={spoke} index={index} />
          ))}
        </nav>

        {/* After the spokes in the DOM, and above them in the stack: the disc
            is what they hide behind. */}
        <div className={styles.core}>
          <Signature>Dev Shah</Signature>
        </div>
      </div>

      <p className={styles.footnote}>Software · Data · Product</p>
    </main>
  );
}
