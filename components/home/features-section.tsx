"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Users, Calendar, Award, BookOpen, Rocket } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "A space for creative minds to collaborate and bring ideas to life.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Creating a strong network of students with diverse skills and interests.",
  },
  {
    icon: Calendar,
    title: "Regular Events",
    description: "Workshops, hackathons, and social gatherings to enhance learning.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Celebrating student achievements and providing platforms for growth.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description: "Peer-to-peer learning opportunities and mentorship programs.",
  },
  {
    icon: Rocket,
    title: "Career Launchpad",
    description: "Preparing students for professional success through practical experiences.",
  },
]

export default function FeaturesSection() {
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
    <section className="py-20 bg-gradient-to-b from-primary to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Ignite SA</span>{" "}
            Special
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We create opportunities for students to grow beyond the classroom and develop essential skills for the
            future.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

