# House of Havana – Client Content & Integration Checklist

Use this checklist to gather everything needed to launch and optimize the site. Check off items as they're provided. Recommended specs are included where relevant.

## 1) Brand & Strategy
- [ ] Brand overview: 1–2 paragraphs on positioning and voice
- [ ] Tagline(s) and key messages
- [ ] Logo files: SVG (preferred), PNG (light/dark variants)
- [ ] Favicon pack: 32×32, 64×64, SVG
- [ ] Brand colors (HEX/RGB) and usage guidance
- [ ] Typography preferences (if different from site defaults)

## 2) Business & Legal
- [ ] Legal business name (for footer, policies)
- [ ] Address(es) (street, city, postal code, country)
- [ ] Phone number for bookings/inquiries
- [ ] Public email (e.g., hello@houseofhavana.co)
- [ ] Hours of operation (weekday/weekend/holiday format)
- [ ] Service area(s) / neighborhood(s)
- [ ] Terms of Use (final text)
- [ ] Privacy Policy (final text)
- [ ] Cancellation / no‑show policy (displayed at booking and on site)

## 3) Booking & Operations
- [ ] Booking platform link (Booksy/Fresha/Square/Calendly/etc.)
- [ ] Booking policies (deposit, cancellation window, lateness)
- [ ] Service durations per service
- [ ] Pricing per service or "From" pricing
- [ ] Gift cards availability (link, terms, value options)
- [ ] Memberships/packages (name, contents, price, renewal)

## 4) Social & Reviews
- [ ] Social profiles: Instagram, Facebook, TikTok, YouTube (URLs)
- [ ] Google Business Profile link
- [ ] Review sources: Google, Yelp, Facebook (links)
- [ ] Press/awards logos and links (optional)

## 5) Analytics, SEO & Compliance
- [ ] Google Analytics / GA4 Measurement ID
- [ ] Meta Pixel ID (optional)
- [ ] Google Search Console access (optional)
- [ ] Cookie/consent requirements
- [ ] SEO: Primary keywords and locations
- [ ] SEO meta title/description per page (see section 10)

## 6) Images & Media (General)
**Preferred formats:** WebP (preferred), PNG (transparent), high‑quality JPG
**Note:** Provide original, uncompressed assets when possible
**Note:** Include descriptive alt text per image for accessibility

- [ ] Global hero imagery (multiple breakpoints recommended)
  - Mobile: 750×1200
  - Tablet: 1200×1600
  - Desktop: 1920×1080 or 1920×1200
  - Ultrawide: 2560×1440 or 2880×1600
- [ ] Lifestyle/space images (shop interior/exterior): 1600px+ width
- [ ] Brand textures/patterns (optional)

## 7) Home Page Content
- [ ] Headline/subheadline (hero)
- [ ] Supporting copy (2–4 sentences)
- [ ] Home hero images (per breakpoint, see section 6)
- [ ] Featured services (3–6 cards): title, short description, image (optional)
- [ ] Call‑to‑Action text (e.g., "Book Your Chair")

## 8) Barbers (Team) Page
**For each barber:**
- [ ] Name and role/title
- [ ] Portrait image: 1200×1500 (portrait) or 1600×1600 (square)
- [ ] Short bio (50–120 words)
- [ ] Specialties (3–6 bullet points)
- [ ] Social links (optional)
- [ ] Availability notes (optional)

## 9) Services (Treatments) Page
- [ ] Final service categories (e.g., Haircuts & Styling, Beard Craft)
- [ ] Services under each category (titles)
- [ ] Descriptions per category/service (1–2 sentences)
- [ ] Duration per service (mins)
- [ ] Price per service or "From $X"
- [ ] Any add‑ons and pricing
- [ ] High‑level services hero images per breakpoint (optional)

## 10) SEO Meta by Page
**Provide a meta title (≤60 chars) and description (≤155 chars) for each page.**
- [ ] Home
- [ ] About
- [ ] Barbers
- [ ] Services/Treatments
- [ ] News
- [ ] Reviews
- [ ] Contact
- [ ] Privacy Policy
- [ ] Terms of Use

## 11) About Page
- [ ] Brand story (150–300 words)
- [ ] Philosophy/values (3–5 bullets or short paragraphs)
- [ ] Shop history or founding story (optional)
- [ ] Hero/supporting imagery

## 12) News (Updates) Page
**For each post:**
- [ ] Title
- [ ] Date
- [ ] Featured image (1200×800+ recommended)
- [ ] Excerpt (1–2 sentences)
- [ ] Full content (optional, if separate article page)

## 13) Reviews / Testimonials
**For each testimonial:**
- [ ] Client name (or initials)
- [ ] Rating (out of 5)
- [ ] Quote (1–3 sentences)
- [ ] Source (Google/Yelp/Direct)
- [ ] Usage permission if required

## 14) Contact Page
- [ ] Contact intro copy (1–2 sentences)
- [ ] Address, phone, email
- [ ] Embedded map preference (Google Maps link)
- [ ] Contact form fields (name, email, phone, message, etc.)
- [ ] Form destination email(s)
- [ ] Spam protection preference: reCAPTCHA v2/v3 (provide keys)

## 15) Emails & Notifications
- [ ] Sender email/domain (e.g., hello@houseofhavana.co)
- [ ] SMTP provider or transactional email service (e.g., SendGrid, Postmark)
- [ ] Auto‑reply copy for contact/booking forms (optional)

## 16) Accessibility
- [ ] Alt text for all images
- [ ] Color contrast approvals for brand colors on dark/light backgrounds
- [ ] Video captions/subtitles (if any video is provided)

## 17) Performance & File Delivery
- [ ] Approve image compression targets (e.g., 70–80% quality)
- [ ] Approve lazy‑loading for below‑the‑fold images
- [ ] Provide CDN preference (optional)

## 18) Future Enhancements (Optional)
- [ ] Newsletter platform (Mailchimp/Klaviyo) and embed/signup copy
- [ ] Online store or product catalog (tools, vouchers)
- [ ] Loyalty program or referral program details
- [ ] Multi‑location support (addresses, hours, booking links per location)

---

## File Structure for Deliverables

Deliverables can be shared via a folder structured like this:

**House-of-Havana-Assets/**
- **brand/**
  - logo.svg
  - logo-light.png
  - logo-dark.png
  - colors.pdf
- **images/**
  - **hero/**
    - mobile.jpg
    - tablet.jpg
    - desktop.jpg
    - ultrawide.jpg
  - **barbers/**
    - firstname-lastname-portrait.jpg
  - **shop/**
    - interior-1.jpg
    - exterior-1.jpg
- **content/**
  - about.md
  - services.csv
  - reviews.csv
  - **news/**
    - 2025-01-15-new-barber.md
- **seo/**
  - meta-home.csv
  - meta-pages.csv

---

**Note:** If anything here is unclear, we can prioritize a "minimum viable content" set to go live, then iterate.


