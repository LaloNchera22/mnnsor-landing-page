import { MousePointer2, Zap, Shield, Search } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <MousePointer2 className="w-6 h-6 text-brand-green" />,
      title: "Integración sin Fricción",
      description: "El sistema puede leer planos, catálogos de conceptos y programas de obra existentes sin necesidad de cambiar tus herramientas actuales."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-green" />,
      title: "Despliegue Instantáneo",
      description: "Sin implementaciones IT de meses. Sube tu información y los agentes aprenden la estructura de tu proyecto en horas."
    },
    {
      icon: <Search className="w-6 h-6 text-brand-green" />,
      title: "Extracción Inteligente",
      description: "Analiza datos no estructurados de bitácoras, estimaciones en PDF y correos con contratistas con fiabilidad humana."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-green" />,
      title: "Grado Empresarial",
      description: "Infraestructura robusta con flujos de aprobación donde un humano siempre tiene la última palabra en decisiones financieras o de ruta crítica."
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">
            La plataforma construida para la <span className="italic text-brand-green">realidad en obra</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            La construcción no corre sobre APIs modernas. Funciona con planos as-built en PDF, mensajes y estimaciones en Excel. Nuestro sistema está diseñado para dominarlos todos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-main mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
