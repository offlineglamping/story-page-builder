import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mainDining from "@/assets/uploaded/main-dining-room.png";
import sliderDining from "@/assets/uploaded/slider-dining-room.png";
import d2 from "@/assets/uploaded/dining-ee-new.png";
import d3 from "@/assets/uploaded/dining-room-2.png";
import d4 from "@/assets/uploaded/dining-room-3.png";
import d5 from "@/assets/uploaded/dining-room-4.png";
import d6 from "@/assets/uploaded/dining-room-5.png";

const images = [mainDining, sliderDining, d2, d3, d4, d5, d6];

export function DiningSlider() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  return (
    <div className="relative mt-10">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
        <img
          src={images[i]}
          alt={`Shabbat & Holiday Dining Collection ${i + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-background/80 border border-border shadow-sm hover:bg-background transition-colors hidden md:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-background/80 border border-border shadow-sm hover:bg-background transition-colors hidden md:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Show image ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-8 bg-foreground" : "w-4 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
