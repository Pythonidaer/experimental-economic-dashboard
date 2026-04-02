export function SkipLink() {
  return (
    <a
      className="bg-primary text-primary-foreground sr-only z-50 rounded-md px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-ring"
      href="#main-content"
    >
      Skip to main content
    </a>
  );
}
