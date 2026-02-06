"use client";

import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Sofia",
    text: "La settimana più bella della mia vita. Tutto organizzato alla perfezione, non avremmo potuto chiedere di meglio. Il nostro coordinatore era sempre disponibile e ci ha fatto vivere esperienze uniche.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80",
    destination: "MYKONOS",
    type: "CON AMICI",
  },
  {
    name: "Marco",
    text: "Esperienza incredibile dall'inizio alla fine. Eravamo un gruppo di 8 amici e tutto è andato liscio. Le escursioni, le serate, l'hotel — tutto perfetto. Torneremo sicuramente con The Grad Club.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
    destination: "CANCÚN",
    type: "GRUPPO",
  },
  {
    name: "Giulia",
    text: "Un viaggio indimenticabile per festeggiare la laurea. Ogni dettaglio era curato, dalla villa alle serate nei beach club più esclusivi. Il modo perfetto per celebrare questo traguardo.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    destination: "IBIZA",
    type: "CON AMICHE",
  },
  {
    name: "Luca",
    text: "Superato ogni aspettativa. Io e Alessia volevamo qualcosa di speciale e The Grad Club ha reso tutto magico. Resort incredibile, escursioni organizzate nei minimi dettagli, zero stress.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80",
    destination: "PUNTA CANA",
    type: "IN COPPIA",
  },
  {
    name: "Alessandro",
    text: "Il modo migliore di festeggiare la fine dell'università. Eravamo in 15 e tutto è stato gestito alla perfezione. Ci siamo goduti ogni momento senza pensare a nulla.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80",
    destination: "ZANTE",
    type: "GRUPPO GRANDE",
  },
];

function TrustpilotStars() {
  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-8 h-8 bg-[#00B67A] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section id="recensioni" className="bg-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header — centered title + Trustpilot */}
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-charcoal font-bold mb-8"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Oltre 2.000 neolaureati si sono{" "}
            <br className="hidden sm:block" />
            fidati di noi
          </h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00B67A]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-charcoal font-semibold text-lg tracking-tight">Trustpilot</span>
            </div>
            <TrustpilotStars />
            <p className="text-medium-gray text-sm mt-1">
              TrustScore <span className="font-semibold text-charcoal">4.9</span>{" "}
              <span className="font-semibold text-charcoal">500+</span> recensioni
            </p>
          </div>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection className="mb-8">
          <h3
            className="text-charcoal font-medium border-b border-border-gray pb-4"
            style={{ fontSize: "var(--text-h3)" }}
          >
            I ricordi dei nostri <em className="font-display not-italic">viaggiatori</em>
          </h3>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            >
              {reviews.map((review, i) => (
                <div
                  key={review.name}
                  className="snap-start shrink-0 w-[calc(100%-1rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(40%-0.75rem)]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="border border-border-gray h-full flex">
                    {/* Text side */}
                    <div className="flex-1 p-6 flex flex-col justify-between min-h-[320px]">
                      <div>
                        <h4 className="text-charcoal font-semibold text-lg mb-4">
                          {review.name}
                        </h4>
                        <p className="text-medium-gray text-sm leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-6">
                        <span className="border border-border-gray px-3 py-1 text-xs font-medium tracking-[0.08em] uppercase text-charcoal">
                          {review.destination}
                        </span>
                        <span className="border border-border-gray px-3 py-1 text-xs font-medium tracking-[0.08em] uppercase text-charcoal">
                          {review.type}
                        </span>
                      </div>
                    </div>
                    {/* Image side */}
                    <div className="w-[45%] shrink-0 relative">
                      <img
                        src={review.image}
                        alt={`Viaggio di ${review.name}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll arrow */}
            <button
              onClick={scrollRight}
              aria-label="Scorri recensioni"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white border border-border-gray items-center justify-center hover:bg-off-white transition-colors z-10"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-charcoal"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
