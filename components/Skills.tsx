'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Users, Lightbulb } from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code,
      skills: [
        { name: 'React JS', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind', level: 90 }
      ]
    },
    {
      title: 'Backend & Cloud',
      icon: Users,
      skills: [
        { name: 'Node JS', level: 90 },
        { name: 'GraphQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'AWS (Basic)', level: 75 },
        { name: 'Docker', level: 80 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Lightbulb,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'LangChain', level: 80 },
        { name: 'LLM', level: 80 },
        { name: 'Agentic AI', level: 75 },
        { name: 'Vector DB', level: 75 }
      ]
    },
    {
      title: 'Specializations',
      icon: Palette,
      skills: [
        { name: 'Micro Frontend Architecture', level: 90 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Team Leadership', level: 90 },
        { name: 'Migration Projects', level: 85 },
        { name: 'Azure DevOps', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise in modern web technologies, AI/ML, and software architecture
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 card-hover"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-primary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">B1 Visa Holder</h4>
                <p className="text-sm text-gray-600">Three professional visits to the United States in 2018</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Team Leadership</h4>
                <p className="text-sm text-gray-600">Led team of 9 developers at HSBC</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">Architecture Promotion</h4>
                <p className="text-sm text-gray-600">Promoted from Project Lead to Architect at Persistent Systems</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 