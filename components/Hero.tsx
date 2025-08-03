'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Github } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container-custom text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Nikhil Salwe
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl lg:text-3xl text-gray-700 mb-8 font-medium"
          >
            Software Architect
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Seasoned Software Architect with over 12 years of experience in designing, developing, 
            and delivering scalable and high-performance web applications. Currently leading frontend 
            architecture and development at Persistent Systems for the TaxSlayer project.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            <a
              href="/Nikhil Salwe - Architect Resume.pdf"
              download
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://www.linkedin.com/in/nikhil-salwe-526a5335/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Nikhilsalwe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 