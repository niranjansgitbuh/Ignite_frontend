"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamJoin() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/10 animate-float" />
        <div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-tertiary/10 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center glass p-12 rounded-2xl neuro"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Are you passionate, creative, and driven? We're always looking for talented individuals to join our team and
            make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button className="px-8 py-6 bg-tertiary text-white hover:bg-tertiary/90 rounded-full neuro text-lg">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-8 py-6 border-secondary text-secondary hover:bg-secondary/10 rounded-full neuro text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

