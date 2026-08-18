;

const steps = [
  {
    num: "01",
    desc: "Conexión directa con su repositorio de planos y archivos BIM para entrenamiento contextual inmediato."
  },
  {
    num: "02",
    desc: "Despliegue de agentes en dispositivos móviles para captura de datos en tiempo real desde el frente de obra."
  },
  {
    num: "03",
    desc: "Análisis predictivo que anticipa retrasos logísticos antes de que afecten el presupuesto."
  }
];

const Integration = () => {
  return (
    <section id="integracion" className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl text-balance">
            Del plano al avance real, sin puntos ciegos.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 group">
                <span className="text-2xl font-mono font-light text-foreground/20 group-hover:text-white transition-colors">
                  {step.num}
                </span>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden flex items-center justify-center p-8">
            {/* Minimalist abstract representation of integration/diagram */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
            <div className="relative w-full max-w-sm aspect-square border border-white/10 rounded-full flex items-center justify-center">
              <div className="absolute w-full h-[1px] bg-white/10" />
              <div className="absolute h-full w-[1px] bg-white/10" />
              <div className="w-1/2 aspect-square border border-white/20 rounded-full flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
              </div>
              <div className="absolute top-0 right-1/4 w-3 h-3 bg-white/40 rounded-full" />
              <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-white/30 rounded-full" />
              <div className="absolute bottom-0 right-1/4 w-4 h-4 border border-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
