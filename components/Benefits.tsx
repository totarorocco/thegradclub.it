import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    number: "01",
    title: "Esperienze Curate",
    description:
      "Ogni viaggio è progettato nei minimi dettagli da chi conosce la destinazione",
  },
  {
    number: "02",
    title: "Prenota Senza Pensieri",
    description:
      "Pagamenti sicuri, assistenza 24/7 e garanzia soddisfatti o rimborsati",
  },
  {
    number: "03",
    title: "Prezzo Trasparente",
    description:
      "Nessun costo nascosto. Tutto incluso nel prezzo che vedi",
  },
  {
    number: "04",
    title: "Community Esclusiva",
    description:
      "Viaggia con persone come te, colleghi di università e futuri professionisti",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 100}>
              <div className="border-t border-border-gray pt-6 pr-8 pb-6">
                <span className="text-light-gray font-display text-3xl italic block mb-4">
                  {benefit.number}
                </span>
                <h3 className="text-charcoal font-medium text-lg mb-3">{benefit.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
