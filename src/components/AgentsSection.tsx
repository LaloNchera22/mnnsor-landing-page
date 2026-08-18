import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function AgentsSection() {
  return (
    <section className="py-24 bg-white border-t border-brand-border" id="agentes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6 max-w-2xl">
            Conoce a tu nueva <span className="italic text-brand-green">fuerza de trabajo digital</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl">
            Agentes de IA pre-entrenados listos para desplegarse desde el primer día, especializados en los aspectos más tediosos y críticos del ciclo de vida de la construcción.
          </p>
        </div>

        <div className="space-y-12">
          {/* Agent 1 - Cronos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-brand-gray/30 rounded-3xl p-8 lg:p-12 border border-brand-border">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="font-medium">Planificación</span>
              </div>
              <h3 className="text-3xl font-serif text-text-main mb-4">Agente Cronos</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Sincronización automática de diagramas Gantt y detección proactiva de cuellos de botella en la ruta crítica, comparando el plan contra la realidad en sitio.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-main">Analiza programas de obra complejos en segundos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-main">Ajuste dinámico frente a desviaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-main">Alerta de riesgos en la ruta crítica</span>
                </li>
              </ul>

              <button className="text-brand-green font-medium flex items-center gap-2 hover:text-brand-green-hover transition-colors">
                Ver capacidades de Cronos <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border shadow-sm p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-brand-border pb-4">
                  <div className="font-medium text-sm">Estado de Cronograma</div>
                  <div className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md font-medium">Re-calculando</div>
                </div>

                {['Cimentación', 'Estructura Metálica', 'Instalaciones'].map((fase, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-brand-gray/50 rounded-lg border border-brand-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-md border border-brand-border flex items-center justify-center text-xs font-bold text-text-muted">
                        {fase.substring(0, 3).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium">{fase}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-yellow-500 animate-pulse' : 'bg-brand-border'}`}></div>
                      <span className="text-xs text-text-muted">
                        {i === 0 ? 'Completado' : i === 1 ? 'Retraso de 3 días detectado' : 'Pendiente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent 2 - Cubic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-brand-gray/30 rounded-3xl p-8 lg:p-12 border border-brand-border">
            <div className="order-2 lg:order-1 bg-white rounded-2xl border border-brand-border shadow-sm p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-brand-border pb-4">
                  <div className="font-medium text-sm">Análisis de Materiales</div>
                  <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-medium">Actualizado</div>
                </div>

                <div className="space-y-3">
                  <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold text-red-700 uppercase tracking-wider">Alerta de Desviación</span>
                      <span className="text-xs text-red-500">Acero de Refuerzo</span>
                    </div>
                    <p className="text-sm text-red-900">Cantidades BIM: 120 Ton. Estimado real en avance: 128 Ton.</p>
                  </div>

                  <div className="p-3 border border-green-200 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Validado</span>
                      <span className="text-xs text-green-500">Concreto Premezclado</span>
                    </div>
                    <p className="text-sm text-green-900">Volumen extraído del modelo coincide con órdenes de compra.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="font-medium">Materiales</span>
              </div>
              <h3 className="text-3xl font-serif text-text-main mb-4">Agente Cubic</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Extracción precisa de cantidades desde archivos BIM y gestión automatizada de órdenes de compra, controlando el presupuesto contra el catálogo de conceptos.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-main">Extracción automatizada de modelos BIM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-main">Conciliación de estimaciones vs reales</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-text-main">Prevención de sobrecostos por desperdicios</span>
                </li>
              </ul>

              <button className="text-brand-green font-medium flex items-center gap-2 hover:text-brand-green-hover transition-colors">
                Descubrir Cubic <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
