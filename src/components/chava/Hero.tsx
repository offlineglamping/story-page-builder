import kuchniaBezOpisu from "@/assets/uploaded/kuchnia-bez-opsu.jpg";
import kuchniaZOpisem from "@/assets/uploaded/kuchnia-z-opisem.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-6">
          <p className="text-[11px] tracking-[0.32em] uppercase text-muted-foreground mb-8">
            Bespoke Furniture · European Craftsmanship
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
            Luxury Kosher Interiors
            <br />
            <span className="italic text-accent">for Jewish Homes.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Chava Interiors creates bespoke kitchens, dining rooms and family spaces
            designed around Jewish tradition, Shabbat, kosher living and the real
            rhythm of family life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center h-12 px-7 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded-sm"
            >
              Discover Our Approach
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-7 border border-foreground/30 text-foreground text-sm tracking-wide hover:border-foreground transition-colors rounded-sm"
            >
              Start Your Project
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="group relative overflow-hidden rounded-sm bg-muted cursor-pointer">
            <img
              src={kuchniaBezOpisu}
              alt="Kosher kitchen without annotations"
              className="block h-auto w-full object-contain transition-opacity duration-500 ease-out"
            />
            <img
              src={kuchniaZOpisem}
              alt="Kosher kitchen with annotations"
              className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            />
          </div>
          <p className="mt-4 text-xs tracking-wide text-muted-foreground italic">
            Founded by Ewa Bukowiec — combining European craftsmanship with design
            thinking, service design and deep respect for Jewish culture.
          </p>
        </div>
      </div>
    </section>
  );
}
