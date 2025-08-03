'use client'

import { m } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const Education = () => {
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

  const education = [
    {
      degree: 'Bachelor\'s Degree',
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: '01/2007 - 01/2011',
      description: 'Completed undergraduate studies in Computer Science/Engineering',
      achievements: [
        'Foundation in computer science and software engineering principles',
        'Developed strong analytical and problem-solving skills',
        'Gained theoretical knowledge applied in professional career'
      ]
    }
  ]

  const certifications = [
    {
      title: 'B1 Visa Holder',
      issuer: 'United States Government',
      year: '2018',
      description: 'Valid business visa with three professional visits to the United States'
    },
    {
      title: 'Team Leadership Certification',
      issuer: 'HSBC',
      year: '2019-2021',
      description: 'Led team of 9 developers on Guarantee Staff Channel project'
    },
    {
      title: 'Architecture Promotion',
      issuer: 'Persistent Systems',
      year: '2021',
      description: 'Promoted from Project Lead to Architect based on performance'
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <m.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Education & Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Academic foundation and professional achievements
            </p>
          </m.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <m.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 text-primary-600 mr-3" />
                Academic Background
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{edu.description}</p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </m.div>

            <m.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <Award className="w-6 h-6 text-primary-600 mr-3" />
                Professional Achievements
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{cert.description}</p>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Education 