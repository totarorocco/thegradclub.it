import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Scegli la destinazione",
    description: "Esplora le nostre mete e trova quella perfetta per il tuo gruppo",
  },
  {
    number: "02",
    title: "Personalizza il viaggio",
    description: "Il tuo travel designer crea l'itinerario su misura per te",
  },
  {
    number: "03",
    title: "Prenota in sicurezza",
    description: "Pagamento rateizzabile, conferma immediata, zero stress",
  },
  {
    number: "04",
    title: "Parti e goditi ogni momento",
    description: "Assistenza 24/7 e un coordinatore sempre presente",
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="bg-white section-luxury">
      <div className="max-w-[800px] mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-charcoal font-light"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Come funziona <em className="font-display italic">The Grad Club</em>
          </h2>
        </AnimatedSection>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 150}>
              <div className="border-t border-border-gray pt-8 pb-8">
                <div className="flex gap-8 items-start">
                  <span className="text-light-gray font-display text-4xl md:text-5xl italic shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-charcoal font-medium text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-medium-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
