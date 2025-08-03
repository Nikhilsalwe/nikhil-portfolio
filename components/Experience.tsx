'use client'

import { m } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      title: 'Architect',
      company: 'Persistent Systems',
      location: 'Pune',
      period: '09/2021 - Present',
      description: [
        'Leading UI architecture and frontend development for the TaxSlayer project',
        'Created custom micro frontend architecture and shared libraries',
        'Designed and developed reusable components and seamless integrations using Azure DevOps',
        'Worked closely with clients for requirement gathering and delivering optimized solutions',
        'Promoted from Project Lead to Architect based on performance',
        'Worked on several migration projects: React 16 to React 18 and React CRA to Vite application',
        'Also worked on several projects with Node.js, GraphQL, and NGINX'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'HSBC',
      location: 'Pune',
      period: '06/2019 - 09/2021',
      description: [
        'Worked on Guarantee Staff Channel - Trade online tool with new customer experience to support Trade business growth',
        'Led a team of 9 developers on the Guarantee Staff Channel project',
        'Involved in full-stack development using ReactJS, NodeJS, HTML5, and REST APIs',
        'Engaged in requirement gathering, component development, API integration, and deployment'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Johnson Controls',
      location: 'Mumbai',
      period: '05/2016 - 06/2019',
      description: [
        'Worked on Verasys/CPO5 building automation systems',
        'Contributed to frontend and backend features using AngularJS, ReactJS, and NodeJS'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Pegasus Info Corp',
      location: 'Mumbai',
      period: '08/2014 - 05/2016',
      description: [
        'Worked with Johnson Controls',
        'Developed selection tools and quotation systems for Johnson Controls',
        'Built graphics-based UI applications for building automation systems'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'M&R Consultants Corporation',
      location: 'Thane',
      period: '04/2013 - 08/2014',
      description: [
        'Built cross-platform e-learning interfaces using HTML5, CSS3, and JavaScript',
        'Created reusable code library for interactive components, facilitating consistent design and functionality across all modules',
        'Increased team efficiency in module creation by 15%'
      ]
    },
    {
      title: 'XML Developer',
      company: 'M&R Consultants Corporation',
      location: 'Thane',
      period: '09/2011 - 08/2012',
      description: [
        'Built cross-platform e-learning interfaces using HTML5, CSS3, and JavaScript',
        'Created reusable code library for interactive components, facilitating consistent design and functionality across all modules',
        'Increased team efficiency in module creation by 15%'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <m.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over 12 years of progressive experience in software development and architecture
            </p>
          </m.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <m.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Experience 