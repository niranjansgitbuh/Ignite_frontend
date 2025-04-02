"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Users, Award, Heart, BookOpen, Zap } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and novel approaches to problem-solving.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do.",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "We welcome and respect students from all backgrounds and disciplines.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We promote lifelong learning and personal development.",
  },
  {
    icon: Zap,
    title: "Empowerment",
    description: "We equip students with the skills and confidence to succeed.",
  },
]

export default function AboutValues() {
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
    <section className="py-20 bg-gradient-to-b from-white to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The core principles that guide our community and shape our initiatives.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
                <value.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

