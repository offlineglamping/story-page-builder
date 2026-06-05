import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import k1 from "@/assets/uploaded/kuchnia-1.png";
import k2 from "@/assets/uploaded/kuchnia-2.png";
import k3 from "@/assets/uploaded/kuchnia-3.png";
import k4 from "@/assets/uploaded/kuchnia-4.png";
import k5 from "@/assets/uploaded/kuchnia-5.png";
import k6 from "@/assets/uploaded/kuchnia-6.png";
import k7 from "@/assets/uploaded/kuchnia-7.png";
import k8 from "@/assets/uploaded/kuchnia-8.png";

const images = [k1, k2, k3, k4, k5, k6, k7, k8];

export function KitchenSlider() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  return (
    <div className="relative mt-10">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
        <img
          src={images[i]}
          alt={`Kosher Kitchen Collection ${i + 1}`}
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
