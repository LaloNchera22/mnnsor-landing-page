export function trackCTA(name: string, section?: string) {
  // Console log temporal list for Plausible/GA4/PostHog
  console.log(`[Analytics] CTA Clicked: ${name}${section ? ` (Section: ${section})` : ''}`);

  // Plausible example:
  // if (typeof window !== 'undefined' && (window as any).plausible) {
  //   (window as any).plausible('CTA Click', { props: { name, section } });
  // }
}
