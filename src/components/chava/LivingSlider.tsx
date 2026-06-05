import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mainLiving from "@/assets/uploaded/main-living-room.png";
import sliderLiving from "@/assets/slider-living-room.png.asset.json";
import salon2 from "@/assets/salon-2.png.asset.json";
import salon3 from "@/assets/salon-3.png.asset.json";
import salon4 from "@/assets/salon-4.png.asset.json";
import salon8 from "@/assets/salon-8.png.asset.json";
import salon9 from "@/assets/salon-9.png.asset.json";

const images = [
  mainLiving,
  sliderLiving.url,
  salon2.url,
  salon3.url,
  salon4.url,
  salon8.url,
  salon9.url,
];

export function LivingSlider() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  return (
    <div className="relative mt-10">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
        <img
          src={images[i]}
          alt={`Seforim & Family Living Collection ${i + 1}`}
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
