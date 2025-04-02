import AboutHero from "@/components/about/about-hero"
import AboutMission from "@/components/about/about-mission"
import AboutValues from "@/components/about/about-values"
import AboutAchievements from "@/components/about/about-achievements"
import AboutTimeline from "@/components/about/about-timeline"

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutAchievements />
      <AboutTimeline />
    </div>
  )
}

