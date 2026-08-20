import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Al navegar entre páginas, lleva la vista al inicio. Si la URL trae un
 * hash (#seccion), respeta el desplazamiento hacia ese ancla.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
