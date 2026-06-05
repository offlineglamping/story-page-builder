import { useEffect, useState } from "react";
import hotWaterUrn from "@/assets/uploaded/hot-water-urn.png";
import hotplate from "@/assets/uploaded/hotplate.png";
import netilatYadayim from "@/assets/uploaded/netilat-yadayim.png";
import pesachStorage from "@/assets/uploaded/pesach-storage.png";
import shabbatPrep from "@/assets/uploaded/shabbat-prep.png";

const slides = [
  {
    src: shabbatPrep,
    title: "Shabbat Prep",
    text: "A dedicated wall for candles, challah and the rhythm of Friday.",
  },
  {
    src: hotplate,
    title: "Hotplate",
    text: "A built-in warming surface designed for Shabbat meals kept hot from sunset to lunch.",
  },
  {
    src: hotWaterUrn,
    title: "Hot Water Urn",
    text: "A discreet niche for the Shabbat urn — always-on, always within reach.",
  },
  {
    src: netilatYadayim,
    title: "Netilat Yadayim",
    text: "A handwashing basin at the threshold of the dining room, with cup and linen towel.",
  },
  {
    src: pesachStorage,
    title: "Pesach Storage",
    text: "A fully enclosed pantry for Pesach dishes and pots — opened once a year.",
  },
];

const VISIBLE = 3;

export function InspirationSlider() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStart((s) => (s + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const visible = Array.from({ length: VISIBLE }, (_, i) => slides[(start + i) % slides.length]);

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visible.map((slide) => (
          <figure key={slide.title} className="flex flex-col">
            <div className="bg-muted rounded-sm aspect-[3/4] flex items-center justify-center overflow-hidden">
              <img
                src={slide.src}
                alt={slide.title}
                className="h-full w-full object-contain"
              />
            </div>
            <figcaption className="mt-5">
              <h3 className="font-serif text-xl text-foreground">{slide.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {slide.text}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setStart(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === start ? "w-8 bg-foreground" : "w-4 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
