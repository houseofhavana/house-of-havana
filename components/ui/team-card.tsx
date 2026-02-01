'use client'

import ArrowRight from '@/components/icons/ArrowRight'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from './modal'

interface TeamCardProps {
  image: {
    src: string
    alt: string
  }
  name: string
  text1: string
  text2?: string
  bioLink?: boolean
  className?: string
  bio?: string
  bgSurface?: boolean
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  text1,
  text2,
  bioLink,
  className = '',
  bio = '',
  bgSurface = true
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewBio = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <>
      <div className={`flex flex-col ${className}`}>
        {/* Image */}
        <div className={`${bgSurface ? 'bg-surface' : 'bg-background'} relative aspect-[3/4] overflow-hidden mb-4`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Name & Title */}
        <div className="mb-3">
          <h3 className="heading-5 mb-1 uppercase">{name}</h3>
          <p className='text-sm text-foreground/50 uppercase tracking-wide'>
            {text1}
          </p>
          {text2 && (
            <p className='text-xs text-foreground/40 mt-1'>
              {text2}
            </p>
          )}
        </div>

        {/* View Bio Button */}
        <button
          onClick={handleViewBio}
          className='flex justify-between items-center border-t border-foreground/10 pt-3 text-left w-full cursor-pointer hover:opacity-70 transition-opacity group'
        >
          <span className="text-sm uppercase tracking-wider">View Bio</span>
          <ArrowRight className='w-4 h-4 stroke-foreground group-hover:translate-x-1 transition-transform' />
        </button>
      </div>

      {/* Modal with Full Bio */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title=""
      >
        {/* Desktop: Side-by-side layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-0 h-[700px]">
          {/* Image - Left Half */}
          <div className="relative h-full overflow-hidden bg-surface">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>

          {/* Bio Content - Right Half */}
          <div className="flex flex-col p-16 bg-background overflow-y-auto">
            <div className="mb-8">
              <h2 className="heading-2 uppercase mb-2 leading-none">{name}</h2>
              <p className="text-foreground/50 uppercase text-xs tracking-[0.2em] mb-2">{text1}</p>
              {text2 && (
                <p className="text-foreground/40 text-xs italic mt-1">{text2}</p>
              )}
            </div>


            {/* Bio */}
            {bio && (
              <div className="text-foreground/70 leading-[1.7] space-y-4">
                {bio.split('. ').map((sentence, index, array) => {
                  // Add period back except for the last sentence (if it already has one)
                  const text = index < array.length - 1 ? sentence + '.' : sentence;
                  // Group every 2-3 sentences into a paragraph for better readability
                  if (index % 3 === 0) {
                    const paragraphSentences = array.slice(index, index + 3).map((s, i) =>
                      i < 2 ? s + '.' : s
                    ).join(' ');
                    return <p key={index}>{paragraphSentences}</p>;
                  }
                  return null;
                }).filter(Boolean)}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: Bottom sheet design */}
        <div className="md:hidden flex flex-col h-full relative">
          {/* Fixed Image Top */}
          <div className="relative h-[40vh] overflow-hidden bg-surface flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Scrollable Bio Sheet */}
          <div className="flex-1 bg-background -mt-8 rounded-t-3xl relative overflow-y-auto">
            {/* Drag indicator */}
            <div className="flex justify-center pt-3 pb-2 sticky top-0 bg-background z-10 rounded-t-3xl">
              <div className="w-12 h-1 bg-foreground/20 rounded-full" />
            </div>

            <div className="px-6 pb-12">
              <div className="mb-6">
                <h2 className="heading-3 uppercase mb-2 leading-none">{name}</h2>
                <p className="text-foreground/50 uppercase text-xs tracking-[0.2em] mb-1">{text1}</p>
                {text2 && (
                  <p className="text-foreground/40 text-xs italic mt-1">{text2}</p>
                )}
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-foreground/20 mb-6" />

              {/* Bio */}
              {bio && (
                <div className="text-foreground/70 leading-[1.7] space-y-4 text-sm">
                  {bio.split('. ').map((sentence, index, array) => {
                    if (index % 3 === 0) {
                      const paragraphSentences = array.slice(index, index + 3).map((s, i) =>
                        i < 2 ? s + '.' : s
                      ).join(' ');
                      return <p key={index}>{paragraphSentences}</p>;
                    }
                    return null;
                  }).filter(Boolean)}
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default TeamCard 