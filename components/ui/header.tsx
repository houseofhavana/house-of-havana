import React from 'react'

interface HeaderProps {
  text: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ text, className }) => {
  return (
    <div className={`text-sm border-t border-foreground/10 pt-2 ${className}`}>{text}</div>
  )
}

export default Header