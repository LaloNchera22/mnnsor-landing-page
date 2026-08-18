;
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-foreground/60 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Ref. 2026 / Sistema Autónomo de Obra
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-balance">
          La inteligencia que<br />
          <span className="text-white/60">construye el mañana.</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-foreground/60 mb-12 text-balance leading-relaxed">
          Desplegamos unidades de software especializadas en la gestión técnica, logística y documental para obras de alta complejidad. Sin fricción, sin errores de cálculo.
        </p>

        <a
          href="#demo"
          className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
        >
          Solicitar Demostración
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
