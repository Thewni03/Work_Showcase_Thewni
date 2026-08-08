export default function Footer({ socials }) {
    return (
      <footer className="nb-border border-x-0 border-b-0 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-ink/60">
            © {new Date().getFullYear()} — built with React & Tailwind
          </p>
          <div className="flex gap-4 font-mono text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-coral transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  