import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel number="01" label="About Us" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
              A studio for homes shaped by Jewish life.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              CHAVA designs interiors and custom furniture in accordance with kosher
              principles and minhagim. Every project begins with how a family actually
              lives — how they cook, host, prepare Shabbat, mark the holidays, and pass
              tradition between generations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <article className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl text-foreground mb-3">Kosher design</h3>
                <p className="text-sm leading-relaxed">
                  Organising the home around Jewish life: separation of meat and dairy,
                  Shabbat preparation, Pesach storage, family meals, hospitality and the
                  quiet care of ritual objects.
                </p>
              </article>
              <article className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl text-foreground mb-3">Minhagim</h3>
                <p className="text-sm leading-relaxed">
                  Jewish customs and inherited practices that shape daily life, holidays,
                  meals, prayer, hospitality and the rhythm of the Jewish home.
                </p>
              </article>
            </div>

            <p className="pt-2">
              We translate these principles into practical design: kitchen layout,
              storage systems, cabinetry, dining areas, ritual object display, lighting
              and the daily workflow of family life — always tailored to your community
              and your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
