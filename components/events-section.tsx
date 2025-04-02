"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    id: 1,
    title: "Tech Workshop",
    date: "October 15, 2023",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Hackathon",
    date: "November 5, 2023",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Guest Lecture",
    date: "December 10, 2023",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">EVENT</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Participate in our exciting events and activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

