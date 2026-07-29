import { useId } from "react";
import styles from "./Arena.module.css";

/** One blocky cloud, drawn as pixel runs: [x, y, width]. */
const CLOUD_SMALL: readonly (readonly [number, number, number])[] = [
  [3, 0, 5],
  [1, 1, 9],
  [0, 2, 12],
  [2, 3, 8],
];

const CLOUD_LARGE: readonly (readonly [number, number, number])[] = [
  [6, 0, 7],
  [3, 1, 13],
  [1, 2, 18],
  [0, 3, 21],
  [0, 4, 21],
  [2, 5, 15],
];

/** The near band: a blocky skyline of stands around the arena floor. */
const STANDS: readonly (readonly [number, number, number])[] = [
  [0, 4, 3],
  [3, 2, 2],
  [5, 5, 4],
  [9, 1, 3],
  [12, 4, 2],
  [14, 3, 4],
  [18, 6, 3],
  [21, 2, 3],
];

interface BandProps {
  readonly id: string;
  readonly tile: readonly (readonly [number, number, number])[];
  readonly tileWidth: number;
  readonly tileHeight: number;
  readonly unit: number;
  readonly height: number;
  readonly className: string;
}

function Band({
  id,
  tile,
  tileWidth,
  tileHeight,
  unit,
  height,
  className,
}: BandProps) {
  return (
    <svg
      className={`${styles.layer} ${className}`}
      height={height}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={id}
          patternUnits="userSpaceOnUse"
          width={tileWidth * unit}
          height={tileHeight * unit}
        >
          {tile.map(([x, y, w]) => (
            <rect
              key={`${x}-${y}`}
              x={x * unit}
              y={y * unit}
              width={w * unit}
              height={unit}
              fill="var(--panel)"
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * The arena the roster stands in: three bands of hand-placed pixel cloud and
 * stand shapes, parallaxing at different rates against the scroll.
 *
 * Purely atmospheric and entirely non-interactive — it sits behind the content
 * at z-index 0 and never intercepts a pointer.
 */
export function Arena() {
  // useId() returns ':r0:'-style values. Colons are legal in an id attribute
  // but break `url(#…)` references, so they are stripped before use.
  const uid = useId().replace(/:/g, "");

  return (
    <div className={styles.arena} aria-hidden="true">
      <Band
        id={`${uid}-far`}
        tile={CLOUD_SMALL}
        tileWidth={26}
        tileHeight={12}
        unit={4}
        height={48}
        className={styles.far ?? ""}
      />
      <Band
        id={`${uid}-mid`}
        tile={CLOUD_LARGE}
        tileWidth={38}
        tileHeight={16}
        unit={6}
        height={96}
        className={styles.mid ?? ""}
      />
      <Band
        id={`${uid}-near`}
        tile={STANDS}
        tileWidth={24}
        tileHeight={8}
        unit={8}
        height={64}
        className={styles.near ?? ""}
      />
    </div>
  );
}
