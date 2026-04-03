import { useEffect, useRef } from 'react';

/**
 * Hook que aplica animaciones de entrada al hacer scroll.
 * Usa Intersection Observer para detectar cuando los elementos entran en viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold - Porcentaje de visibilidad para activar (0-1)
 * @param {string} options.rootMargin - Margen del root observer
 * @returns {React.RefObject} ref para adjuntar al contenedor
 */
export function useScrollAnimation({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll('.scroll-hidden');
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
