'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2025 Nikhil Salwe. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-300 text-sm">
              Made with <Heart className="inline w-4 h-4 text-red-500" /> in India
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 