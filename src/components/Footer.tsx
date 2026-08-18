;
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <section id="demo" className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-balance">
            ¿Listo para digitalizar el ADN de su próxima obra?
          </h2>
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
          >
            Solicitar Demostración Personalizada
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <img src="/1.png" alt="mnnsor mark" className="w-6 h-6" />
            <img src="/2.png" alt="mnnsor logo" className="h-3.5" />
          </div>

          <div className="flex gap-8 text-xs font-mono text-foreground/40 uppercase tracking-widest">
            <a href="#agentes" className="hover:text-white transition-colors">Agentes</a>
            <a href="#integracion" className="hover:text-white transition-colors">Integración</a>
            <a href="#demo" className="hover:text-white transition-colors">Contacto</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>

          <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
            mnnsor technologies © 2026 / inteligencia de campo
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
