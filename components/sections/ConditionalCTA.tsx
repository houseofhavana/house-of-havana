'use client'

import { usePathname } from 'next/navigation'
import BookingCTA from './BookingCTA'

const ConditionalCTA = () => {
  const pathname = usePathname()
  
  // Don't show CTA on these pages
  const excludedPaths = ['/', '/book', '/contact']
  
  // Check if current path should exclude CTA
  if (excludedPaths.includes(pathname)) {
    return null
  }
  
  // CTA ALWAYS uses bg-surface (per user requirement)
  return <BookingCTA variant="default" bgSurface={true} />
}

export default ConditionalCTA

