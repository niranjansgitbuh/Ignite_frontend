"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
  { name: "Join Ignite", path: "/join", highlight: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2 glass shadow-lg" : "py-4 bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                IGNITE SA
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "relative px-4 py-2 rounded-lg transition-all duration-300",
                  pathname === item.path ? "text-tertiary font-medium" : "text-foreground hover:text-tertiary",
                  item.highlight && "ml-2",
                )}
              >
                {item.highlight ? (
                  <Button className="bg-tertiary text-white hover:bg-tertiary/90 neuro">{item.name}</Button>
                ) : (
                  <>
                    {item.name}
                    {pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-tertiary"
                        layoutId="navbar-underline"
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 rounded-full neuro"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={cn(
                      "px-4 py-2 rounded-lg transition-all duration-300",
                      pathname === item.path
                        ? "bg-secondary/10 text-tertiary font-medium"
                        : "text-foreground hover:bg-secondary/10 hover:text-tertiary",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

