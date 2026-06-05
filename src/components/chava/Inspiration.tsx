import { SectionLabel } from "./SectionLabel";
import { InspirationSlider } from "./InspirationSlider";


export function Inspiration() {
  return (
    <section id="inspiration" className="py-24 lg:py-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel number="02" label="Inspiration" />
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <h2 className="lg:col-span-7 font-serif text-4xl md:text-5xl leading-tight text-foreground">
            Jewish rituals, read as design briefs.
          </h2>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed self-end">
            Every ritual quietly asks something of the home — a surface, a drawer, a
            distance, a light. These are the moments we design around.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {items.map((item) => (
            <li key={item.title} className="py-7 border-t border-border">
              <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>

        <InspirationSlider />
      </div>
    </section>
  );
}
