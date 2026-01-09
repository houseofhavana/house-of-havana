'use client'

import HeroInner from '@/components/sections/HeroInner'
import Button from '@/components/ui/button'
import { ChevronRight, Mail, MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <HeroInner 
        subheading="Get In" 
        title="TOUCH" 
        supportingText="Have a question or ready to book your next grooming experience? We're here to help. Reach out and let's connect." 
      />

      {/* Main Content Section */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Left Column - Contact Info */}
            <div className="md:col-span-2">
              <div className="space-y-12">
                <div>
                  <h2 className="heading-5-italic mb-2">Visit</h2>
                  <h2 className="heading-2 mb-8">THE SHOP</h2>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-foreground" />
                    <h3 className="heading-6 uppercase tracking-wider">LOCATION</h3>
                  </div>
                  <p className="text-foreground/60 leading-relaxed">
                    3501 8 St, Unit #110<br />
                    Saskatoon, SK S7H0W5<br />
                    Canada
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-foreground" />
                    <h3 className="heading-6 uppercase tracking-wider">HOURS</h3>
                  </div>
                  <p className="text-foreground/60 leading-relaxed">
                    Monday - Friday: 10:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="w-5 h-5 text-foreground" />
                    <h3 className="heading-6 uppercase tracking-wider">PHONE</h3>
                  </div>
                  <a 
                    href="tel:306-952-2255" 
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    306-952-2255
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="w-5 h-5 text-foreground" />
                    <h3 className="heading-6 uppercase tracking-wider">EMAIL</h3>
                  </div>
                  <a 
                    href="mailto:info@houseofhavana.ca" 
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    info@houseofhavana.ca
                  </a>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="heading-6 uppercase tracking-wider mb-6">FOLLOW US</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/houseofhavanabarbershop_yxe/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:border-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://facebook.com/HouseOfHavanaBarbershop/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:border-foreground transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@houseofhavana.yxe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:border-foreground transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-surface p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="heading-5-italic mb-2">Send Us</h2>
                  <h2 className="heading-2">A MESSAGE</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-3 text-foreground/70">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-3 text-foreground/70">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest mb-3 text-foreground/70">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground focus:outline-none transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-3 text-foreground/70">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-600 text-sm">
                      Thank you! We'll get back to you soon.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-600 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full mt-8"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    {status !== 'loading' && <ChevronRight className="stroke-background" height={16} width={16} />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ContactPage

