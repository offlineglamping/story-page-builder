import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hotWaterUrn from "@/assets/uploaded/hot-water-urn.png";
import hotplate from "@/assets/uploaded/hotplate.png";
import netilatYadayim from "@/assets/uploaded/netilat-yadayim.png";
import pesachStorage from "@/assets/uploaded/pesach-storage.png";
import shabbatPrep from "@/assets/uploaded/shabbat-prep.png";

import garden from "@/assets/uploaded/garden.png";
import candles from "@/assets/uploaded/candles.png";
import kiddush from "@/assets/uploaded/kiddush.png";
import shabbatRest from "@/assets/uploaded/shabbat-rest.png";
import torahStudy from "@/assets/uploaded/torah-study.png";

const slides = [
  { src: shabbatPrep, title: "Shabbat Prep" },
  { src: candles, title: "Shabbat Candles" },
  { src: kiddush, title: "Kiddush" },
  { src: hotplate, title: "Hotplate" },
  { src: hotWaterUrn, title: "Hot Water Urn" },
  { src: netilatYadayim, title: "Netilat Yadayim" },
  { src: pesachStorage, title: "Pesach Storage" },
  { src: garden, title: "Garden & Sukkah" },
  { src: shabbatRest, title: "Shabbat Rest" },
  { src: torahStudy, title: "Torah Study" },
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

  const goPrev = () => setStart((s) => (s - 1 + slides.length) % slides.length);
  const goNext = () => setStart((s) => (s + 1) % slides.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => slides[(start + i) % slides.length]);

  return (
    <div className="mt-16 relative">
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-background/80 border border-border shadow-sm hover:bg-background transition-colors hidden md:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-background/80 border border-border shadow-sm hover:bg-background transition-colors hidden md:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

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
