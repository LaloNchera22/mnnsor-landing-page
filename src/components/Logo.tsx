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
  const filterClass = tone === 'dark' ? 'invert' : '';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/1.png"
        alt="mnnsor logo mark"
        className={`h-9 w-auto object-contain ${filterClass}`}
      />
      <img
        src="/2.png"
        alt="mnnsor wordmark"
        className={`h-7 w-auto object-contain ${filterClass}`}
      />
    </span>
  );
}
