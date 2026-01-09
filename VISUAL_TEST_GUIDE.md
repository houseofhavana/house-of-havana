# Visual Test Guide - Luxury Redesign

Run: `npm run dev` and open `http://localhost:3000`

---

## 🏠 **Homepage Test**

### Sections in Order:
1. **Hero** - Full-width image
2. **Ritual** - ⚪ **LIGHT SURFACE** with stats
3. **Why Choose Havana** - ⚫ **DARK BACKGROUND** with numbered list (01, 02, 03, 04)
4. **Services Accordion** - ⚪ **LIGHT SURFACE**
5. **Team Preview** - ⚪ **LIGHT SURFACE**
6. **Client Testimonials Slider** - ⚫ **DARK BACKGROUND**
7. **Footer** - ⚪ **LIGHT SURFACE**

### ✅ Check:
- [ ] Why Choose section: NO STARS, elegant numbers instead
- [ ] Why Choose: Centered header with thin divider line
- [ ] Alternating backgrounds: Surface → Background → Surface → Surface → Background → Surface
- [ ] NO 3 consecutive same backgrounds

---

## 📖 **About Page Test**

### Sections in Order:
1. **Hero** - ⚫ **DARK BACKGROUND**
2. **Our Story** - ⚪ **LIGHT SURFACE** with Mission/Vision
3. **What We Believe** - ⚫ **DARK BACKGROUND** (list format, centered header)
4. **Meet Your Barbers** - ⚪ **LIGHT SURFACE**
5. **Manifesto** - ⚪ **LIGHT SURFACE** (quote with large decorative ")
6. **CTA** - ⚫ **DARK BACKGROUND**
7. **Footer** - ⚪ **LIGHT SURFACE**

### ✅ Check:
- [ ] What We Believe: List format (NOT grid), centered header
- [ ] Manifesto section is LIGHT (not dark like before)
- [ ] Perfect alternation: Background → Surface → Background → Surface → Surface → Background → Surface

---

## ⭐ **Reviews Page Test**

### Sections in Order:
1. **Hero** - ⚫ **DARK BACKGROUND**
2. **Rating Summary** - ⚪ **LIGHT SURFACE** (4.9, 150+, 100%)
3. **Featured Testimonials** - ⚫ **DARK BACKGROUND** (3 large quotes)
4. **More Client Voices** - ⚪ **LIGHT SURFACE** (compact list)
5. **Share Your Experience** - ⚫ **DARK BACKGROUND**
6. **CTA** - ⚪ **LIGHT SURFACE**
7. **Footer** - ⚪ **LIGHT SURFACE**

### ✅ Check:
- [ ] Featured testimonials: Large text-2xl/3xl quotes
- [ ] More reviews: Compact 2-column layout (info left, quote right)
- [ ] NOT a boring grid
- [ ] Feels premium and varied
- [ ] Perfect alternation throughout

---

## ✂️ **Services Page Test**

### Sections in Order:
1. **Hero** - ⚫ **DARK BACKGROUND**
2. **Services Accordion** - ⚪ **LIGHT SURFACE**
3. **FAQ** - ⚫ **DARK BACKGROUND**
4. **CTA** - ⚪ **LIGHT SURFACE**
5. **Footer** - ⚪ **LIGHT SURFACE**

### ✅ Check:
- [ ] Services section is LIGHT (not dark)
- [ ] FAQ section is DARK (not light)
- [ ] Perfect alternation

---

## 👨‍🦲 **Barbers Page Test**

### Sections in Order:
1. **Hero** - ⚫ **DARK BACKGROUND**
2. **Team Grid** - ⚪ **LIGHT SURFACE**
3. **CTA** - ⚫ **DARK BACKGROUND**
4. **Footer** - ⚪ **LIGHT SURFACE**

### ✅ Check:
- [ ] Perfect alternation
- [ ] View Bio buttons work
- [ ] Modal opens with barber info

---

## 📞 **Contact Page Test**

### Sections in Order:
1. **Hero** - ⚫ **DARK BACKGROUND**
2. **Contact Form + Info** - ⚪ **LIGHT SURFACE**
3. **Footer** - ⚪ **LIGHT SURFACE**

### ✅ Check:
- [ ] Two consecutive LIGHT sections is OK (form + footer)

---

## 🎨 **Luxury Design Elements to Verify**

### Typography:
- [ ] Small italic subheadings (e.g., "Why Choose", "What Our")
- [ ] Large uppercase main headings
- [ ] Elegant large numbers (01, 02, 03, 04) where applicable
- [ ] No awkward sizing

### Spacing:
- [ ] Generous whitespace everywhere
- [ ] Sections feel breathable
- [ ] No cramped layouts

### Dividers:
- [ ] Thin elegant horizontal lines (20px wide, centered)
- [ ] Border-top separators on lists
- [ ] No heavy boxes or cards

### Colors:
- [ ] Dark sections: #0E0E0E
- [ ] Light sections: #141414
- [ ] Clear contrast between sections

---

## ❌ **What Should NOT Exist**

- [ ] NO star ratings in "Why Choose Havana" section
- [ ] NO 2-column grid in "Why Choose" (should be list)
- [ ] NO cheap-looking reviews grid (should be varied layout)
- [ ] NO 3+ consecutive same backgrounds anywhere
- [ ] NO Ritual section without background (should have bg-surface)
- [ ] NO rounded borders anywhere

---

## ✅ **Overall Feel Check**

Ask yourself:
- **Does it feel like a $500 haircut?** ✓
- **Does it feel refined and elegant?** ✓
- **Does it convey gentleman's club luxury?** ✓
- **Does it look awwwards-quality?** ✓
- **Is it boring or repetitive?** ✗ (Should be NO)

---

## 🐛 **If You Find Issues**

### Background not alternating:
1. Check if section has `bg-surface` or `bg-background` class
2. Verify the section before/after
3. Update the className

### Layout looks cheap:
1. Check if using old grid format
2. Should use list format with borders instead
3. Add centered headers with dividers

### Stars where they shouldn't be:
1. Remove star SVG code
2. Replace with elegant numbers (01, 02) or remove entirely

---

**Expected Result:** Premium, refined, luxurious gentleman's club website that makes you want to book immediately.

🥃 **Cheers to excellence.**

