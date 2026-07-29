import { useEffect, useState } from "react";
import { useReveal } from "../lib/useReveal";

interface CountUpProps {
  readonly value: number;
  readonly className?: string | undefined;
}

/**
 * Counts from zero to the value once the element is in view — the tally that
 * rolls up on a results screen. Honest about the destination: the final number
 * is rendered immediately under reduced motion, and it is always the real one.
 */
export function CountUp({ value, className }: CountUpProps) {
  const { ref, revealed } = useReveal<HTMLSpanElement>();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!revealed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(value);
      return;
    }

    const duration = 700;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // Ease-out so the tally decelerates into its final value.
      setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [revealed, value]);

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
