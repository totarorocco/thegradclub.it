import AnimatedSection from "./AnimatedSection";

export default function TeamSection() {
  return (
    <section className="bg-off-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <AnimatedSection>
            <span className="text-light-gray text-xs font-medium tracking-[0.15em] uppercase mb-6 block">
              Il tuo team sul posto
            </span>
            <h2
              className="text-charcoal font-light mb-6 leading-tight"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Un <em className="font-display italic">concierge dedicato</em> in ogni destinazione
            </h2>
            <p className="text-medium-gray text-lg leading-relaxed mb-8">
              Non sarai mai solo. Per ogni viaggio Grad Club, avrai un travel designer che
              conosce la destinazione come le sue tasche. Ti consiglia i posti giusti,
              organizza tutto nei minimi dettagli e ti assiste 24/7 durante il viaggio.
            </p>
            <a
              href="#come-funziona"
              className="inline-block text-charcoal text-sm font-medium tracking-wide hover:text-medium-gray transition-colors"
            >
              Scopri come funziona
            </a>
          </AnimatedSection>

          {/* Image Column */}
          <AnimatedSection delay={200}>
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80"
                alt="Travel designer in destinazione"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
