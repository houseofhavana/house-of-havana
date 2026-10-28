import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ 
  className,
  width = 136, 
  height = 50 
}) => {
  return (
    <Image src="/logo.png" alt="House of Havana" className={className} width={width} height={height} />
  )
}

export default Logo 