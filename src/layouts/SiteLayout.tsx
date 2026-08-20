import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useReveal } from '../hooks/useReveal';

/**
 * Chrome compartido: navbar fija, contenido de la ruta y footer. El reveal
 * on-scroll se re-ejecuta en cada cambio de página para animar el contenido
 * recién montado.
 */
export default function SiteLayout() {
  const { pathname } = useLocation();
  useReveal([pathname]);

  return (
    <div className="grain relative min-h-screen bg-paper font-sans text-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-none focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Saltar al contenido
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
