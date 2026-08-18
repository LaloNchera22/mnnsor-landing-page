;

const stats = [
  {
    label: "Eficiencia",
    value: "+28%",
    desc: "En reporte de bitácora"
  },
  {
    label: "Precisión",
    value: "99.4%",
    desc: "En cubicación automática"
  },
  {
    label: "Ahorro",
    value: "12h",
    desc: "Semanales por residente"
  },
  {
    label: "Seguridad",
    value: "0",
    desc: "Incidentes críticos reportados"
  }
];

const Results = () => {
  return (
    <section id="resultados" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-3xl font-medium leading-relaxed text-foreground/90 italic">
            "La integración de mnnsor redujo nuestras desviaciones presupuestarias en un 14% durante el primer semestre."
          </blockquote>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-foreground/40 font-mono">
                {stat.label}
              </span>
              <span className="text-4xl md:text-6xl font-medium tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm text-foreground/60 max-w-[150px]">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
