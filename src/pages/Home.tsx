import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProblemCards from '../components/ProblemCards';
import Features from '../components/Features';
import ImpactMetrics from '../components/ImpactMetrics';
import SocialProof from '../components/SocialProof';
import AgentsSection from '../components/AgentsSection';
import Security from '../components/Security';
import Objections from '../components/Objections';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemCards />
      <Features />
      <ImpactMetrics />
      {/* Prueba social: se activa por modo cuando haya datos reales en src/data/socialProof.ts */}
      <SocialProof />
      <AgentsSection />
      <Security />
      <Objections />
      <CTA />
    </>
  );
}
