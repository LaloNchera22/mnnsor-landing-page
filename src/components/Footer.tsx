import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const columns = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Agentes', href: '#agentes' },
      { label: 'Seguridad', href: '#seguridad' },
      { label: 'Resultados', href: '#resultados' },
      { label: 'Integraciones', href: '#plataforma' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Carreras', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
];

const socials = [
  { id: 'x-icon', label: 'X', href: '#' },
  { id: 'github-icon', label: 'GitHub', href: '#' },
  { id: 'discord-icon', label: 'Discord', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-14 md:grid-cols-4">
          <div className="col-span-2">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              La plataforma de agentes de IA construida específicamente para los
              flujos de trabajo de la industria de la construcción.
            </p>
            <a
              href="#contacto"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-paper"
            >
              Agendar una demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 label-mono text-white/40">{col.title}</h2>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/65 transition-colors hover:text-paper"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} mnnsor. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-paper">
              Privacidad
            </a>
            <a href="#" className="text-sm text-white/45 transition-colors hover:text-paper">
              Términos
            </a>
            <span className="h-4 w-px bg-white/15" />
            {socials.map(({ id, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="opacity-55 transition-opacity duration-300 hover:opacity-100"
              >
                <svg
                  className="h-[18px] w-[18px] [filter:invert(1)]"
                  aria-hidden="true"
                >
                  <use href={`/icons.svg#${id}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
