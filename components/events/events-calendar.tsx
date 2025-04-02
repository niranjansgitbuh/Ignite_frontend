"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const eventDates = {
  "2023-10-15": { title: "Tech Hackathon", category: "Technical" },
  "2023-11-05": { title: "Leadership Workshop", category: "Educational" },
  "2023-12-10": { title: "Cultural Fest", category: "Cultural" },
  "2024-01-15": { title: "Industry Connect", category: "Networking" },
  "2024-02-08": { title: "Ideathon", category: "Innovation" },
  "2024-03-12": { title: "Quiz Competition", category: "Competitions" },
}

export default function EventsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 md:h-24"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const hasEvent = eventDates[dateString as keyof typeof eventDates]

      days.push(
        <div key={day} className={`h-12 md:h-24 p-1 border border-gray-200 ${hasEvent ? "bg-secondary/10" : ""}`}>
          <div className="flex flex-col h-full">
            <span className={`text-sm ${hasEvent ? "font-bold" : ""}`}>{day}</span>
            {hasEvent && (
              <div className="mt-1 md:mt-2">
                <span className="text-xs md:text-sm font-medium text-tertiary truncate block">{hasEvent.title}</span>
                <span className="hidden md:block text-xs text-gray-600">{hasEvent.category}</span>
              </div>
            )}
          </div>
        </div>,
      )
    }

    return days
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
            Events{" "}
            <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Calendar</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plan ahead and mark your calendar for our upcoming events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-xl p-4 md:p-6 neuro"
        >
          <div className="flex justify-between items-center mb-6">
            <Button variant="outline" size="icon" onClick={prevMonth} className="neuro">
              <ChevronLeft size={20} />
            </Button>
            <h3 className="text-xl font-semibold">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <Button variant="outline" size="icon" onClick={nextMonth} className="neuro">
              <ChevronRight size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="h-8 font-semibold text-center">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

