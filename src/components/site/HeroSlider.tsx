import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSlider({ slides }: { slides: { src: string; alt: string }[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 -z-10">
      {slides.map((s, idx) => (
        <div
          key={s.src}
          aria-hidden={idx !== i}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            idx === i ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={s.src}
            alt={s.alt}
            width={1600}
            height={1000}
            loading={idx === 0 ? "eager" : "lazy"}
            className={cn("h-full w-full object-cover", idx === i && "animate-kenburns")}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,32,25,0.62)_0%,rgba(8,32,25,0.38)_45%,rgba(8,32,25,0.78)_100%)]" />
    </div>
  );
}
