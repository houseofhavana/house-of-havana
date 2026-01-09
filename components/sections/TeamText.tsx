import React from 'react'
import TeamCard from '../ui/team-card'
import Header from '../ui/header'

interface TeamTextProps {
  bgSurface?: boolean
  className?: string
  header?: string
  parentClasses?: string
  children: React.ReactNode
}

const TeamText = ({bgSurface = true, children, className, parentClasses, header}: TeamTextProps) => {
  return (
    <div className={`${bgSurface ? 'bg-surface' : ''} ${parentClasses}`}>
      <div className={`container ${header ? 'pt-5 pb-16' : 'py-16'}`}>
            {header && (
              <Header text={header} className='mb-26' />
            )}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
            <div className={`md:col-span-2 flex flex-col justify-center gap-16 ${className}`}>
              {children}
            </div>
            <TeamCard 
                image={{
                    src: "/consulting-team/1.png",
                    alt: "Mustafa Nadeem"
                }}
                name="Mustafa Nadeem, CFA"
                text1="Managing Director"
                text2="Consulting"
                bioLink={true}
                bgSurface={!bgSurface}
            />
        </div>
      </div>
    </div>
  )
}

export default TeamText