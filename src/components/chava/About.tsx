import { SectionLabel } from "./SectionLabel";
import founderImg from "@/assets/uploaded/chava-interiors-about.jpg";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel number="01" label="About · Meet the Founder" />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <img
                src={founderImg}
                alt="Ewa Bukowiec, founder of Chava Interiors, in a refined interior with bespoke furniture details"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs tracking-wide text-muted-foreground italic">
              Ewa Bukowiec — Founder of Chava Interiors
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-muted-foreground leading-relaxed">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground">
              A studio for homes shaped by Jewish life.
            </h2>
            <p className="text-lg">
              I am <span className="text-foreground">Ewa Bukowiec</span>, owner of a
              Polish family-run furniture company specialising in bespoke kitchen
              furniture and high-quality interiors. As the founder of Chava Interiors,
              I create luxury furniture and interiors for Jewish homes — with a special
              focus on kosher kitchens, Shabbat dining and family living spaces.
            </p>
            <p>
              My work combines European craftsmanship with design thinking and service
              design. I believe a beautiful home should also be deeply functional,
              intuitive and designed around the real rhythm of everyday life. With
              passion for Jewish culture and great respect for tradition, I design
              spaces that support family rituals, comfort, beauty and a sense of order.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <article className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Kosher design
                </h3>
                <p className="text-sm leading-relaxed">
                  Organising the home around Jewish life: separation of meat and dairy,
                  Shabbat preparation, Pesach storage, family meals, hospitality and
                  the quiet care of ritual objects.
                </p>
              </article>
              <article className="border-t border-border pt-6">
                <h3 className="font-serif text-2xl text-foreground mb-3">Minhagim</h3>
                <p className="text-sm leading-relaxed">
                  Jewish customs and inherited practices that shape daily life,
                  holidays, meals, prayer, hospitality and the rhythm of the Jewish
                  home.
                </p>
              </article>
            </div>

            <p className="pt-2 italic text-sm">
              Chava Interiors is created with deep respect for Jewish tradition and a
              human-centred approach to the needs of every family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
