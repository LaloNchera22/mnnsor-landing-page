import MailButton from './MailButton';
import { CONTACT } from '../lib/contact';

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * Banner de conversión oscuro reutilizable. Ambos botones abren un correo
 * predefinido a support@mnnsor.com.
 */
export default function CTASection({
  title,
  description,
  primaryHref = CONTACT.demo,
  primaryLabel = 'Agendar demo',
  secondaryHref = CONTACT.sales,
  secondaryLabel = 'Hablar con ventas',
}: CTASectionProps) {
  return (
    <section className="bg-paper px-5 py-20 sm:px-6 lg:py-28">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-none bg-ink px-6 py-16 text-center sm:px-10 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-sans text-3xl leading-[1.08] tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-paper/60">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <MailButton href={primaryHref} variant="solid-light" full>
              {primaryLabel}
            </MailButton>
            <MailButton href={secondaryHref} variant="outline-light" full arrow={false}>
              {secondaryLabel}
            </MailButton>
          </div>
        </div>
      </div>
    </section>
  );
}
