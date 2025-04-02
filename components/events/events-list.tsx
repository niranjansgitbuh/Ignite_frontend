"use client"

import { useState, useRef } from "react"
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
    category: "Technical",
  },
  {
    id: 2,
    title: "Leadership Workshop",
    date: "November 5, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "MIT Campus, Seminar Hall",
    image: "/placeholder.svg?height=400&width=600",
    description: "Learn essential leadership skills from industry experts and successful entrepreneurs.",
    category: "Educational",
  },
  {
    id: 3,
    title: "Cultural Fest",
    date: "December 10, 2023",
    time: "10:00 AM - 8:00 PM",
    location: "MIT Campus, Open Ground",
    image: "/placeholder.svg?height=400&width=600",
    description: "Celebrate diversity through music, dance, art, and food from different cultures.",
    category: "Cultural",
  },
  {
    id: 4,
    title: "Industry Connect",
    date: "January 15, 2024",
    time: "11:00 AM - 4:00 PM",
    location: "MIT Campus, Conference Hall",
    image: "/placeholder.svg?height=400&width=600",
    description: "Network with industry professionals and explore career opportunities in various fields.",
    category: "Networking",
  },
  {
    id: 5,
    title: "Ideathon",
    date: "February 8, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "MIT Campus, Innovation Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Brainstorm and pitch innovative ideas to solve pressing social and environmental challenges.",
    category: "Innovation",
  },
  {
    id: 6,
    title: "Inter-College Quiz Competition",
    date: "March 12, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "MIT Campus, Main Auditorium",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Test your knowledge and compete with students from different colleges in this exciting quiz competition.",
    category: "Competitions",
  },
]

export default function EventsList() {
  const [activeCategory, setActiveCategory] = useState("All")
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

  const filteredEvents = activeCategory === "All" ? events : events.filter((event) => event.category === activeCategory)

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-primary">
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
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join us for these exciting events and expand your horizons.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              className={activeCategory === "All" ? "bg-tertiary text-white" : "border-secondary text-secondary"}
              onClick={() => setActiveCategory("All")}
            >
              All
            </Button>
            {["Technical", "Educational", "Cultural", "Networking", "Innovation", "Competitions"].map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-tertiary text-white" : "border-secondary text-secondary"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event) => (
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
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary/20 text-secondary">
                    {event.category}
                  </span>
                </div>
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
      </div>
    </section>
  )
}

