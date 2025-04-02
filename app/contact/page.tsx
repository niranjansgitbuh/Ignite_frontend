import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactMap from "@/components/contact/contact-map"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </div>
  )
}

