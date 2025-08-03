'use client'

import MotionWrapper from '@/components/MotionWrapper'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <MotionWrapper>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </MotionWrapper>
  )
} 