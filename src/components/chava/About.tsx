import { SectionLabel } from "./SectionLabel";
import founderImg from "@/assets/uploaded/chava-founder-portrait.jpg.asset.json";

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
              I am a designer specialising in interiors created through user experience, design thinking and service design.
            </p>
            <p>
              As the owner of a Polish family-run furniture company and the founder of Chava Interiors, I create luxury bespoke furniture and interiors for Jewish homes — with a focus on kosher kitchens, Shabbat dining and family living spaces.
            </p>
            <p>
              My work combines European craftsmanship with a deep understanding of how people live, move, cook, gather and celebrate at home. With respect for Jewish tradition, kashrut and minhagim, I design spaces that are elegant, intuitive and deeply functional — interiors that support ritual, family life, hospitality and everyday comfort.
            </p>
            <p>
              I believe a well-designed home should not only look beautiful, but should also make daily life easier, calmer and more meaningful.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
