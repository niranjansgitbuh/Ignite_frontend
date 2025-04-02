"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock event data
const events = [
  {
    id: "1",
    title: "Tech Hackathon 2023",
    date: "October 15, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "MIT Campus, Main Auditorium",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Join us for a 24-hour coding marathon to build innovative solutions for real-world problems. This hackathon is open to students from all departments and skill levels. Whether you're a beginner or an experienced coder, this event offers a great opportunity to learn, collaborate, and create something meaningful.\n\nParticipants will work in teams of 3-4 members to develop solutions for challenges in areas such as healthcare, education, sustainability, and more. Mentors from industry will be available to guide teams throughout the event.",
    category: "Technical",
    organizer: "Ignite Technical Team",
    capacity: 100,
    registrationDeadline: "October 10, 2023",
    requirements:
      "Laptop, charger, and enthusiasm for coding. Basic programming knowledge is helpful but not required.",
    prizes:
      "First Prize: ₹10,000, Second Prize: ₹5,000, Third Prize: ₹3,000, and exciting goodies for all participants.",
  },
  {
    id: "2",
    title: "Leadership Workshop",
    date: "November 5, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "MIT Campus, Seminar Hall",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Learn essential leadership skills from industry experts and successful entrepreneurs. This workshop is designed to help students develop the leadership qualities needed in today's competitive world.\n\nThe workshop will cover topics such as effective communication, team management, decision-making, conflict resolution, and personal branding. Through interactive sessions and practical exercises, participants will gain valuable insights and tools to enhance their leadership capabilities.",
    category: "Educational",
    organizer: "Ignite Management Team",
    capacity: 50,
    registrationDeadline: "November 1, 2023",
    requirements: "Notebook and pen. No prior experience required.",
    prizes: "Certificate of participation and leadership resource kit.",
  },
  {
    id: "3",
    title: "Cultural Fest",
    date: "December 10, 2023",
    time: "10:00 AM - 8:00 PM",
    location: "MIT Campus, Open Ground",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Celebrate diversity through music, dance, art, and food from different cultures. The Cultural Fest is one of the most anticipated events of the year, bringing together students from various backgrounds to showcase their cultural heritage.\n\nThe event will feature performances, exhibitions, workshops, and food stalls representing different cultures. It's a day of learning, appreciation, and celebration of the rich diversity within our college community.",
    category: "Cultural",
    organizer: "Ignite Cultural Team",
    capacity: 500,
    registrationDeadline: "December 5, 2023",
    requirements: "For performers: Register your act in advance. For attendees: Just bring your enthusiasm!",
    prizes: "Various awards for best performances and cultural displays.",
  },
]

export default function EventPage() {
  const params = useParams()
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate API call
    const fetchEvent = async () => {
      setLoading(true)
      // Find event by ID
      const foundEvent = events.find(e => e.id === params.id)
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setEvent(foundEvent || null)
      setLoading(false)
    }
    
    fetchEvent()
  }, [params.id])
  
  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="glass p-8 rounded-xl neuro">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }
  
  if (!event) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="glass p-8 rounded-xl neuro text-center">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <p className="text-gray-700 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Link href="/events">
            <Button className="bg-tertiary text-white hover:bg-tertiary/90 neuro">
              <ArrowLeft size={16} className="mr-2" /> Back to Events
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4">
        <Link href="/events" className="inline-flex items-center text-gray-600 hover:text-tertiary mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Events
        </Link>
        
        <div className="glass rounded-xl overflow-hidden neuro mb-12">
          <div className="h-[400px] md:h-[500px] relative">
            <img 
              src={event.image || "/placeholder.svg"} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-tertiary/80 text-white mb-4">
                    {event.category}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    {event.title}
                  </h1>
                  <p className="text-white/80 text-lg">
                    Organized by {event.organizer}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-xl p-8 neuro mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">About This Event</h2>
              <div className="text-gray-700 space-y-4">
                {event.description.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-xl p-8 neuro mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Requirements</h2>
              <p className="text-gray-700">{event.requirements}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass rounded-xl p-8 neuro"
            >
              <h2 className="text-2xl font-bold mb-6">Prizes & Rewards</h2>
              <p className="text-gray-700">{event.prizes}</p>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-xl p-8 neuro mb-8 sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6">Event Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar size={20} className="text-tertiary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Date</h3>
                    <p className="text-gray-700">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="\

