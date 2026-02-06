import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import TeamSection from "@/components/TeamSection";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import Benefits from "@/components/Benefits";
import TrendingDestinations from "@/components/TrendingDestinations";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <TrendingDestinations />
        <ExperienceCarousel />
        <TeamSection />
        <HowItWorks />
        <ReviewsSection />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
