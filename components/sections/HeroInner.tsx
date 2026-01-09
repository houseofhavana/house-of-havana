import React from 'react'
import parse from 'html-react-parser'

const HeroInner = ({title = 'Hero Title', subheading = '', supportingText = ''}: {title?: string, subheading?: string, supportingText?: string}) => {
  return (
    <div className='bg-background text-foreground relative overflow-hidden z-10'>
        <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 pt-44 pb-20 min-h-[400px]'>
                <div className="md:col-span-6 flex flex-col">
                    <h2 className='heading-5-italic mb-2'>{parse(subheading)}</h2>
                    <h1 className='heading-1'>{parse(title)}</h1>
                </div>
                <div className="md:col-span-5 md:col-start-8 flex items-end">
                  {supportingText && <p className='text-foreground/50 leading-relaxed'>{parse(supportingText)}</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroInner