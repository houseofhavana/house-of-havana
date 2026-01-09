import React from 'react'
import Image from 'next/image'

export type Insight = {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  coAuthor: string;
};

interface InsightCardProps {
  insight: Insight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <div className="h-full flex flex-col gap-8">
      <div className="relative w-full h-56" style={{ aspectRatio: '16/9' }}>
        <Image 
          src={insight.image} 
          alt={insight.title} 
          fill 
          className="w-full h-56 object-cover" 
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9p6k9wAAAABJRU5ErkJggg=="
        />
      </div>
      <div className='flex flex-col gap-5'>
        <div className="text-xs text-foreground/50">{insight.date}</div>
        <hr className='border-foreground/10' />
        <div>
          <h3 className="heading-4 leading-snug text-foreground">{insight.title}</h3>
          <div className="text-foreground/50">{insight.excerpt}</div>
        </div>
        <hr className='border-foreground/10' />
        <div className="text-xs text-foreground/50">
          Author: <span className="text-foreground">{insight.author}</span>,<br />
          Co-Author: <span className="text-foreground">{insight.coAuthor}</span>
        </div>
      </div>
    </div>
  );
} 