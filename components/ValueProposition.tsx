import AnimatedSection from "./AnimatedSection";

export default function ValueProposition() {
  return (
    <section className="bg-white section-luxury !pb-10 md:!pb-16 lg:!pb-20">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <AnimatedSection>
          <h2
            className="text-charcoal font-medium leading-relaxed"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Non vendiamo <em className="font-display not-italic">vacanze</em>.
            <br />
            <span className="text-medium-gray">
              Creiamo le <em className="font-display not-italic">connessioni</em> che definiranno il primo capitolo della tua vita dopo l&apos;università.
            </span>
          </h2>
          <div className="mt-8 mx-auto w-[40px] h-[1px] bg-border-gray" />
        </AnimatedSection>
      </div>
    </section>
  );
}
