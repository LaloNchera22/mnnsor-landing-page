import { FileText, Clock, AlertCircle } from 'lucide-react';

export default function ProblemCards() {
  const problems = [
    {
      icon: <FileText className="w-5 h-5 text-brand-green" />,
      title: "Descoordinación en Campo",
      description: "Los ingenieros pasan horas extrayendo y sincronizando datos manualmente desde reportes fragmentados."
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-green" />,
      title: "Retrasos en la Ruta Crítica",
      description: "El procesamiento manual genera demoras en la toma de decisiones, afectando tiempos de entrega y presupuestos."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-brand-green" />,
      title: "Errores Costosos",
      description: "La captura de datos humanos inevitablemente conduce a errores que impactan estimaciones, calidad y márgenes."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-text-main mb-4">
            El cuello de botella de la <span className="italic text-brand-green">construcción</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Los sistemas actuales están fragmentados. Residentes y contratistas se ven forzados a actuar como puentes humanos entre software desactualizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-brand-gray/50 border border-brand-border rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white border border-brand-border rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-main mb-3">{problem.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
