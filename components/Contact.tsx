'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'salwenikhil0724@gmail.com',
      link: 'mailto:salwenikhil0724@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9766463015',
      link: 'tel:+919766463015'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, India',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nikhil-salwe-526a5335/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/Nikhilsalwe',
      color: 'hover:text-gray-800'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              and innovative ideas. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-lg font-medium text-gray-800 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-gray-800">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  I'm always open to discussing new opportunities, interesting projects, 
                  and innovative ideas in software architecture and development.
                </p>
                <p>
                  Whether you're looking to collaborate on a project, discuss technology 
                  trends, or explore potential opportunities, feel free to reach out!
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:salwenikhil0724@gmail.com"
                    className="btn-primary inline-flex items-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 