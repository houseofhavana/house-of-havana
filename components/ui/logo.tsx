import React from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ 
  width = 136, 
  height = 50 
}) => {
  return (
    <img src="/logo.png" alt="Logo" width={width} height={height} />
  )
}

export default Logo 