;
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/1.png" alt="mnnsor mark" className="w-8 h-8 opacity-80" />
          <img src="/2.png" alt="mnnsor logo" className="h-4 opacity-80 hidden sm:block" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/70 font-medium">
          <a href="#agentes" className="hover:text-white transition-colors">Agentes</a>
          <a href="#integracion" className="hover:text-white transition-colors">Integración</a>
          <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#demo"
            className="hidden sm:inline-flex items-center justify-center bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Acceso
          </a>
          <button className="md:hidden text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
