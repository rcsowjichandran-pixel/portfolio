import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll helper.
 *
 * Attaches an IntersectionObserver to the returned ref and flips `isVisible`
 * to true the first time the element enters the viewport. Pair it with the
 * `.reveal` / `.reveal-in` utility classes defined in index.css.
 *
 * `once: false` keeps re-observing so dynamically filtered lists animate again.
 */
export default function useReveal({ threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}