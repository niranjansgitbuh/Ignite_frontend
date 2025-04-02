"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with binary pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 text-[200px] font-mono opacity-20">010100</div>
        <div className="absolute bottom-1/4 right-1/4 text-[150px] font-mono opacity-20">101010</div>
      </div>

      {/* Dragon illustration placeholder */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 opacity-20">
        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Dragon Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-orange-500">Ignite</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Student Association</h2>
            <h3 className="text-xl md:text-2xl mb-6">MIT- Chh. Sambhajinagar</h3>

            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Blending Curricular with Extracurricular activities for a Remarkable Learning Journey.
            </p>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full">
              Explore
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

