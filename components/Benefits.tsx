import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    number: "01",
    title: "Connessioni Reali",
    description:
      "Non è solo un viaggio. Nascono amicizie, relazioni e collaborazioni professionali che durano per sempre",
  },
  {
    number: "02",
    title: "Persone Selezionate",
    description:
      "Giovani ambiziosi, neolaureati preparati e con voglia di fare. Bella gente, punto",
  },
  {
    number: "03",
    title: "Zero Pensieri",
    description:
      "Tutto organizzato nei minimi dettagli: voli, alloggi, esperienze. Tu devi solo goderti il viaggio",
  },
  {
    number: "04",
    title: "Una Community per la Vita",
    description:
      "Come i grandi gruppi nascono da amici che viaggiano insieme, il tuo network inizia qui",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="mb-16">
          <h2
            className="text-charcoal font-medium"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Perché scegliere <em className="font-display not-italic">The Grad Club</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 100}>
              <div className="border-t border-border-gray pt-6 pr-8 pb-6">
                <span className="text-light-gray font-display text-3xl block mb-4">
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
