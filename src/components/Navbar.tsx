import { ArrowRight, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-md flex items-center justify-center">
              <span className="text-white font-serif italic text-xl leading-none">m</span>
            </div>
            <span className="font-semibold text-xl tracking-tight text-text-main">mnnsor</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Plataforma</a>
            <a href="#agentes" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Agentes</a>
            <a href="#" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Soluciones</a>
            <a href="#" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Compañía</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-text-main hover:text-text-muted transition-colors">Iniciar sesión</a>
            <button className="bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-green-hover transition-colors flex items-center gap-2">
              Agendar demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-text-main">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
