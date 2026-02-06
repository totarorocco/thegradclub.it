import AnimatedSection from "./AnimatedSection";

export default function ValueProposition() {
  return (
    <section className="bg-white section-luxury !pb-10 md:!pb-16 lg:!pb-20">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <AnimatedSection>
          <h2
            className="text-charcoal font-light leading-relaxed"
            style={{ fontSize: "var(--text-h2)" }}
          >
            La nostra visione del <em className="font-display italic not-italic">viaggio di laurea</em>?
            <br />
            <span className="text-medium-gray">
              Esclusivo, <em className="font-display italic not-italic">curato nei dettagli</em>, e pensato per celebrare il tuo traguardo.
            </span>
          </h2>
          <div className="mt-8 mx-auto w-[40px] h-[1px] bg-border-gray" />
        </AnimatedSection>
      </div>
    </section>
  );
}
