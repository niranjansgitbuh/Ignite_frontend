import EventsHero from "@/components/events/events-hero"
import EventsList from "@/components/events/events-list"
import EventsCalendar from "@/components/events/events-calendar"
import EventsCategories from "@/components/events/events-categories"

export default function EventsPage() {
  return (
    <div className="pt-16">
      <EventsHero />
      <EventsCategories />
      <EventsList />
      <EventsCalendar />
    </div>
  )
}

