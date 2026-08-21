import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail } from 'lucide-react';
import { LEAD_ENDPOINT, SALES_EMAIL, type CTAIntent } from '../../lib/contact';
import { ctaClasses } from '../buttonStyles';

interface LeadFormProps {
  intent: CTAIntent;
  section: string;
  onDone: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const PROJECT_TYPES = [
  'Edificación',
  'Industrial',
  'Infraestructura',
  'Vivienda / vertical',
  'Otro',
];

const field =
  'w-full rounded-none border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted-soft focus:border-line-strong focus:outline-none';
const labelCls = 'mb-1.5 block text-xs font-medium text-muted';

/**
 * Formulario de lead real. Mantiene los mismos campos que antes iban
 * hardcodeados en los cuerpos de correo: nombre, empresa, cargo, email,
 * teléfono, herramientas actuales y tipo de proyecto.
 *
 * Postea a `LEAD_ENDPOINT` (Formspree / endpoint propio / CRM). Si el
 * endpoint no está configurado o el POST falla, cae con elegancia a un
 * `mailto:` al buzón comercial para no perder el contacto.
 */
export default function LeadForm({ intent, section, onDone }: LeadFormProps) {
  const [status, setStatus] = useState<Status>('idle');

  function buildMailtoFrom(data: Record<string, string>): string {
    const lines = [
      'Hola equipo de mnnsor:',
      '',
      `Solicitud: ${intent.requestType}`,
      '',
      `• Nombre: ${data.nombre}`,
      `• Empresa: ${data.empresa}`,
      `• Cargo: ${data.cargo}`,
      `• Email: ${data.email}`,
      `• Teléfono: ${data.telefono}`,
      `• Herramientas actuales: ${data.herramientas}`,
      `• Tipo de proyecto: ${data.tipoProyecto}`,
    ];
    if (data.mensaje) lines.push('', `Mensaje: ${data.mensaje}`);
    const params = new URLSearchParams({
      subject: `${intent.requestType} — mnnsor`,
      body: lines.join('\n'),
    });
    return `mailto:${SALES_EMAIL}?${params.toString().replace(/\+/g, '%20')}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(
      Array.from(fd.entries()).map(([k, v]) => [k, String(v)]),
    ) as Record<string, string>;

    const payload = {
      ...data,
      solicitud: intent.requestType,
      seccion_origen: section,
      _subject: `${intent.requestType} — nuevo lead desde ${section}`,
    };

    // Sin endpoint configurado → fallback directo a correo comercial.
    if (!LEAD_ENDPOINT) {
      window.location.href = buildMailtoFrom(data);
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
    } catch {
      // El POST falló: no perdemos el lead, abrimos el correo comercial.
      setStatus('error');
      window.location.href = buildMailtoFrom(data);
    }
  }

  if (status === 'success') {
    return (
      <div className="px-7 py-10 text-center">
        <span className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-none bg-ink text-paper">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="font-sans text-xl tracking-tight text-ink">¡Gracias! Lo recibimos.</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Nuestro equipo comercial te contactará en breve. Si prefieres, escríbenos
          directo a{' '}
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="font-medium text-ink underline underline-offset-4"
          >
            {SALES_EMAIL}
          </a>
          .
        </p>
        <button type="button" onClick={onDone} className={`mt-7 ${ctaClasses('solid')}`}>
          Cerrar
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-7 py-6">
      <input type="hidden" name="solicitud" value={intent.requestType} />
      <input type="hidden" name="seccion" value={section} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-nombre" className={labelCls}>
            Nombre *
          </label>
          <input id="lead-nombre" name="nombre" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="lead-empresa" className={labelCls}>
            Empresa *
          </label>
          <input
            id="lead-empresa"
            name="empresa"
            required
            autoComplete="organization"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lead-cargo" className={labelCls}>
            Cargo
          </label>
          <input
            id="lead-cargo"
            name="cargo"
            autoComplete="organization-title"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lead-email" className={labelCls}>
            Email *
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lead-telefono" className={labelCls}>
            Teléfono
          </label>
          <input
            id="lead-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lead-tipoProyecto" className={labelCls}>
            Tipo de proyecto
          </label>
          <select id="lead-tipoProyecto" name="tipoProyecto" defaultValue="" className={field}>
            <option value="" disabled>
              Selecciona…
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-herramientas" className={labelCls}>
            Herramientas actuales
          </label>
          <input
            id="lead-herramientas"
            name="herramientas"
            placeholder="P6, MS Project, Revit, Procore, Excel…"
            className={field}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lead-mensaje" className={labelCls}>
            Mensaje (opcional)
          </label>
          <textarea id="lead-mensaje" name="mensaje" rows={3} className={field} />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 flex items-center gap-2 text-sm text-ink">
          <Mail className="h-4 w-4" />
          Abrimos tu correo para completar el envío.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`mt-6 w-full sm:w-auto ${ctaClasses('solid')} disabled:opacity-60`}
      >
        {status === 'submitting' ? 'Enviando…' : 'Enviar solicitud'}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted-soft">
        Al enviar aceptas que te contactemos sobre tu solicitud. No compartimos tus
        datos con terceros.
      </p>
    </form>
  );
}
