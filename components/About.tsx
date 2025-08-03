'use client'

import { m } from 'framer-motion'
import { User, MapPin, Phone, Mail, Calendar } from 'lucide-react'

const About = () => {
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

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Pune, India' },
    { icon: Phone, label: 'Phone', value: '+91 9766463015' },
    { icon: Mail, label: 'Email', value: 'salwenikhil0724@gmail.com' },
    { icon: Calendar, label: 'Experience', value: '12+ Years' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <m.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8 gradient-text">Professional Summary</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Seasoned Software Architect with over 12 years of experience in designing, developing, 
                and delivering scalable and high-performance web applications across diverse domains. 
                Currently leading frontend architecture and development at Persistent Systems for the 
                TaxSlayer project.
              </p>
              <p>
                Proficient in modern JavaScript frameworks and technologies including ReactJS, NodeJS, 
                AngularJS, HTML5, and CSS3. Actively exploring the AI space with hands-on experience 
                in building intelligent agent-based applications using Python, LangChain, JavaScript, 
                and LLMs.
              </p>
            </div>
          </m.div>

          <m.div variants={itemVariants} className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <info.icon className="w-5 h-5 text-primary-600" />
                    <div>
                      <span className="text-sm text-gray-500">{info.label}</span>
                      <p className="font-medium text-gray-800">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-primary-700">Architecture</h4>
                  <p className="text-sm text-gray-600">Scalable design</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-primary-700">Frontend</h4>
                  <p className="text-sm text-gray-600">Modern frameworks</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-primary-700">AI/ML</h4>
                  <p className="text-sm text-gray-600">LLM & LangChain</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <h4 className="font-semibold text-primary-700">Leadership</h4>
                  <p className="text-sm text-gray-600">Team management</p>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}

export default About 