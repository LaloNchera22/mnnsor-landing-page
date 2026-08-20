import { useEffect, useRef, useState } from 'react';

/**
 * Counts from 0 to `end` once the element enters the viewport, easing out so
 * the number decelerates into its final value instead of ticking linearly.
 * Honors prefers-reduced-motion by snapping straight to the target.
 */
export function useCountUp(end: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduced) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done.current) return;
        done.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * end));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, value };
}
