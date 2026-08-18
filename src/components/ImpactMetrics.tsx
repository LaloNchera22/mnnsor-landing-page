export default function ImpactMetrics() {
  return (
    <section className="py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Transforma la economía de tus <span className="italic text-brand-green-hover opacity-80">proyectos</span>
            </h2>
            <p className="text-brand-gray/80 text-lg mb-8 leading-relaxed max-w-lg">
              Nuestros agentes de IA no solo complementan a tu equipo; transforman tu capacidad operativa de manera fundamental, permitiéndote escalar proyectos sin tener que incrementar la plantilla de supervisión linealmente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border-l-2 border-brand-green-hover pl-6 py-2">
              <div className="text-5xl font-serif mb-2">10x</div>
              <div className="text-sm text-brand-gray/80 font-medium">Mayor velocidad en planeación</div>
            </div>
            <div className="border-l-2 border-brand-green-hover pl-6 py-2">
              <div className="text-5xl font-serif mb-2">85%</div>
              <div className="text-sm text-brand-gray/80 font-medium">Reducción en entrada manual de datos</div>
            </div>
            <div className="border-l-2 border-brand-green-hover pl-6 py-2">
              <div className="text-5xl font-serif mb-2">100%</div>
              <div className="text-sm text-brand-gray/80 font-medium">Control de estimaciones y avance</div>
            </div>
            <div className="border-l-2 border-brand-green-hover pl-6 py-2">
              <div className="text-5xl font-serif mb-2">24/7</div>
              <div className="text-sm text-brand-gray/80 font-medium">Monitoreo continuo de obra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
