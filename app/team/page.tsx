import TeamHero from "@/components/team/team-hero"
import TeamGrid from "@/components/team/team-grid"
import TeamJoin from "@/components/team/team-join"

export default function TeamPage() {
  return (
    <div className="pt-16">
      <TeamHero />
      <TeamGrid />
      <TeamJoin />
    </div>
  )
}

