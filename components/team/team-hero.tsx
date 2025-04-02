"use client"

import { motion } from "framer-motion"

export default function TeamHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/10 animate-float" />
        <div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-tertiary/10 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Meet the brilliant minds behind Ignite Student Association
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl overflow-hidden neuro"
          >
            <img src="/placeholder.svg?height=600&width=1200" alt="Ignite Team" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

