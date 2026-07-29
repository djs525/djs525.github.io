import type { CSSProperties } from "react";
import type { Sprite } from "../data/sprites";
import styles from "./PixelSprite.module.css";

interface PixelSpriteProps {
  readonly sprite: Sprite;
  /** Rendered edge length in CSS pixels. */
  readonly size: number;
  readonly className?: string;
}

/**
 * Renders a hand-authored pixel grid as crisp SVG rects.
 *
 * Every frame is laid out side by side in a single wide SVG; a CSS `steps()`
 * animation walks the strip across a clipping window. That keeps the idle loop
 * entirely on the compositor — no timers, no re-renders, and it stops dead
 * under `prefers-reduced-motion`.
 */
export function PixelSprite({ sprite, size, className }: PixelSpriteProps) {
  const frames = sprite.frames;
  const frameCount = frames.length;
  const rows = frames[0]?.length ?? 0;
  const cols = frames[0]?.[0]?.length ?? 0;
  const height = (size / cols) * rows;

  const windowStyle = {
    width: size,
    height,
    "--sprite-cycle": `${sprite.cycle}s`,
  } as CSSProperties;
  // The step count stays inline (it is fixed per sprite); the cycle length
  // travels as a custom property so a parent can speed the idle loop up.
  const stripStyle: CSSProperties = {
    animationTimingFunction: `steps(${frameCount})`,
  };

  return (
    <div className={`${styles.window} ${className ?? ""}`} style={windowStyle}>
      <svg
        className={`${styles.strip} pixel`}
        style={stripStyle}
        width={size * frameCount}
        height={height}
        viewBox={`0 0 ${cols * frameCount} ${rows}`}
        shapeRendering="crispEdges"
        aria-hidden="true"
        focusable="false"
      >
        {frames.flatMap((frame, f) =>
          frame.flatMap((row, y) =>
            [...row].map((key, x) => {
              const fill = sprite.palette[key];
              if (!fill) return null;
              return (
                <rect
                  key={`${f}-${x}-${y}`}
                  x={x + f * cols}
                  y={y}
                  width={1}
                  height={1}
                  fill={fill}
                />
              );
            }),
          ),
        )}
      </svg>
    </div>
  );
}
