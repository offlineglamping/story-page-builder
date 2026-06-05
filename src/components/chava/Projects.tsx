import { SectionLabel } from "./SectionLabel";
import { KitchenSlider } from "./KitchenSlider";

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

        {/* Space 1 — Kosher Kitchen Collection */}
        <article className="border-t border-border pt-12">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Kosher Kitchen Collection
          </h3>
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-8">
            A bespoke luxury kitchen designed for observant Jewish family life.
          </p>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Created with respect for kashrut, halacha and family minhagim, the
              Kosher Kitchen Collection supports the daily and seasonal rhythm of an
              Orthodox Jewish home. The layout is built around clear separation
              between basar and chalav — meat and dairy — with dedicated zones,
              sinks, ovens, dishwashers, storage and preparation areas.
            </p>
            <p>
              At the heart of the kitchen is a Central Pareve Island, a neutral
              space for baking, vegetables, challah preparation, serving and family
              gathering.
            </p>
            <p>
              The collection includes thoughtful solutions for Shabbat Prep, a
              Blech / Hotplate warming area, a Hot Water Urn Niche, a generous
              Kosher Pantry, dedicated Pesach Storage and a Chametz Separation
              Cabinet for items not used during Passover.
            </p>
            <p>
              Designed to connect naturally with the dining room, the kitchen
              supports Kiddush, Lechem Mishneh, Netilat Yadayim, family meals and
              hachnasat orchim — the mitzvah of welcoming guests.
            </p>
            <p className="text-foreground">
              This is a kitchen where tradition is not added as decoration.
              <br />
              It is built into the plan.
            </p>
            <p className="font-serif text-foreground text-lg">
              Beauty. Functionality. Tradition.
            </p>
          </div>

          <KitchenSlider />
        </article>

        {/* Space 2 — placeholder */}
        <article className="border-t border-border pt-12 mt-20">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Space 2
          </h3>
          <p className="text-muted-foreground italic">Content coming soon.</p>
        </article>

        {/* Space 3 — placeholder */}
        <article className="border-t border-border pt-12 mt-20">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Space 3
          </h3>
          <p className="text-muted-foreground italic">Content coming soon.</p>
        </article>
      </div>
    </section>
  );
}
