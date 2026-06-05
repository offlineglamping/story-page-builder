import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-6">
          <p className="text-[11px] tracking-[0.32em] uppercase text-muted-foreground mb-8">
            Interior & Custom Furniture Studio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
            Kosher Interiors
            <br />
            <span className="italic text-accent">for Jewish Homes.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            We design homes where beauty, function and Jewish tradition live together —
            kitchens, cabinetry and rooms shaped around the rhythm of daily life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center h-12 px-7 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded-sm"
            >
              Explore Our Philosophy
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-7 border border-foreground/30 text-foreground text-sm tracking-wide hover:border-foreground transition-colors rounded-sm"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <img
              src={heroImg}
              alt="A serene, naturally lit kosher kitchen with separated meat and dairy zones and warm oak cabinetry"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-xs tracking-wide text-muted-foreground italic">
            Kosher design is not only about food. It is about creating a home where
            daily rituals, tradition and beauty flow naturally.
          </p>
        </div>
      </div>
    </section>
  );
}
