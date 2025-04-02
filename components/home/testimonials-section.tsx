"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Aditya Kumar",
    role: "Computer Science Student",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Being part of Ignite SA has been a transformative experience. The skills I've gained and the connections I've made have been invaluable for my personal and professional growth.",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Electronics Engineering Student",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Ignite SA provided me with opportunities to apply my theoretical knowledge in practical scenarios. The supportive community and mentorship have helped me excel in my field.",
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    role: "Mechanical Engineering Student",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The events organized by Ignite SA are not just educational but also fun and engaging. I've learned so much while making lifelong friends and memories.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

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
            What Our{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Students</span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from the students who have been part of our journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-xl p-8 md:p-12 neuro"
            >
              <Quote size={48} className="text-tertiary/20 mb-6" />
              <p className="text-lg md:text-xl text-gray-700 mb-8">{testimonials[current].quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[current].name}</h4>
                  <p className="text-gray-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prev}
                className="p-2 rounded-full neuro hover:bg-secondary/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === current ? "bg-tertiary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full neuro hover:bg-secondary/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

