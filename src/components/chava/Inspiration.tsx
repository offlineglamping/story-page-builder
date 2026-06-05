import { SectionLabel } from "./SectionLabel";
import { InspirationSlider } from "./InspirationSlider";

const items = [
  { title: "Kabbalat Shabbat", text: "A welcoming threshold — candle niche, soft lighting, a calm transition from week to rest." },
  { title: "Kiddush", text: "A dedicated surface and cabinet for the kiddush cup and wine, kept within easy reach of the table." },
  { title: "Lechem Mishneh", text: "A handcrafted challah board and cover, with storage that honours the weekly loaves." },
  { title: "Havdalah", text: "A small ritual shelf — spice box, braided candle, a place to close the Shabbat with intention." },
  { title: "Hafrashat Challah", text: "A baking corner with marble surface, flour drawers and a tucked-away mixer station." },
  { title: "Bedikat Chametz", text: "Discreet wood-paneled drawers and corners designed to be searched, sealed and reopened with ease." },
  { title: "Chametz Separation", text: "Cabinetry that separates and seals — distinct zones, finishes and hardware that read at a glance." },
  { title: "Pesach Storage", text: "A dedicated, fully enclosed pantry for Pesach dishes, pots and pantry items, used once a year." },
  { title: "Hachnasat Orchim", text: "Generous dining geometry, extendable tables, guest coats, water station — hospitality built into the plan." },
  { title: "Ritual Handwashing", text: "A second basin at the entrance to the dining area, with a place for the cup and a linen towel." },
  { title: "Sukkot Storage", text: "Tall, ventilated storage for schach poles, decor and folded canvas, ready for the holiday." },
  { title: "Mezuzah Placement", text: "Doorframes considered as design — clean reveals, soft shadow lines, the mezuzah at home in the architecture." },
];

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
      </div>
    </section>
  );
}
