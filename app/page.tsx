import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import EventsPreview from "@/components/home/events-preview"
import TeamPreview from "@/components/home/team-preview"
import TestimonialsSection from "@/components/home/testimonials-section"
import CtaSection from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <EventsPreview />
      <TeamPreview />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

