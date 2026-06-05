import { SectionLabel } from "./SectionLabel";

const authorities = [
  {
    name: "Rabbi Professor Daniel Sperber",
    role: "Minhagim",
    text: "Authority on Jewish customs and author of Minhagei Yisrael — a foundational reference on how tradition lives in the everyday.",
  },
  {
    name: "Rabbi Lord Jonathan Sacks",
    role: "Shabbat & The Home",
    text: "Inspiration for the meaning of Shabbat, family, hospitality and the moral architecture of the Jewish home.",
  },
  {
    name: "Shulchan Aruch — Rabbi Yosef Karo",
    role: "Halacha",
    text: "Foundational reference for halacha, kosher practice and the daily observance that shapes a Jewish household.",
  },
];

export function Authorities() {
  return (
    <section id="authorities" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel number="03" label="Authorities" />
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground max-w-3xl">
          Informed by Jewish scholarship and tradition.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border border border-border">
          {authorities.map((a) => (
            <article key={a.name} className="bg-background p-8 lg:p-10 flex flex-col">
              <p className="text-[11px] tracking-[0.28em] uppercase text-accent mb-6">
                {a.role}
              </p>
              <h3 className="font-serif text-2xl text-foreground leading-snug mb-4">
                {a.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm italic text-muted-foreground">
          Final halachic decisions should always be confirmed with the client's own rabbi
          or community authority. CHAVA designs in dialogue with your tradition — not in
          place of it.
        </p>
      </div>
    </section>
  );
}
