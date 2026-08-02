import { useEffect, useState } from "react";
import styles from "./Signature.module.css";

/** Once per tab. A route change back to home must not re-sign the page. */
const SESSION_KEY = "signature-written";

/**
 * The site's one authored moment: the name inks itself in, left to right, at
 * the pace of a hand rather than a machine — the keyframes carry an uneven
 * rhythm and a beat where the pen lifts between the two words.
 *
 * The hand stays afterwards. This is a signature, not an intro effect that
 * hands back to the interface font.
 *
 * Three states, and the page is complete in all of them:
 *   waiting  — inked but masked, held only while the face loads
 *   writing  — the mask sweeps
 *   written  — the mask is removed entirely, so nothing composites afterwards
 */
type Phase = "waiting" | "writing" | "written";

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
  const [phase, setPhase] = useState<Phase>(() =>
    typeof window === "undefined" || alreadyWritten() || prefersReducedMotion()
      ? "written"
      : "waiting",
  );

  useEffect(() => {
    if (phase !== "waiting") return;

    let live = true;

    // Writing in the fallback face and then swapping to the real one would
    // reflow mid-stroke. Wait for the face — but never on it: a font service
    // that hangs must not leave the name masked out.
    const ready = document.fonts?.ready ?? Promise.resolve();
    const timeout = new Promise((resolve) => window.setTimeout(resolve, 600));

    void Promise.race([ready, timeout]).then(() => {
      if (!live) return;
      setPhase("writing");
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Storage refused: the name simply signs itself again next route.
      }
    });

    return () => {
      live = false;
    };
  }, [phase]);

  return (
    <h1
      className={`${styles.signature} ${styles[phase]}`}
      onAnimationEnd={() => setPhase("written")}
    >
      {children}
    </h1>
  );
}
