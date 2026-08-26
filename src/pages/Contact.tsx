import { Mail, ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { SALES_EMAIL, LEAD_FORM_URL } from '../lib/contact';
import { trackCTA } from '../lib/analytics';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]}
        title={
          <>
            Hablemos de tu obra,
            <span className="text-muted"> centrándonos en tus operaciones.</span>
          </>
        }
        description={
          <>
            Completa el formulario a continuación para que podamos entender tu caso de uso.
            Si prefieres, también puedes{' '}
            <a href={`mailto:${SALES_EMAIL}`} className="font-medium text-ink underline underline-offset-4">
              enviarnos un correo directo
            </a>.
          </>
        }
      />

      <section className="bg-paper pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">

          <form
            action={LEAD_FORM_URL}
            method="POST"
            className="flex flex-col gap-6 rounded-none"
            data-reveal
            onSubmit={() => trackCTA('Enviar solicitud (Form)', 'Contact Page')}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-sm font-semibold text-ink">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  className="rounded-none bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-ink">
                  Correo corporativo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="rounded-none bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                  placeholder="juan@empresa.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="empresa" className="text-sm font-semibold text-ink">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  id="empresa"
                  required
                  className="rounded-none bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                  placeholder="Constructora XYZ"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cargo" className="text-sm font-semibold text-ink">
                  Cargo
                </label>
                <input
                  type="text"
                  name="cargo"
                  id="cargo"
                  required
                  className="rounded-none bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                  placeholder="Director de Proyectos"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="telefono" className="text-sm font-semibold text-ink">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  className="rounded-none bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                  placeholder="+52 55 1234 5678"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tipo_proyecto" className="text-sm font-semibold text-ink">
                  Tipo de proyecto
                </label>
                <select
                  name="tipo_proyecto"
                  id="tipo_proyecto"
                  required
                  defaultValue=""
                  className="rounded-none bg-transparent py-3 text-sm text-ink focus:outline-none"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="edificacion">Edificación</option>
                  <option value="industrial">Industrial</option>
                  <option value="infraestructura">Infraestructura</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="herramientas" className="text-sm font-semibold text-ink">
                Herramientas actuales
              </label>
              <input
                type="text"
                name="herramientas"
                id="herramientas"
                className="rounded-none bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                placeholder="P6, MS Project, Revit, Procore, Excel…"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-none bg-ink px-6 py-4 text-base font-medium text-paper"
            >
              Enviar solicitud
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>

          <div
            data-reveal
            className="mt-5 flex flex-col items-center justify-between gap-4 rounded-none px-0 py-6 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-ink" />
              <div>
                <p className="text-sm font-semibold text-ink">Correo directo (Ventas)</p>
                <p className="text-sm text-muted">Escríbenos cuando lo prefieras.</p>
              </div>
            </div>
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="font-mono text-sm font-medium text-ink underline underline-offset-4"
            >
              {SALES_EMAIL}
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
