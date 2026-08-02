import type { ElementType, ReactNode } from "react";
import { useReveal } from "../lib/useReveal";
import styles from "./Reveal.module.css";

interface RevealProps {
  readonly children: ReactNode;
  /** Milliseconds of stagger against its siblings. */
  readonly delay?: number | undefined;
  readonly as?: ElementType | undefined;
  readonly className?: string | undefined;
}

/**
 * The studio world's one authored motion: content rises 12px and fades in as
 * it enters view, once, then stays. Content is fully visible by default — the
 * transition runs from the revealed class, not toward it — so a failed
 * observer or reduced motion leaves a complete page rather than a blank one.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const { ref, revealed } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${revealed ? styles.revealed : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
