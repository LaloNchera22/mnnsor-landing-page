import { team, type TeamMember } from '../data/socialProof';

/** Glifo de LinkedIn en línea: lucide v1 ya no incluye iconos de marca. */
function LinkedinGlyph({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.5 4.8 5.75V21h-4v-5.66c0-1.35-.03-3.09-1.94-3.09-1.94 0-2.24 1.47-2.24 2.99V21h-4V9Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 *  Equipo / fundadores.
 *
 *  En etapa temprana el equipo ES la prueba: foto, nombre y credencial
 *  (años en construcción / en IA). Se renderiza SÓLO si hay personas
 *  reales en src/data/socialProof.ts; de lo contrario, no aparece.
 * ------------------------------------------------------------------ */

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <article
      data-reveal
      style={{ transitionDelay: `${index * 100}ms` }}
      className="group bg-paper p-8 lg:p-10"
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="mb-6 h-20 w-20 rounded-none object-cover grayscale"
        />
      ) : (
        <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-none bg-panel font-mono text-lg font-medium text-muted">
          {initials(member.name)}
        </span>
      )}

      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold tracking-tight text-ink">{member.name}</h3>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${member.name}`}
            className="text-muted-soft"
          >
            <LinkedinGlyph className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="mt-1 label-mono text-muted-soft">{member.role}</p>

      <ul className="mt-5 space-y-2 pt-5">
        {member.credentials.map((c) => (
          <li key={c} className="flex items-start gap-2.5 text-sm text-muted">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1 w-1 shrink-0 rounded-none bg-ink"
            />
            {c}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Team() {
  if (team.length === 0) return null;

  return (
    <section
      id="equipo"
      className="bg-paper py-4 lg:py-6"
      aria-label="Equipo fundador"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="mb-5 label-mono text-muted-soft">
            Quién lo construye
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: '80ms' }}
            className="font-sans text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Construcción e IA
            <span className="text-muted"> en la misma mesa.</span>
          </h2>
        </div>

        <div
          className={`mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 ${ team.length >= 3 ? 'lg:grid-cols-3' : '' }`}
        >
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
