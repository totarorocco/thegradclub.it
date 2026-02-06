"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-dvh min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      {/* Film Noise Overlay */}
      <div className="film-noise absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
        <h1
          className={`text-white font-light leading-[1.1] mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontSize: "var(--text-display)", letterSpacing: "var(--tracking-tight)" }}
        >
          Il <em className="font-display italic font-normal">viaggio di laurea</em> che ricorderai <em className="font-display italic font-normal">per sempre</em>
        </h1>

        <p
          className={`text-white/80 text-lg md:text-xl mb-12 max-w-[600px] mx-auto font-light transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Esperienze esclusive per neolaureati nelle destinazioni più iconiche del
          Mediterraneo e oltre
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#destinazioni"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#destinazioni")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-10 py-3.5 text-xs font-medium uppercase tracking-[0.2em] border border-white/60 text-white hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            Scopri le destinazioni
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-10 bg-white/30 mx-auto animate-pulse" />
      </div>
    </section>
  );
}
