"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "Tech Hackathon 2023",
    date: "October 15, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "MIT Campus, Main Auditorium",
    image: "/placeholder.svg?height=400&width=600",
    description: "Join us for a 24-hour coding marathon to build innovative solutions for real-world problems.",
  },
  {
    id: 2,
    title: "Leadership Workshop",
    date: "November 5, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "MIT Campus, Seminar Hall",
    image: "/placeholder.svg?height=400&width=600",
    description: "Learn essential leadership skills from industry experts and successful entrepreneurs.",
  },
  {
    id: 3,
    title: "Cultural Fest",
    date: "December 10, 2023",
    time: "10:00 AM - 8:00 PM",
    location: "MIT Campus, Open Ground",
    image: "/placeholder.svg?height=400&width=600",
    description: "Celebrate diversity through music, dance, art, and food from different cultures.",
  },
]

export default function EventsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Participate in our exciting events and expand your horizons.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden neuro hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2 text-tertiary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2 text-tertiary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 text-tertiary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Link href={`/events/${event.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary/10 neuro"
                  >
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/events">
            <Button className="px-8 py-6 bg-tertiary text-white hover:bg-tertiary/90 rounded-full neuro text-lg">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

