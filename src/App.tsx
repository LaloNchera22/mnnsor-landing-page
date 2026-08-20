import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemCards from './components/ProblemCards';
import Features from './components/Features';
import ImpactMetrics from './components/ImpactMetrics';
import AgentsSection from './components/AgentsSection';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="grain relative min-h-screen bg-paper-warm font-sans text-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <TrustBar />
        <ProblemCards />
        <Features />
        <ImpactMetrics />
        <AgentsSection />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
