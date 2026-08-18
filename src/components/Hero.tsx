import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gray border border-brand-border text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-green"></span>
          <span className="font-medium">Presentamos el Sistema Autónomo de Obra</span>
          <ArrowRight className="w-4 h-4 text-text-muted" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-main mb-6 tracking-tight max-w-4xl mx-auto leading-[1.1]">
          La inteligencia que construye <span className="italic text-brand-green">el mañana</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Automatiza y optimiza flujos de trabajo en construcción usando agentes de IA que coordinan, planifican y analizan obras como lo haría un ingeniero humano.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-brand-green text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-brand-green-hover transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            Agendar demo <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white text-text-main border border-brand-border px-6 py-3 rounded-xl text-base font-medium hover:bg-brand-gray transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm">
            <Play className="w-4 h-4" /> Ver recorrido de la plataforma
          </button>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl -z-10"></div>

      {/* Dashboard Mockup */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative">
        <div className="rounded-2xl border border-brand-border bg-white shadow-2xl overflow-hidden relative">
          {/* Mac-like header */}
          <div className="h-12 border-b border-brand-border bg-brand-gray/50 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <div className="mx-auto bg-white border border-brand-border rounded-md px-32 py-1 text-xs text-text-muted flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-brand-green/20 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-sm bg-brand-green"></span></span>
              mnnsor-artisan.app
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-12 h-[500px]">
            {/* Sidebar */}
            <div className="col-span-3 border-r border-brand-border bg-brand-gray/30 p-4">
              <div className="space-y-4">
                <div className="h-8 bg-brand-border/50 rounded-md w-3/4"></div>
                <div className="h-4 bg-brand-border/30 rounded-md w-full"></div>
                <div className="h-4 bg-brand-border/30 rounded-md w-5/6"></div>
                <div className="h-4 bg-brand-border/30 rounded-md w-full"></div>
                <div className="h-4 bg-brand-border/30 rounded-md w-4/5"></div>
              </div>
            </div>
            {/* Main Area */}
            <div className="col-span-9 p-8 bg-white">
              <div className="flex justify-between items-center mb-8">
                <div className="h-8 bg-brand-border/50 rounded-md w-1/4"></div>
                <div className="h-8 bg-brand-green/10 rounded-md w-32"></div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="h-24 bg-brand-border/20 rounded-xl border border-brand-border flex items-center px-4"><span className="text-sm font-medium text-text-muted">Avance de Obra</span></div>
                <div className="h-24 bg-brand-border/20 rounded-xl border border-brand-border flex items-center px-4"><span className="text-sm font-medium text-text-muted">Presupuesto</span></div>
                <div className="h-24 bg-brand-border/20 rounded-xl border border-brand-border flex items-center px-4"><span className="text-sm font-medium text-text-muted">Riesgos Críticos</span></div>
              </div>
              <div className="h-64 bg-brand-border/10 rounded-xl border border-brand-border flex items-center justify-center"><span className="text-sm text-text-muted">Gantt Chart & Ruta Crítica</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
