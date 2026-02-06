"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Dove andare nel 2026?",
    description:
      "Vuoi partire all'avventura nel 2026? Scopri le nostre destinazioni del cuore. Che tu sogni mete lontane, fughe lontano dalla folla o avventure dietro l'angolo, c'è un viaggio perfetto che ti aspetta.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  },
  {
    title: "Viaggi di gruppo",
    description:
      "Riunisci la tua crew e parti. Organizzare un viaggio di gruppo non è mai stato così semplice: pensano a tutto i nostri travel designer, tu porta solo la voglia di divertirti.",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
  },
  {
    title: "Viaggi a tema",
    description:
      "Dal surf al vino, dalla musica alla cucina locale. Scegli il tema che ti appassiona e trasformalo nel viaggio della tua vita. Ogni esperienza è pensata per chi vuole qualcosa di unico.",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80",
  },
];

const SLIDE_UP = 120;

export default function ExperienceCarousel() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="esperienze" className="bg-off-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Desktop: equal columns, image slides up to reveal text */}
          <div
            className="hidden md:grid grid-cols-3 gap-8"
            onMouseLeave={() => setActive(null)}
          >
            {experiences.map((exp, i) => {
              const isActive = active === i;
              return (
                <div
                  key={exp.title}
                  className="cursor-pointer overflow-hidden"
                  style={{ height: `${420 + 40}px` }}
                  onMouseEnter={() => setActive(i)}
                >
                  <div
                    style={{
                      transform: isActive
                        ? `translateY(-${SLIDE_UP}px)`
                        : "translateY(0)",
                      transition:
                        "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="h-[420px] rounded-md overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display text-charcoal text-xl mt-4">
                      {exp.title}
                    </h3>
                    <p
                      className="text-medium-gray text-sm leading-relaxed mt-2 transition-opacity duration-500"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical stack with tap to expand */}
          <div className="flex flex-col gap-6 md:hidden">
            {experiences.map((exp, i) => {
              const isActive = active === i;
              return (
                <div
                  key={exp.title}
                  className="cursor-pointer overflow-hidden"
                  style={{ height: `${300 + 40}px` }}
                  onClick={() => setActive(isActive ? null : i)}
                >
                  <div
                    style={{
                      transform: isActive
                        ? `translateY(-${SLIDE_UP}px)`
                        : "translateY(0)",
                      transition:
                        "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="h-[300px] rounded-md overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display text-charcoal text-xl mt-4">
                      {exp.title}
                    </h3>
                    <p
                      className="text-medium-gray text-sm leading-relaxed mt-2 transition-opacity duration-500"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
