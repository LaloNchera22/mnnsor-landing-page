import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemCards from './components/ProblemCards';
import Features from './components/Features';
import ImpactMetrics from './components/ImpactMetrics';
import AgentsSection from './components/AgentsSection';
import Security from './components/Security';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-text-main selection:bg-brand-green/20">
      <Navbar />
      <main>
        <Hero />
        <ProblemCards />
        <Features />
        <ImpactMetrics />
        <AgentsSection />
        <Security />
      </main>
      <Footer />
    </div>
  );
}

export default App;
