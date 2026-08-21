import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProblemCards from '../components/ProblemCards';
import Features from '../components/Features';
import ImpactMetrics from '../components/ImpactMetrics';
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
      <AgentsSection />
      <Security />
      <Objections />
      <CTA />
    </>
  );
}
