import { SectionLabel } from "./SectionLabel";
import collection from "@/assets/uploaded/kosher-kitchen-collection.jpg";
import urn from "@/assets/uploaded/hot-water-urn.jpg";
import hotplate from "@/assets/uploaded/hotplate.jpg";

const pieces = [
  {
    title: "Hot Water Urn",
    caption:
      "A built-in station for Shabbat hot water — concealed, vented and within reach of the dining room.",
    img: urn,
  },
  {
    title: "Shabbat Hotplate",
    caption:
      "A dedicated warming surface integrated into the cabinetry, ready for Friday night through Saturday.",
    img: hotplate,
  },
];

export function Collection() {
  return (
    <section
      id="collection"
      className="py-24 lg:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel number="05" label="Kosher Kitchen Collection" />
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <h2 className="lg:col-span-7 font-serif text-4xl md:text-5xl leading-tight text-foreground">
            Bespoke pieces, designed around Shabbat.
          </h2>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed self-end">
            A growing collection of furniture and built-ins created specifically for
            kosher kitchens — quiet on the eye, generous in daily use.
          </p>
        </div>

        <figure className="mb-16">
          <div className="aspect-[16/9] overflow-hidden rounded-sm bg-muted">
            <img
              src={collection}
              alt="Chava Interiors Kosher Kitchen Collection — walnut cabinetry with integrated Shabbat appliances"
              loading="lazy"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-xs tracking-wide text-muted-foreground italic">
            The Kosher Kitchen Collection — European craftsmanship for the rhythm of
            Jewish life.
          </figcaption>
        </figure>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {pieces.map((p) => (
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
