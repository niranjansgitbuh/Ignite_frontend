"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Briefcase, BookOpen, Zap, Globe } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Recognition",
    description: "Gain recognition for your skills and contributions within the college community.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with like-minded peers, alumni, and industry professionals.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Access exclusive internship and job opportunities through our industry partners.",
  },
  {
    icon: BookOpen,
    title: "Skill Development",
    description: "Enhance your technical, leadership, and communication skills through hands-on experience.",
  },
  {
    icon: Zap,
    title: "Personal Growth",
    description: "Develop confidence, resilience, and a growth mindset through challenging projects.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description: "Make a positive difference in the college and wider community through meaningful initiatives.",
  },
]

export default function JoinBenefits() {
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
            Why{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Join Us</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the benefits of becoming a member of Ignite Student Association.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

