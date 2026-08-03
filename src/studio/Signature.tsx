import { useEffect, useId, useState } from "react";
import {
  PEN_WIDTH,
  SIGNATURE_GLYPH,
  SIGNATURE_ROUTE,
  SIGNATURE_VIEWBOX,
} from "./signature-path";
import styles from "./Signature.module.css";

/** Once per tab. A route change back to home must not re-sign the page. */
const SESSION_KEY = "signature-written";

/**
 * The site's one authored moment: the name writes itself.
 *
 * A pen travels SIGNATURE_ROUTE, the path a hand actually takes through the
 * letters, and the ink it lays down is clipped to the letterforms. So the
 * strokes arrive in writing order, including the vertical excursions into the
 * D's stem and the ascenders, and the lift between the two words. Progress is
 * stroke-dashoffset along that route, which is why this reads as writing
 * rather than as a reveal: the earlier version slid a soft-edged mask across
 * the word left to right, and a soft edge moving in one direction is a fade.
 *
 * The hand stays afterwards. This is a signature, not an intro effect that
 * hands back to the interface font.
 *
 * Three states, and the name is complete in all of them:
 *   idle     — nothing drawn yet, held for one frame
 *   writing  — the pen travels
 *   written  — the plain filled outline, no clip, no stroke, nothing animating
 */
type Phase = "idle" | "writing" | "written";

function alreadyWritten(): boolean {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Signature({ children }: { readonly children: string }) {
  const clipId = `sig-${useId().replace(/:/g, "")}`;
  const [phase, setPhase] = useState<Phase>(() =>
    typeof window === "undefined" || alreadyWritten() || prefersReducedMotion()
      ? "written"
      : "idle",
  );

  useEffect(() => {
    if (phase !== "idle") return;
    // One frame of idle, so the browser has the un-drawn state to animate
    // from. No font to wait for: the name is geometry, not type.
    const frame = requestAnimationFrame(() => {
      setPhase("writing");
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Storage refused: the name simply signs itself again next route.
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  return (
    <h1 className={styles.signature}>
      {/* The accessible name. The drawing is decorative by definition. */}
      <span className="visually-hidden">{children}</span>

      <svg
        className={styles.canvas}
        viewBox={SIGNATURE_VIEWBOX}
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        {phase === "written" ? (
          <path d={SIGNATURE_GLYPH} fill="currentColor" />
        ) : (
          <>
            <defs>
              <clipPath id={clipId}>
                <path d={SIGNATURE_GLYPH} />
              </clipPath>
            </defs>
            <g clipPath={`url(#${clipId})`}>
              <path
                className={`${styles.pen} ${phase === "writing" ? styles.writing : ""}`}
                d={SIGNATURE_ROUTE}
                fill="none"
                stroke="currentColor"
                strokeWidth={PEN_WIDTH}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                onAnimationEnd={() => setPhase("written")}
              />
            </g>
          </>
        )}
      </svg>
    </h1>
  );
}
