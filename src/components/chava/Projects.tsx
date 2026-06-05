import { SectionLabel } from "./SectionLabel";
import kitchen from "@/assets/uploaded/main-kitchen.png";
import kitchenAnnotated from "@/assets/uploaded/main-pantry.png";
import shabbat from "@/assets/uploaded/shabbat-prep.jpg";
import pesach from "@/assets/uploaded/pesach-storage.jpg";
import netilat from "@/assets/uploaded/netilat-yadayim.jpg";
import dining from "@/assets/project-dining.jpg";
import sukkot from "@/assets/project-sukkot.jpg";

const projects = [
  {
    title: "Kosher Family Kitchen",
    caption: "Two zones, one harmony — meat and dairy as architecture.",
    img: kitchen,
  },
  {
    title: "Kitchen, Annotated",
    caption: "Every drawer, every distance — designed around real kosher routines.",
    img: kitchenAnnotated,
  },
  {
    title: "Shabbat Prep Wall",
    caption: "A dedicated wall for candles, challah and the rhythm of Friday.",
    img: shabbat,
  },
  {
    title: "Pesach Storage System",
    caption: "An enclosed, year-round pantry that opens once for Pesach.",
    img: pesach,
  },
  {
    title: "Netilat Yadayim Station",
    caption: "A handwashing basin at the threshold of the dining room.",
    img: netilat,
  },
  {
    title: "Hospitality Dining Room",
    caption: "Geometry designed for guests — extendable, generous, calm.",
    img: dining,
  },
  {
    title: "Sukkot & Seasonal Storage",
    caption: "Tall, ventilated storage for the holidays of the year.",
    img: sukkot,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel number="04" label="Projects" />
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <h2 className="lg:col-span-7 font-serif text-4xl md:text-5xl leading-tight text-foreground">
            Selected work, in service of daily life.
          </h2>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed self-end">
            A few of the rooms and pieces we design — each shaped by the family who
            lives with it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((p) => (
            <figure key={p.title} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-6 border-b border-border pb-5">
                <h3 className="font-serif text-2xl text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground text-right max-w-xs">
                  {p.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
