"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: "2018",
    title: "Foundation",
    description:
      "Ignite Student Association was founded by a group of passionate students with a vision to create a platform for holistic development.",
  },
  {
    year: "2019",
    title: "First Major Event",
    description:
      "Organized our first major tech hackathon with participation from over 200 students across different colleges.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Successfully transitioned to virtual events during the pandemic, reaching a wider audience and expanding our community.",
  },
  {
    year: "2021",
    title: "Strategic Partnerships",
    description:
      "Established partnerships with industry leaders to provide students with real-world exposure and opportunities.",
  },
  {
    year: "2022",
    title: "Community Expansion",
    description:
      "Expanded our reach to include students from all departments, creating a truly diverse and inclusive community.",
  },
  {
    year: "2023",
    title: "Innovation Hub",
    description:
      "Launched our dedicated innovation hub, providing resources and mentorship for student projects and startups.",
  },
]

export default function AboutTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The evolution of Ignite Student Association over the years.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-tertiary transform md:translate-x-[-0.5px]" />

            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                } md:w-1/2`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <div
                    className={`absolute ${
                      index % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                    } left-[-8px] w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-tertiary z-10`}
                  />
                  <div className={`glass rounded-xl p-6 neuro ${index % 2 === 0 ? "ml-6 md:ml-0" : "ml-6"}`}>
                    <div className="text-tertiary font-bold text-xl mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

