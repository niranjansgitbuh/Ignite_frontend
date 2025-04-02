"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Linkedin, Github, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    id: 1,
    name: "Tanmayie Patil",
    role: "President",
    department: "Computer Science",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Passionate about technology and community building. Leading Ignite SA with a vision to create a platform for holistic student development.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "tanmayie@example.com",
    },
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Vice President",
    department: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dedicated to fostering innovation and collaboration among students. Brings technical expertise and leadership skills to the team.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "rahul@example.com",
    },
  },
  {
    id: 3,
    name: "Priya Desai",
    role: "Technical Lead",
    department: "Computer Science",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in web development and programming. Leads technical projects and workshops to help students enhance their coding skills.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "priya@example.com",
    },
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Event Coordinator",
    department: "Management",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Creative and organized with a passion for event management. Ensures all Ignite SA events run smoothly and create memorable experiences.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "arjun@example.com",
    },
  },
  {
    id: 5,
    name: "Neha Gupta",
    role: "Marketing Head",
    department: "Media Studies",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Creative strategist with expertise in digital marketing. Manages Ignite SA's brand presence and outreach initiatives.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "neha@example.com",
    },
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Treasurer",
    department: "Finance",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Detail-oriented and responsible for managing Ignite SA's finances. Ensures resources are allocated efficiently for maximum impact.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "vikram@example.com",
    },
  },
  {
    id: 7,
    name: "Ananya Patel",
    role: "Creative Director",
    department: "Design",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Artistic visionary responsible for Ignite SA's visual identity. Creates engaging designs for events, merchandise, and digital platforms.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "ananya@example.com",
    },
  },
  {
    id: 8,
    name: "Rohan Deshmukh",
    role: "Outreach Coordinator",
    department: "Communications",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Excellent communicator who builds partnerships with other organizations and institutions. Expands Ignite SA's network and impact.",
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      email: "rohan@example.com",
    },
  },
]

export default function TeamGrid() {
  const [filter, setFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  const filteredMembers =
    filter === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.role === filter || member.department === filter)

  const roles = [
    "All",
    "President",
    "Vice President",
    "Technical Lead",
    "Event Coordinator",
    "Marketing Head",
    "Treasurer",
    "Creative Director",
    "Outreach Coordinator",
  ]
  const departments = [
    "All",
    "Computer Science",
    "Electronics",
    "Management",
    "Media Studies",
    "Finance",
    "Design",
    "Communications",
  ]

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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            The dedicated individuals who make Ignite SA possible.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Filter by Role</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {roles.map((role) => (
                <Button
                  key={role}
                  variant={filter === role ? "default" : "outline"}
                  className={filter === role ? "bg-tertiary text-white" : "border-secondary text-secondary"}
                  onClick={() => setFilter(role)}
                >
                  {role}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Filter by Department</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((department) => (
                <Button
                  key={department}
                  variant={filter === department ? "default" : "outline"}
                  className={filter === department ? "bg-tertiary text-white" : "border-secondary text-secondary"}
                  onClick={() => setFilter(department)}
                >
                  {department}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredMembers.map((member) => (
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
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-tertiary font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.department}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

