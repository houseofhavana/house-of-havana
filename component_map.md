**Document: Havana Heights Website Component Mapping**

---

### 🔄 Purpose

This document maps all components from the original Platform01 Consulting layout to their new Havana Heights equivalents. It provides a reference for content, structure, component identification, and original design copy context to assist both designers and developers—particularly when using Cursor—without relying on image screenshots or existing file names.

**Note:** Havana Heights is based in Canada. Location, tone, and brand voice should reflect this regional identity.

---

## 🔍 Component Mapping Overview

| Havana Heights Component   | Description & Visual Purpose                                                         | Copy Identification Notes                                                       |
| -------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Hero Section               | Large top section with bold tagline, subheading, and CTA ("Book Your Chair")         | *Bespoke Solutions. Real World Impact.*<br>“We serve as consultants…”           |
| Services Accordion         | Expandable grooming categories (Hair, Beard, Rituals) with inner service items       | *Bespoke Consulting Services* accordion layout with service breakdowns          |
| Credential Carousel        | Horizontal slider used to display signature cuts or popular styles                   | “Feasibility Study for a Ductile Iron Pipe…” section with scroll interaction    |
| Insights Grid              | Card-based blog layout used for grooming tips & updates                              | “Insights and Thought Leadership” section with 3–4 article cards                |
| Value Cards Grid           | 4-column grid for values like "Craft Over Clip" and "Atmosphere That Speaks"         | “What Sets Us Apart?” — 4 cards each with a heading and a paragraph             |
| Footer                     | Full-width dark section with location, links, and social icons                       | Footer with email, address, and navigation links                                |
| Team – Single Bio Detail   | Full-width profile card for master barber (e.g., Usman)                              | Used for a lead team member like “Mustafa Nadeem, CFA” with image and text      |
| Team – Bio Grid            | 2–4 column grid of team member bios with short info and image                        | Grid layout showing repeated team cards with name and designation               |
| Experience Highlights      | Storytelling layout explaining the grooming ritual experience                        | “Our Feasibility Study service…” — section with text blocks and bullet features |
| Strategic Foundation Cards | Grid-style service philosophy cards (used for cut/sculpt logic, facial shapes, etc.) | “A Strategic Foundation…” — four tiles with strategy details                    |
| Tailored Scope Cards       | Personalization benefits (e.g. beard type, scalp match)                              | “Tailored Scope for Optimal Value” — 4 vertical columns of detail cards         |
| FAQ Accordion              | Expandable Q\&A format for grooming/booking questions                                | FAQ block with common user questions like pricing, appointments, walk-ins       |
| Call to Action Banner      | Wide horizontal CTA with a single heading and gold button                            | “Let’s Talk Portfolio Valuation” section with call to action copy and button    |
| Commercial Due Diligence   | Step-by-step consultation breakdown (optional section)                               | “Commercial Due Diligence” with staged explanation or numbered blocks           |

---

## 🛍️ Page-Level Mapping Summary

### Homepage

* Hero Section
* Value Proposition Grid
* Barber Preview Grid
* Signature Cuts Carousel
* CTA Banner
* Footer

### Services Page

* Accordion Menu
* Ritual Highlights (formerly strategy section)
* Tailored Cards for personalized grooming
* FAQ Accordion
* CTA Banner

### Team / About Page

* Hero or Quote Header
* Team Bio Grid
* Single Barber Focus
* CTA or Recruitment CTA

### Insights Page

* Blog Grid
* CTA to Book or Subscribe

### Contact Page

* Footer Form Block
* Map, WhatsApp CTA, Instagram

---

## 💡 Cursor Usage Notes

* Use `Cmd/Ctrl + P` in Cursor to fuzzy search component names like `Hero`, `Accordion`, `Grid`, `Insight`, `FAQ`, or `Footer`.
* If unsure, use global text search (`Cmd/Ctrl + Shift + F`) with keywords like `Book Your Chair`, `Classic Cut`, `Barbers`, `What Sets Us Apart`, etc.
* For carousel or mapped content, look for `.map()` blocks in the JSX — usually array-driven (`team.map`, `services.map`, `posts.map`).

---

Use this mapping document as your master reference when navigating, renaming, or refactoring Havana Heights components inside the Cursor codebase.

Next phase: **Content injection, UI refinements, or file structure renaming.**
