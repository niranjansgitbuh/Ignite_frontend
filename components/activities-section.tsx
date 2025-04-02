"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ActivitiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">ACTIVITIES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              Are you ready to light up the path of innovation and leadership? IGNITE Student Association at the
              Department of Emerging Science and Technology, is thrilled to announce that we're now looking for
              passionate and driven individuals to join our team for the upcoming year!
            </p>
            <p className="text-lg text-gray-300">
              Unlock the next level of experience in your college. Join Ignite Student association
            </p>
            <p className="text-lg font-semibold text-orange-500">
              NOTE: Only for all Emerging Science and Technology Department Students
            </p>

            <div className="pt-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full">
                APPLY NOW
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img src="/placeholder.svg?height=600&width=800" alt="Ignite Activities" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

