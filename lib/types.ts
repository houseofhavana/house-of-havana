export interface BackgroundImages {
  mobile?: string
  tablet?: string
  desktop?: string
  ultrawide?: string
}

export interface HeroData {
  backgroundImages: BackgroundImages
  subheading?: string
  heading?: string
  supportingText?: string
  className?: string
}

export interface ServiceHeroData {
  subheading: string
  heading: string
  backgroundImages: BackgroundImages
  showContactForm?: boolean
  className?: string
} 