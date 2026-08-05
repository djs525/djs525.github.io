import { useEffect, useRef } from "react";

/**
 * A pill leans toward the pointer while the pointer is over it — two pixels at
 * the very edge, nothing at the centre, back to rest on the way out.
 *
 * It is written on the independent `translate` property rather than on
 * `transform`, so it composes with the 1px hover lift each button already
 * carries in CSS instead of fighting it for the same declaration.
 *
 * Two pixels is the whole budget on purpose. The lean is toward the pointer,
 * never away from it, so the target only ever becomes easier to hit.
 */

/** Displacement at the edge of the box. The centre stays put. */
const MAX_PX = 2;

export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A finger has no hover, and a visitor who asked for less motion is not
    // asking for a button that follows them.
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let box: DOMRect | null = null;
    let x = 0;
    let y = 0;
    let frame = 0;

    const apply = () => {
      frame = 0;
      el.style.translate = x === 0 && y === 0 ? "" : `${x}px ${y}px`;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    // Measured on the way in and while scrolling, never per pointer move: a
    // rect read straight after the last frame's write forces a layout flush.
    const measure = () => {
      box = el.getBoundingClientRect();
    };

    // A cached rect only exists while the pointer is inside, so a scroll with
    // the pointer anywhere else costs nothing.
    const onScroll = () => {
      if (box) measure();
    };

    const onMove = (event: PointerEvent) => {
      if (!box) measure();
      if (!box) return;
      x =
        ((event.clientX - (box.left + box.width / 2)) / (box.width / 2)) *
        MAX_PX;
      y =
        ((event.clientY - (box.top + box.height / 2)) / (box.height / 2)) *
        MAX_PX;
      schedule();
    };

    const release = () => {
      box = null;
      x = 0;
      y = 0;
      schedule();
    };

    el.addEventListener("pointerenter", measure, { passive: true });
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", release, { passive: true });
    // The page can move under a resting pointer; a cached rect cannot know it.
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("pointerenter", measure);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", release);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      el.style.translate = "";
    };
  }, []);

  return ref;
}
