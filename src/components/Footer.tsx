import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { AGENTS } from '../data/agents';
import { CONTACT, SALES_EMAIL } from '../lib/contact';
import { useConversion } from './conversion/context';
import { trackCTA } from '../lib/analytics';

const SECTION = 'footer';

const platform = {
  title: 'Plataforma',
  links: [
    { label: 'Visión general', to: '/plataforma' },
    { label: 'Agentes', to: '/agentes' },
    { label: 'Seguridad', to: '/seguridad' },
    { label: 'Resultados', to: '/resultados' },
  ],
};

const agentsCol = {
  title: 'Agentes',
  links: AGENTS.map((a) => ({ label: a.name, to: `/agentes/${a.slug}` })),
};

interface FooterLink {
  label: string;
  to?: string;
  href?: string;
  action?: 'demo';
}

const company: { title: string; links: FooterLink[] } = {
  title: 'Compañía',
  links: [
    { label: 'Contacto', to: '/contacto' },
    { label: 'Agendar demo', action: 'demo' },
    { label: 'Soporte', href: CONTACT.support.mailtoFallback },
    { label: 'Seguridad', to: '/seguridad' },
  ],
};

const socials = [
  { id: 'x-icon', label: 'X', href: '#' },
  { id: 'github-icon', label: 'GitHub', href: '#' },
  { id: 'discord-icon', label: 'Discord', href: '#' },
];

const linkCls = 'text-sm text-white/65 transition-colors hover:text-paper';

export default function Footer() {
  const { openScheduler } = useConversion();

  const openDemo = () => {
    trackCTA(CONTACT.demo.event, SECTION);
    openScheduler(CONTACT.demo, SECTION);
  };

  return (
    <footer className="bg-ink pt-20 pb-10 text-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-14 md:grid-cols-5">
          <div className="col-span-2">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              La plataforma de agentes de IA construida específicamente para los
              flujos de trabajo de la industria de la construcción.
            </p>
            <button
              type="button"
              onClick={openDemo}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-paper"
            >
              Agendar una demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="mt-4 block font-mono text-xs text-white/45 transition-colors hover:text-paper"
            >
              {SALES_EMAIL}
            </a>
          </div>

          {[platform, agentsCol, company].map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 label-mono text-white/40">{col.title}</h2>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {'to' in l && l.to ? (
                      <Link to={l.to} className={linkCls}>
                        {l.label}
                      </Link>
                    ) : 'action' in l && l.action === 'demo' ? (
                      <button type="button" onClick={openDemo} className={linkCls}>
                        {l.label}
                      </button>
                    ) : (
                      <a href={(l as { href: string }).href} className={linkCls}>
                        {l.label}
                      </a>
                    )}
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
                <svg className="h-[18px] w-[18px] [filter:invert(1)]" aria-hidden="true">
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
