"use client";

import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Beach & Party",
    description: "Spiagge iconiche e vita notturna",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
  },
  {
    title: "Boat & Island Hopping",
    description: "Esplora isole e coste in barca",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
  },
  {
    title: "Culture & City Break",
    description: "Scopri la storia tra cocktail e rooftop",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
  },
  {
    title: "All-Inclusive Resort",
    description: "Relax totale, zero pensieri",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
  },
  {
    title: "Festival & Events",
    description: "Vivi i festival più esclusivi d'Europa",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
  },
  {
    title: "Adventure & Nature",
    description: "Per chi vuole qualcosa di diverso",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80",
  },
  {
    title: "Coppie & Romantic",
    description: "Il viaggio perfetto in due",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
  {
    title: "Gruppi Grandi (10+)",
    description: "Organizza il viaggio per tutta la comitiva",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
];

export default function ExperienceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="esperienze" className="bg-off-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2
              className="text-charcoal font-light mb-3"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Scegli la tua <em className="font-display italic">esperienza</em>
            </h2>
            <p className="text-medium-gray text-lg">
              Ogni viaggio è diverso. Trova lo stile che fa per te.
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
        >
          {experiences.map((exp, i) => (
            <AnimatedSection
              key={exp.title}
              delay={i * 100}
              className="shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-0.9375rem)] snap-start"
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-4">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-charcoal font-medium text-lg">{exp.title}</h3>
                <p className="text-medium-gray text-sm mt-1">{exp.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300} className="mt-12 text-center">
          <a
            href="#"
            className="inline-block text-charcoal text-sm font-medium tracking-wide hover:text-medium-gray transition-colors"
          >
            Esplora tutte le esperienze
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
