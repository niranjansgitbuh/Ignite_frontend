import JoinHero from "@/components/join/join-hero"
import JoinForm from "@/components/join/join-form"
import JoinBenefits from "@/components/join/join-benefits"

export default function JoinPage() {
  return (
    <div className="pt-16">
      <JoinHero />
      <JoinBenefits />
      <JoinForm />
    </div>
  )
}

