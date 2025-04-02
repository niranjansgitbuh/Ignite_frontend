"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Linkedin, Github, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Tanmayie Patil",
    role: "President",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Vice President",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Priya Desai",
    role: "Technical Lead",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Event Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
]

export default function TeamPreview() {
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
    <section className="py-20 bg-gradient-to-b from-white to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The brilliant minds behind Ignite Student Association.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden neuro hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="relative group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <a href={member.socials.linkedin} className="text-white hover:text-secondary transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.socials.github} className="text-white hover:text-secondary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.socials.instagram} className="text-white hover:text-secondary transition-colors">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-tertiary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/team">
            <Button className="px-8 py-6 bg-tertiary text-white hover:bg-tertiary/90 rounded-full neuro text-lg">
              View Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

