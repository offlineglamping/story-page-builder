import { SectionLabel } from "./SectionLabel";
import { KitchenSlider } from "./KitchenSlider";
import { DiningSlider } from "./DiningSlider";
import { LivingSlider } from "./LivingSlider";

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

        {/* Space 2 — Shabbat & Holiday Dining Collection */}
        <article className="border-t border-border pt-12 mt-20">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Shabbat & Holiday Dining Collection
          </h3>
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-8">
            A bespoke dining collection designed around the rituals, hospitality
            and beauty of Jewish family life.
          </p>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              The Shabbat & Holiday Dining Collection supports the rhythm of an
              observant Jewish home — from Kabbalat Shabbat and candle lighting
              to Kiddush, Lechem Mishneh, family meals, Yom Tov celebrations and
              hachnasat orchim, the mitzvah of welcoming guests.
            </p>
            <p>
              At the centre is a generous extendable family table, created for
              Shabbat meals, holidays and large gatherings. Around it, every
              element has a purpose: a dedicated Kiddush & Challah Sideboard, a
              safe and elegant place for Shabbat candles, discreet storage for
              silverware, linens and Judaica, and a refined Netilat Yadayim
              Station for ritual handwashing before bread.
            </p>
            <p>
              The room is planned to connect naturally with the kitchen, serving
              areas and terrace or garden, supporting the seasonal rhythm of
              Jewish life, including space for a sukkah during Sukkot.
            </p>
            <p>
              Designed with natural oak, light stone, brushed brass, soft
              textiles and warm lighting, the collection brings quiet luxury to
              the rituals of the Jewish table.
            </p>
            <p className="text-foreground">
              This is not simply a dining room.
              <br />
              It is a place for blessing, hosting, memory and tradition.
            </p>
          </div>

          <DiningSlider />
        </article>

        {/* Space 3 — Seforim & Family Living Collection */}
        <article className="border-t border-border pt-12 mt-20">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Seforim & Family Living Collection
          </h3>
          <p className="font-serif text-xl md:text-2xl text-foreground/90 italic mb-8">
            A bespoke living room collection designed for Torah learning,
            Shabbat rest and Jewish family life.
          </p>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              The Seforim & Family Living Collection is created for observant
              Jewish homes where the living room is more than a place to sit.
              It is a space for seforim, limmud Torah, family conversation,
              Shabbat menuchah and quiet hospitality.
            </p>
            <p>
              At the centre of the design is the Seforim Library — strong,
              elegant shelving for sacred books such as Chumash, Mishnah,
              Gemara, Siddurim, Tehillim and family Judaica. A dedicated
              learning corner with a comfortable chair, focused lighting and a
              small writing surface invites daily Torah study.
            </p>
            <p>
              Around it, the room is composed for family life: deep seating
              for Shabbat afternoons, soft textiles, calm tones and discreet
              storage for games, blankets and everyday objects. A refined
              Judaica display cabinet holds the Havdalah set, besamim box,
              braided candle, candlesticks, kiddush cups and family silver.
              Every object has a respectful place, ready for Shabbat, Yom Tov
              and the rhythm of the Jewish year.
            </p>
            <p>
              Designed with natural oak, warm stone, brushed brass, soft
              upholstery and integrated lighting, the collection creates a
              living room that feels elegant, modest and deeply intentional.
            </p>
          </div>

          <LivingSlider />
        </article>
      </div>
    </section>
  );
}
