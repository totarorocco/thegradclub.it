"use client";

import { useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const tabData = [
  {
    label: "I nostri preferiti",
    destinations: [
      { name: "Mexico", image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80" },
      { name: "Repubblica Dominicana", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80" },
      { name: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80" },
      { name: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80" },
      { name: "Grecia", image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&q=80" },
      { name: "Colombia", image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800&q=80" },
      { name: "Croazia", image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80" },
      { name: "Thailandia", image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80" },
    ],
  },
  {
    label: "Viaggi in estate",
    destinations: [
      { name: "Grecia", image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&q=80" },
      { name: "Croazia", image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80" },
      { name: "Ibiza", image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=800&q=80" },
      { name: "Sardegna", image: "https://images.unsplash.com/photo-1598887142487-3c854d51eabb?w=800&q=80" },
      { name: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80" },
      { name: "Colombia", image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800&q=80" },
      { name: "Zante", image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&q=80" },
    ],
  },
  {
    label: "Viaggi di Pasqua",
    destinations: [
      { name: "Mexico", image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80" },
      { name: "Repubblica Dominicana", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80" },
      { name: "Colombia", image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=800&q=80" },
    ],
  },
];

export default function TrendingDestinations() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const currentDestinations = tabData[activeTab].destinations;

  return (
    <section id="destinazioni" className="bg-white section-luxury">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-10">
          <h2
            className="text-charcoal font-medium leading-tight mb-5"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Viaggia oltre i{" "}
            <em className="font-display not-italic">luoghi comuni</em>
          </h2>
          <p className="text-medium-gray text-lg max-w-[640px] mx-auto leading-relaxed">
            Ogni destinazione, un nuovo gruppo di persone ambiziose come te.
            Scegli dove inizia il tuo prossimo capitolo.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection className="flex justify-center gap-3 mb-10">
          {tabData.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => {
                setActiveTab(i);
                setHoveredIndex(null);
                if (scrollRef.current) scrollRef.current.scrollLeft = 0;
              }}
              className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all cursor-pointer ${
                activeTab === i
                  ? "bg-charcoal text-white"
                  : "border border-border-gray text-charcoal hover:border-charcoal"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {currentDestinations.map((dest, i) => (
                <div
                  key={dest.name}
                  className="shrink-0 cursor-pointer"
                  style={{
                    width: hoveredIndex === i ? "320px" : "200px",
                    transition: "width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                >
                  <div className="h-[380px] rounded-md overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-charcoal text-xl mt-3">
                    {dest.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Scroll arrow */}
            <button
              onClick={scrollRight}
              aria-label="Scorri destinazioni"
              className="hidden md:flex absolute right-0 top-[190px] -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white border border-border-gray rounded-full items-center justify-center hover:bg-off-white transition-colors z-10 shadow-sm"
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
