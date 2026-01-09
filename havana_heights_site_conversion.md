**Document: Converting Platform01 Consulting Website to Havana Heights**

---

### 🔄 Purpose

This document is a complete implementation and content conversion guide to transform the existing Platform01 Consulting website codebase and Figma layout into a dark-themed, premium barbershop website for **Havana Heights**.

---

## ✍️ Step-by-Step Cursor Implementation Guide

### 1. ⚖️ BRAND TRANSFORMATION

**From Corporate Consulting to Premium Barbershop**

| Element      | From (Consulting)                | To (Havana Heights)                            |
| ------------ | -------------------------------- | ---------------------------------------------- |
| Brand Name   | Platform01 Consulting            | Havana Heights                                 |
| Brand Voice  | Strategic, Neutral               | Cinematic, Masculine, Heritage-Crafted         |
| Visual Tone  | Clean, White, Minimal            | Dark, Warm, Moody with Rich Color Accents      |
| Typography   | Sans-serif, Neutral              | Serif + Grotesk combo (e.g., Playfair + Inter) |
| Hero Imagery | Abstract cityscapes/office shots | Filmic barbershop interiors with vintage style |

**Mission:**

> To redefine the grooming experience by blending precision, style, culture, good energy, and community — offering the best services and products to our customers.

**Vision:**

> To expand the Havana Heights experience across Canada and potentially overseas. We aim to build a place of greatness, powered by expertly trained people making meaningful impact in their communities.

**Tone/Keywords:** Classic, Premium, Confident, Cultural, Masculine, Ritualistic, Heritage-driven

**Audience:**

- Primary: Working Professionals, Entrepreneurs, Tradesmen, Business Owners (Aged 25–45)
- Secondary: High-Income Men (Executives, Professionals 40–60+) who appreciate tradition, luxury, and culture

### 2. 🌟 GLOBAL STYLING CHANGES

**Color Palette Already Set:**

```css
:root {
  --background: #0E0E0E;
  --foreground: #FFFFFF;
  --primary: #C4B280;
  --secondary: #C4B280;
  --accent: #1F2937;
  --surface: #141414;
  --gray: #9CA3AF;
  --stroke: #374151;
  --dark: #000000;
}
```

**Fonts:**

```css
font-family: 'Playfair Display', serif;  // Headings
font-family: 'Inter', sans-serif;        // Body text
```

### 3. 🏠 PAGE-BY-PAGE CONVERSION

#### Homepage (`index.tsx` or `/home/page.tsx`)

**Hero Section:**

- Image: Use cinematic 21:9 barbershop scene
- Heading:

```html
<span class="heading-pre">*WELCOME TO*</span>
<h1 class="hero-title">HAVANA HEIGHTS</h1>
```

- Subtext:
  > Where vintage Havana charm meets today's gentleman.
- CTA: `Book Your Chair` and `Explore Services`

**Value Grid Section (What Sets Us Apart):** Replace `Exceptional Team`, etc. with:

- Craft Over Clip
- Atmosphere That Speaks
- Barbers Who Get You
- Exclusivity in Every Detail

**Team Preview:** Swap consulting team grid with top 3 barbers (real or placeholder profiles).

**Cut Carousel:** Adapt credentials carousel to showcase Signature Cuts (images of fades, styles, etc.).

**CTA Banner:** Update headline:

```html
<span class="heading-pre">*TIME TO*</span>
<h2 class="section-title">BOOK YOUR RITUAL</h2>
```

---

#### Services Page

**Component to Use:** Accordion Layout

Update headers to:

- Hair
- Beard
- Shaving
- Rituals
- Add-ons

Each panel should include 3–5 services with optional icons and copy.

**Secondary Content:** Replace strategy cards with Grooming Personalization benefits:

- Face shape matching
- Hair type consideration
- Barber consultation

---

#### Our Barbers Page

- Use Team Grid and Detail Card components
- Content: Name, Years of Experience, Style Specialty, Quote

Optional:

> *"A good cut isn’t just seen — it’s felt."* — Usman, Master Barber

---

#### Insights Page

Use blog grid layout to showcase:

- Grooming tips
- Ritual care
- Beard maintenance
- Style inspiration

Update content plan to reflect:

- **Minimum 2 blog posts/month**
- **Written by team and sent to devs for upload** (no CMS access required)

---

#### Contact Page

Use footer component structure. Include:

- 📍 Gulberg, Lahore
- ✂️ By Appointment Only
- 📲 WhatsApp CTA button
- Instagram handle

Form Fields:

- First Name
- Last Name
- Email
- Phone Number
- Birthday

---

### 🔗 NAVIGATION STRUCTURE

**Top Nav:**

- About
- Services (Mega Menu)
- Team
- Insights
- Contact
- **Book Appointment** (CTA button)

**Mega Menu Services Breakdown:**

```js
Hair: ["Classic Cut", "Skin Fade", "Scissor Cut", "Restyle", "Kid's Cut"]
Beard: ["Beard Trim", "Sculpting", "Beard Conditioning"]
Shaving: ["Hot Towel Shave", "Head Shave", "Express Shave"]
Rituals: ["Havana Ritual", "Steam Facial", "Scalp Detox"]
Add-ons: ["Neck Cleanup", "Hair Wash", "Grey Blending"]
```

---

### 🪡 CURSOR PROMPT ENGINEERING (EXAMPLE)

```bash
// Replace all header content on Homepage
find("HeroSection").replaceText({
  heading: "*WELCOME TO*\nHAVANA HEIGHTS",
  subtext: "Where vintage Havana charm meets today’s gentleman.",
  cta1: "Book Your Chair",
  cta2: "Explore Services"
});

// Update color tokens across Tailwind config
updateThemeColors({
  primaryBg: "#0E0E0E",
  accentGold: "#C4B280",
  textLight: "#FFFFFF"
});
```

---

### ✅ Final Notes

- Maintain visual rhythm: mix light sections for scroll pacing
- Use grainy 21:9 barbershop imagery with intentional negative space
- Keep spacing generous to convey luxury
- Avoid logos/signage in hero images (brand minimalism)
- Explore Gift Cards & Referrals module as future UX enhancement

Ready for next phase: **Services Page Copy**, **Team Bios**, or **Dropdown Megamenu Layouts**

