"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Ignite SA is a student community that boasts the most brilliant minds from our college. Comprising
              individuals from diverse fields, including tech area, all members possess exceptional skills in their
              respective domains and work in unison to make Ignite SA an exceptional entity.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our main objective is to create a space that nurtures self-improvement and development for our students,
              and we proudly declare ourselves as a community that is created, run, and dedicated to the students.
            </p>
            <p className="text-lg text-gray-700">
              We believe in the power of extracurricular activities to complement academic learning and provide students
              with a well-rounded educational experience that prepares them for future challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="glass rounded-2xl overflow-hidden neuro">
              <img src="/placeholder.svg?height=600&width=800" alt="Ignite SA Mission" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

