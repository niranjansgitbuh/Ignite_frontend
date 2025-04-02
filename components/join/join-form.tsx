"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ChevronRight, ChevronLeft, Check } from "lucide-react"

export default function JoinForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    skills: "",
    interests: "",
    experience: "",
    motivation: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    })

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      skills: "",
      interests: "",
      experience: "",
      motivation: "",
    })

    setStep(4) // Success step
    setIsSubmitting(false)
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apply to{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Join</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Fill out the application form below to join Ignite Student Association.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-xl p-8 md:p-12 neuro"
          >
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= item ? "bg-tertiary text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > item ? <Check size={20} /> : item}
                  </div>
                  <span className="text-sm mt-2">
                    {item === 1 ? "Personal Info" : item === 2 ? "Academic Info" : "Experience"}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-tertiary text-white hover:bg-tertiary/90 rounded-lg neuro"
                    >
                      Next <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Academic Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold mb-4">Academic Information</h3>

                  <div className="space-y-2">
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary"
                    >
                      <option value="">Select Department</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Civil">Civil</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Information Technology">Information Technology</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                      Year of Study
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary"
                    >
                      <option value="">Select Year</option>
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Fourth Year">Fourth Year</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                      Skills
                    </label>
                    <Textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="List your technical and non-technical skills"
                      required
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="px-6 py-3 border-secondary text-secondary hover:bg-secondary/10 rounded-lg neuro"
                    >
                      <ChevronLeft size={16} className="mr-2" /> Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-tertiary text-white hover:bg-tertiary/90 rounded-lg neuro"
                    >
                      Next <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Experience */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold mb-4">Experience & Motivation</h3>

                  <div className="space-y-2">
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                      Areas of Interest
                    </label>
                    <Textarea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      placeholder="What areas are you interested in? (e.g., coding, design, event management)"
                      required
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Previous Experience
                    </label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Describe any relevant experience you have"
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                      Motivation to Join
                    </label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Why do you want to join Ignite Student Association?"
                      required
                      className="w-full px-4 py-3 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="px-6 py-3 border-secondary text-secondary hover:bg-secondary/10 rounded-lg neuro"
                    >
                      <ChevronLeft size={16} className="mr-2" /> Previous
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-tertiary text-white hover:bg-tertiary/90 rounded-lg neuro"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
                  <p className="text-gray-700 mb-8">
                    Thank you for applying to join Ignite Student Association. We'll review your application and get
                    back to you soon.
                  </p>
                  <Button
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="px-6 py-3 border-secondary text-secondary hover:bg-secondary/10 rounded-lg neuro"
                  >
                    Submit Another Application
                  </Button>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

