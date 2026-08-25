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
  const logoSrc = tone === 'dark' ? '/1.png' : '/2.png';
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="mnnsor logo"
        className="h-6 w-auto object-contain"
      />
    </span>
  );
}
