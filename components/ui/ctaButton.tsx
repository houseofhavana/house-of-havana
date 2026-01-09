import Link from 'next/link'
import React from 'react'
import ArrowRight from '../icons/ArrowRight'
import parse from 'html-react-parser'
import Image from 'next/image'

const CTAButton = ({text, iconURL = '/icons/call.svg', link = 'https://calendly.com/p01consulting/30min'}: {text: string, iconURL?: string, link?: string}) => {
  return (
    <Link href={link} target='_blank'>
        <button
        type="button"
        className="flex items-center gap-4 bg-foreground/5 hover:bg-foreground/10 transition pl-6 pr-6 py-4 cursor-pointer uppercase text-xs tracking-[0.3em]"
        >
        <span className="flex items-center">
        <Image src={iconURL} alt="call" width={24} height={24} />
        </span>
        <span className="flex flex-col items-start text-left max-w-[150px] text-sm">
        {parse(text)}
        </span>
        <span className="ml-4">
            <ArrowRight className="w-6 h-6 stroke-white/50" />
        </span>
        </button>
    </Link>
  )
}

export default CTAButton