"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Users, Calendar, Award } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    value: "50+",
    label: "Awards Won",
    color: "from-secondary to-tertiary",
  },
  {
    icon: Users,
    value: "500+",
    label: "Active Members",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Calendar,
    value: "100+",
    label: "Events Organized",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Award,
    value: "20+",
    label: "Partnerships",
    color: "from-purple-400 to-purple-600",
  },
]

export default function AboutAchievements() {
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
    <section ref={ref} className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Celebrating our milestones and impact on the student community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-xl neuro text-center hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
              >
                <item.icon size={32} />
              </div>
              <h3 className="text-4xl font-bold mb-2">{item.value}</h3>
              <p className="text-gray-700">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

