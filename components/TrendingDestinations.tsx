import AnimatedSection from "./AnimatedSection";

const mediumCards = [
  {
    tag: "Novità 2025",
    image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=600&q=80",
    title: "Cancún & Riviera Maya",
    description:
      "Il nuovo pacchetto all-inclusive con escursione a Tulum e Isla Mujeres",
    cta: "Scopri di più",
  },
  {
    tag: "Guida",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d7?w=600&q=80",
    title: "Ibiza: non solo party",
    description:
      "Beach club, tramonti e cala segrete. La guida definitiva per neolaureati.",
    cta: "Leggi la guida",
  },
  {
    tag: "Gruppo",
    image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=600&q=80",
    title: "Viaggi di gruppo in Grecia",
    description:
      "Come organizzare il viaggio di laurea perfetto per 10+ persone.",
    cta: "Scopri di più",
  },
];

export default function TrendingDestinations() {
  return (
    <section id="destinazioni" className="bg-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="mb-12">
          <h2
            className="text-charcoal font-light"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Le destinazioni del <em className="font-display italic">momento</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Featured Card */}
          <AnimatedSection>
            <div className="relative overflow-hidden min-h-[500px] h-full group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=900&q=80"
                alt="Mykonos"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-white/60 text-xs font-medium tracking-[0.15em] uppercase mb-4 block">
                  La nostra scelta
                </span>
                <h3 className="text-white font-light text-3xl md:text-4xl mb-2">Mykonos</h3>
                <p className="text-white/70 text-base mb-6">
                  La destinazione più richiesta dell&apos;estate 2025
                </p>
                <span className="inline-block text-white text-xs font-medium tracking-[0.15em] uppercase border-b border-white/40 pb-1">
                  Scopri i pacchetti
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Medium Cards Stack */}
          <div className="flex flex-col gap-6">
            {mediumCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 150}>
                <div className="group cursor-pointer flex flex-col sm:flex-row overflow-hidden border-b border-border-gray pb-6">
                  <div className="relative overflow-hidden w-full sm:w-[200px] aspect-[3/2] sm:aspect-auto shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center">
                    <span className="text-light-gray text-xs font-medium tracking-[0.15em] uppercase mb-2">
                      {card.tag}
                    </span>
                    <h4 className="text-charcoal font-medium text-base mb-1.5">{card.title}</h4>
                    <p className="text-medium-gray text-sm mb-3 line-clamp-2">
                      {card.description}
                    </p>
                    <span className="text-charcoal text-sm font-medium tracking-wide">
                      {card.cta}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
