const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg nb-border border-t-0 border-x-0 border-b-[3px]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-display font-bold text-lg tracking-tight">
          folder<span className="text-coral">.</span>thewni
        </span>
        <ul className="hidden sm:flex gap-6 text-sm font-mono">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-coral transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
