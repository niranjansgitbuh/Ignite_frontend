"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">CONTACT US</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">Get in touch with the Ignite team.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img src="/placeholder.svg?height=600&width=800" alt="Contact Ignite" className="w-full h-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email ID
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

