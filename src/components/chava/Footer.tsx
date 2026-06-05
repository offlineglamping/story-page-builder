const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#inspiration", label: "Inspiration" },
  { href: "#authorities", label: "Authorities" },
  { href: "#projects", label: "Projects" },
  { href: "#collection", label: "Collection" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <p className="font-serif text-2xl tracking-[0.3em] text-foreground">CHAVA</p>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Kosher Interiors & Custom Furniture. Designing homes where Jewish life can
            flow beautifully.
          </p>
        </div>
        <nav className="md:col-span-3">
          <p className="text-[11px] tracking-[0.28em] uppercase text-foreground mb-4">
            Navigate
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.28em] uppercase text-foreground mb-4">
            Studio
          </p>
          <p className="text-sm text-muted-foreground">studio@chava.design</p>
          <p className="text-sm text-muted-foreground mt-2">By appointment</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CHAVA. All rights reserved.</p>
          <p className="italic">Designed in service of daily life.</p>
        </div>
      </div>
    </footer>
  );
}
