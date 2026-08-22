import { Lock, KeyRound, EyeOff, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Prácticas alineadas a SOC 2',
    description: 'Infraestructura y controles operativos diseñados según los criterios de SOC 2, en preparación para auditoría formal.',
  },
  {
    icon: KeyRound,
    title: 'Cifrado extremo a extremo',
    description: 'AES-256 en reposo y TLS 1.3 en tránsito para cada plano, estimación y bitácora.',
  },
  {
    icon: EyeOff,
    title: 'Cero retención en modelos',
    description: 'Los LLM no se entrenan con tus datos. La información sensible se anonimiza de forma automática.',
  },
];

export default function Security() {
  return (
    <section id="seguridad" className="border-t border-line bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Seguridad
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Tus proyectos son tu activo.
              <span className="text-muted"> Los tratamos como tal.</span>
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="mt-6 max-w-md leading-relaxed text-muted"
            >
              mnnsor se construyó desde los cimientos con protocolos estrictos de
              seguridad, para que tus datos, presupuestos y planos permanezcan
              bajo tu control en todo momento.
            </p>
            <div
              data-reveal
              style={{ transitionDelay: '240ms' }}
              className="mt-8 inline-flex items-center gap-3 rounded-none border border-line bg-paper px-4 py-2.5"
            >
              <Lock className="h-4 w-4 text-ink" />
              <span className="text-sm font-medium text-ink">Datos alojados en tu región, bajo tus políticas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pillars.map((p, idx) => {
              return (
                <div
                  key={p.title}
                  data-reveal
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className="group border border-line bg-paper p-7 transition-colors duration-500 hover:bg-paper"
                >
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-ink">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
