"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">ABOUT</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            From Classroom to Community: Where Growth Happens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              Ignite SA is a student community that boasts the most brilliant minds from our college. Comprising
              individuals from diverse fields, including tech area, all members possess exceptional skills in their
              respective domains and work in unison to make Ignite SA an exceptional entity.
            </p>
            <p className="text-lg text-gray-300">
              Our main objective is to create a space that nurtures self-improvement and development for our students,
              and we proudly declare ourselves as a community that is created, run, and dedicated to the students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Ignite Student Association"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

