interface LogoProps {
  /** `dark` renders ink-on-light (default); `light` keeps the native white art for dark backgrounds. */
  tone?: 'dark' | 'light';
  className?: string;
}

/**
 * Brand lockup: the mnnsor pixel mark beside the wordmark. The shipped assets
 * are near-white, so on light surfaces we invert the mark to ink; on dark
 * surfaces we use it as-is.
 */
export default function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const inkText = tone === 'dark' ? 'text-ink' : 'text-paper';
  const logoSrc = tone === 'dark' ? '/1.png' : '/2.png';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        width={26}
        height={26}
        className="h-6 w-6 object-contain"
      />
      <span
        className={`font-semibold text-[1.35rem] leading-none tracking-tight ${inkText}`}
      >
        mnnsor
      </span>
    </span>
  );
}
