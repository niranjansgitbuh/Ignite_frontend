"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(202, 141, 102, 0.15), transparent 40%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/10 animate-float" />
        <div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-tertiary/10 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-secondary/10 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Ignite</span>{" "}
              Student Association
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Blending Curricular with Extracurricular for a Remarkable Learning Journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/join">
                <Button className="px-8 py-6 bg-tertiary text-white hover:bg-tertiary/90 rounded-full neuro text-lg">
                  Join Ignite
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant="outline"
                  className="px-8 py-6 border-secondary text-secondary hover:bg-secondary/10 rounded-full neuro text-lg"
                >
                  Explore Events
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] glass rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Ignite Student Association"
                className="w-full h-full object-cover"
              />

              {/* Floating badges */}
              <motion.div
                className="absolute top-8 left-8 glass px-4 py-2 rounded-full text-sm font-medium"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
              >
                Innovation
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 glass px-4 py-2 rounded-full text-sm font-medium"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, delay: 1 }}
              >
                Leadership
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-8 glass px-4 py-2 rounded-full text-sm font-medium"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, delay: 2 }}
              >
                Community
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

