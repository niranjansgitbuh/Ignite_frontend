"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function ContactInfo() {
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
            Get In{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you. Here's how you can reach us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
            <p className="text-gray-700">
              MIT College, Chh. Sambhajinagar,
              <br />
              Maharashtra, India
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-gray-700">
              +91 98765 43210
              <br />
              +91 98765 43211
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Us</h3>
            <p className="text-gray-700">
              info@ignitesa.org
              <br />
              support@ignitesa.org
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl neuro hover:translate-y-[-5px] transition-transform duration-300 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-r from-secondary to-tertiary flex items-center justify-center text-white">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 9AM - 5PM
              <br />
              Saturday: 10AM - 2PM
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

