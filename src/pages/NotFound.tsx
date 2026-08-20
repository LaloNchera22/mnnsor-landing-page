import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 pt-32 pb-20 text-center">
      <div>
        <p className="label-mono text-muted-soft">Error 404</p>
        <h1 className="mt-5 font-sans text-5xl tracking-tight text-ink sm:text-6xl">
          Esta página no existe.
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
          El enlace que seguiste puede estar roto o la página pudo haberse movido.
        </p>
        <Link
          to="/"
          className="group mt-9 inline-flex items-center gap-2 rounded-none bg-ink px-6 py-3.5 text-base font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
        >
          Volver al inicio
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
