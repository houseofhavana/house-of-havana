import HeroInner from '@/components/sections/HeroInner'
import InsightsSlider, { Insight } from '@/components/sections/InsightsSlider'
import React from 'react'

const NEWS: Insight[] = [
  // Example news data; replace with real data as needed
  {
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    date: 'January 15, 2025',
    title: 'New Barber Joins House of Havana Team',
    excerpt: 'We\'re excited to welcome Marcus Rodriguez to our team. Marcus brings 10+ years of experience in classic and contemporary barbering.',
  },
  // ... more news
]

const NewsPage = () => (
  <>
    <HeroInner title="NEWS" supportingText="Stay updated with the latest from House of Havana, including new services, team updates, and grooming tips for the modern gentleman." />
    <div className="container py-16">
      <div className="text-center mb-8">
        <h2 className="heading-4-italic mb-2">Latest</h2>
        <h2 className="heading-2">NEWS</h2>
      </div>
      <InsightsSlider insights={NEWS} />
    </div>
  </>
)

export default NewsPage 