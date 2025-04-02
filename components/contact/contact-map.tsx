"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ContactMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Visit our campus location at MIT College, Chh. Sambhajinagar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-xl overflow-hidden neuro"
        >
          <div className="h-[500px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2133694544146!2d75.32302931491133!3d19.87152998664296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a3d774!2sMIT%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

