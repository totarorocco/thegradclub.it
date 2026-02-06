"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Destinazioni", href: "#destinazioni" },
  { label: "Come Funziona", href: "#come-funziona" },
  { label: "Esperienze", href: "#esperienze" },
  { label: "Recensioni", href: "#recensioni" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Logo variant={scrolled ? "dark" : "light"} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-[0.85rem] font-normal tracking-wide uppercase transition-colors cursor-pointer ${
                  scrolled
                    ? "text-charcoal/70 hover:text-charcoal"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#newsletter"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#newsletter");
              }}
              className={`hidden sm:inline-block px-6 py-2 text-xs font-medium uppercase tracking-[0.15em] border transition-all ${
                scrolled
                  ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-charcoal"
              }`}
            >
              Prenota Ora
            </a>

            {/* Hamburger */}
            <button
              className={`lg:hidden p-2 cursor-pointer transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-charcoal text-3xl hover:text-medium-gray transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#newsletter");
            }}
            className="mt-4 px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all"
          >
            Prenota Ora
          </a>
        </div>
      )}
    </>
  );
}
