"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-off-white section-luxury relative overflow-hidden">
      <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <h2
            className="text-charcoal font-medium mb-4"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Il primo passo inizia <em className="font-display not-italic">qui</em>
          </h2>
          <p className="text-medium-gray text-lg mb-10 leading-relaxed">
            Entra nella community. Ricevi per primo le date dei prossimi viaggi,
            i posti limitati e le storie di chi ha già vissuto l&apos;esperienza Grad Club.
          </p>

          {submitted ? (
            <div className="border border-border-gray p-8">
              <p className="text-charcoal font-medium text-lg">Perfetto, sei dentro!</p>
              <p className="text-medium-gray text-sm mt-2">Ti avviseremo appena ci saranno novità.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row items-stretch gap-4 max-w-[480px] mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email universitaria"
                  required
                  className="flex-1 px-0 py-3 text-charcoal bg-transparent outline-none text-[0.95rem] placeholder:text-light-gray border-b border-border-gray focus:border-charcoal transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="bg-charcoal text-white px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] hover:bg-primary-dark transition-colors cursor-pointer shrink-0"
                >
                  Iscriviti
                </button>
              </div>
            </form>
          )}

          <p className="text-light-gray text-xs mt-8">
            Unisciti a 3.000+ neolaureati. Niente spam, solo cose che contano.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
