"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Lightbulb, Users, Music, BookOpen, Award } from "lucide-react"

const categories = [
  {
    icon: Code,
    name: "Technical",
    description: "Hackathons, coding competitions, and workshops",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    description: "Ideathons, design thinking, and problem-solving events",
  },
  {
    icon: Users,
    name: "Networking",
    description: "Industry meetups, alumni interactions, and career fairs",
  },
  {
    icon: Music,
    name: "Cultural",
    description: "Music, dance, art, and cultural celebrations",
  },
  {
    icon: BookOpen,
    name: "Educational",
    description: "Seminars, guest lectures, and educational workshops",
  },
  {
    icon: Award,
    name: "Competitions",
    description: "Various inter-college and intra-college competitions",
  },
]

export default function EventsCategories() {
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

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Event{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our diverse range of events designed to cater to various interests and skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer ${
                activeCategory === category.name ? "ring-2 ring-tertiary" : ""
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
              <p className="text-gray-700">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

