import { useEffect, useState } from "react";
import mainKitchen from "@/assets/uploaded/main-kitchen.png";
import mainLivingRoom from "@/assets/uploaded/main-living-room.png";
import mainDiningRoom from "@/assets/uploaded/main-dining-room.png";
import mainPantry from "@/assets/uploaded/main-pantry.png";

const slides = [
  { src: mainKitchen, alt: "Bespoke kosher kitchen" },
  { src: mainLivingRoom, alt: "Family living room" },
  { src: mainDiningRoom, alt: "Shabbat dining room" },
  { src: mainPantry, alt: "Pesach pantry" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.32em] uppercase text-muted-foreground mb-8">
            Bespoke Furniture · European Craftsmanship
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
            Luxury Kosher Interiors
            <br />
            <span className="italic text-accent">for Jewish Homes.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Chava Interiors creates bespoke kitchens, dining rooms and family spaces
            designed around Jewish tradition, Shabbat, kosher living and the real
            rhythm of family life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center h-12 px-7 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded-sm"
            >
              Discover Our Approach
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-7 border border-foreground/30 text-foreground text-sm tracking-wide hover:border-foreground transition-colors rounded-sm"
            >
              Start Your Project
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-sm bg-muted aspect-[4/3]">
            {slides.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-background" : "w-4 bg-background/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
