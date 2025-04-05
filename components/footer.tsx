import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              IGNITE SA
            </h3>
            <p className="text-gray-700 mb-4">
              Blending Curricular with Extracurricular for a Remarkable Learning Journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-tertiary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-tertiary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-tertiary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-tertiary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-tertiary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-tertiary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-tertiary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-tertiary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-tertiary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-tertiary flex-shrink-0 mt-1" />
                <span className="text-gray-600">MIT College, Chh. Sambhajinagar, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-tertiary flex-shrink-0" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-tertiary flex-shrink-0" />
                <span className="text-gray-600">info@ignitesa.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-600 mb-4">Stay updated with our latest events and news.Stay tuned with us for exciting updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg neuro-inset focus:outline-none focus:ring-2 focus:ring-tertiary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-tertiary text-white rounded-lg neuro hover:bg-tertiary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Ignite Student Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

