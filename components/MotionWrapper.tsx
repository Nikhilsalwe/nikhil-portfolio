'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

interface MotionWrapperProps {
  children: React.ReactNode
}

const MotionWrapper = ({ children }: MotionWrapperProps) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}

export default MotionWrapper 