import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { AGENTS } from '../data/agents';
import { CONTACT } from '../lib/contact';

const links = [
  { label: 'Plataforma', to: '/plataforma' },
  { label: 'Agentes', to: '/agentes', hasMenu: true },
  { label: 'Seguridad', to: '/seguridad' },
  { label: 'Resultados', to: '/resultados' },
  { label: 'Contacto', to: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTimer = useRef<number | undefined>(undefined);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Cierra menús al cambiar de ruta.
  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = () => {
    window.clearTimeout(menuTimer.current);
    setMenuOpen(true);
  };
  const closeMenu = () => {
    menuTimer.current = window.setTimeout(() => setMenuOpen(false), 120);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Principal"
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-line bg-paper/90 backdrop-blur-xl text-ink'
            : 'bg-transparent text-paper'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link to="/" aria-label="mnnsor — inicio" className="shrink-0">
            <Logo tone={scrolled ? 'dark' : 'light'} />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) =>
              l.hasMenu ? (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `group inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                        isActive
                          ? (scrolled ? 'text-ink' : 'text-paper')
                          : (scrolled ? 'text-muted hover:text-ink' : 'text-paper/70 hover:text-paper')
                      }`
                    }
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        menuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </NavLink>

                  {/* Mega-menú de agentes */}
                  <div
                    className={`absolute left-1/2 top-full z-50 w-[min(92vw,30rem)] -translate-x-1/2 pt-4 transition-all duration-200 ${
                      menuOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-1 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden rounded-none border border-line bg-paper shadow-[0_30px_70px_-40px_rgba(0,0,0,0.4)]">
                      <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
                        {AGENTS.map((a) => {
                          const Icon = a.icon;
                          return (
                            <Link
                              key={a.slug}
                              to={`/agentes/${a.slug}`}
                              className="group flex items-start gap-3 bg-paper p-4 transition-colors hover:bg-panel"
                            >
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-ink text-paper">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-ink">{a.name}</span>
                                <span className="mt-0.5 block text-xs leading-snug text-muted">
                                  {a.discipline}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        to="/agentes"
                        className="flex items-center justify-between bg-panel px-4 py-3 text-xs font-medium text-ink"
                      >
                        Ver todos los agentes y su alcance
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `group relative text-sm font-medium transition-colors ${
                      isActive
                        ? (scrolled ? 'text-ink' : 'text-paper')
                        : (scrolled ? 'text-muted hover:text-ink' : 'text-paper/70 hover:text-paper')
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ),
            )}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="https://app.mnnsor.io"
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-muted hover:text-ink' : 'text-paper/80 hover:text-paper'
              }`}
            >
              Iniciar sesión
            </a>
            <a
              href={CONTACT.demo}
              className={`group inline-flex items-center gap-1.5 rounded-none px-4 py-2 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
                scrolled ? 'bg-ink text-paper' : 'bg-paper text-ink'
              }`}
            >
              Agendar demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className={`md:hidden ${scrolled ? 'text-ink' : 'text-paper'}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile sheet */}
        <div
          className={`overflow-hidden border-t bg-paper/95 backdrop-blur-2xl backdrop-saturate-150 transition-[max-height] duration-500 md:hidden ${
            scrolled ? 'border-line' : 'border-paper/20'
          } ${
            open ? 'max-h-[36rem]' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-none px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-panel text-ink'
                      : 'text-muted hover:bg-panel hover:text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={CONTACT.demo}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-none bg-ink px-4 py-3 text-sm font-medium text-paper"
            >
              Agendar demo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
