'use client'

import React from 'react'

interface ScrollTriggerProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  trigger?: 'once' | 'always'
  offset?: number
}

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  trigger = 'once',
  offset = 0
}) => {
  const scrollProps = {
    'data-scroll': true,
    'data-scroll-direction': direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical',
    'data-scroll-speed': speed,
    'data-scroll-trigger': trigger,
    'data-scroll-offset': offset,
  }

  return (
    <div className={className} {...scrollProps}>
      {children}
    </div>
  )
}

export default ScrollTrigger 