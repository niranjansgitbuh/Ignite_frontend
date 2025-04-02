"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Instagram } from "lucide-react"

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
    name: "Team Member",
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
    name: "Team Member",
    role: "Secretary",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Team Member",
    role: "Treasurer",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
]

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">TEAM</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">Meet the brilliant minds behind Ignite.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>

                  <div className="flex justify-center space-x-4">
                    <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.socials.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.socials.instagram} className="text-gray-400 hover:text-pink-500 transition-colors">
                      <Instagram size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

