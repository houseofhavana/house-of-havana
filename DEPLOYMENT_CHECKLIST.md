# House Of Havana Website - Deployment Checklist

## ✅ Completed Tasks

- [x] Updated barber data with 6 real barbers from barberinfo.md
- [x] Created real services with pricing and duration
- [x] Created contact page with form
- [x] Added social media links (Instagram, Facebook, TikTok) to footer
- [x] Hidden news section from navigation and homepage
- [x] Added expanded "Why Choose Us" section with 6 value cards
- [x] Created FAQ section on services/treatments page
- [x] Updated all booking links to Barber-Os system
- [x] Updated business information throughout site
- [x] Enhanced About page with real business story
- [x] Updated metadata for SEO
- [x] Updated footer with Saskatoon location and hours
- [x] Fixed all internal navigation links
- [x] Updated Book page with proper booking flow

## 📋 Before Going Live

### 1. Add Barber Photos

- [ ] Add 6 barber photos to `/public/barbers/` directory
- [ ] Files needed: cristian.png, cj.png, kurt.png, janna.png, sarah.png, kyle.png
- [ ] See `BARBER_IMAGES_NEEDED.md` for specifications

### 2. Email Service Setup (Contact Form)

The contact form at `/app/contact/page.tsx` needs email service integration:

**Option A: Use Resend (Recommended)**

```bash
npm install resend
```

Then update `/app/api/contact/route.ts` to use Resend API.

**Option B: Use SendGrid**

```bash
npm install @sendgrid/mail
```

Then update `/app/api/contact/route.ts` to use SendGrid API.

**Option C: Use a Form Service**

- Formspree (<https://formspree.io>)
- Formspark (<https://formspark.io>)
- Web3Forms (<https://web3forms.com>)

**Current Status:** The form submits successfully but emails are only logged to console. You MUST set up one of the above options before going live so that form submissions reach **<hello@jztech.co>**.

### 3. Environment Variables

Create a `.env.local` file with:

```
# Email Service (choose one based on your choice above)
RESEND_API_KEY=your_key_here
# OR
SENDGRID_API_KEY=your_key_here
# OR
FORMSPREE_FORM_ID=your_id_here

# Contact form destination
CONTACT_EMAIL=hello@jztech.co
```

### 4. Testing Checklist

- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test booking link (opens Barber-Os correctly)
- [ ] Test social media links (Instagram, Facebook, TikTok)
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Test all pages load correctly
- [ ] Verify all barber images display
- [ ] Check FAQ accordions work
- [ ] Check services display pricing correctly

### 5. SEO & Analytics (Optional but Recommended)

- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Add structured data for local business

## 🚀 Deployment Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Build the Project**

   ```bash
   npm run build
   ```

3. **Test Production Build Locally**

   ```bash
   npm run start
   ```

4. **Deploy to Hosting**
   - Recommended: Vercel (optimal for Next.js)
   - Alternative: Netlify, AWS, or other hosting

5. **Post-Deployment**
   - Test all functionality on live site
   - Monitor contact form submissions
   - Check all external links work

## 📞 Contact Information Used

- **Business Name:** House Of Havana Men's Grooming Ltd
- **Address:** 3501 8 St, Unit #110, Saskatoon, SK S7H0W5
- **Email (Display):** <info@houseofhavana.ca>
- **Email (Form Destination):** <hello@jztech.co>
- **Hours:** Mon-Fri 10am-7pm, Sat 9am-6pm, Sun: Closed
- **Booking System:** <https://getsquire.com/booking/brands/house-of-havana-barbershop>

## 📱 Social Media

- **Instagram:** <https://instagram.com/houseofhavanabarbershop_yxe/>
- **Facebook:** <https://facebook.com/HouseOfHavanaBarbershop/>
- **TikTok:** <https://www.tiktok.com/@houseofhavana.yxe>

## ⚠️ Critical Items

**MUST BE DONE BEFORE LAUNCH:**

1. Add barber photos
2. Set up email service for contact form
3. Test contact form end-to-end
4. Test booking link works

**SHOULD BE DONE SOON AFTER LAUNCH:**

1. Get real client reviews to replace placeholder text
2. Set up analytics tracking
3. Add Google Business Profile
4. Consider adding actual hero images if different from placeholders

## 📝 Notes

- News section is hidden but files remain (can be enabled later if needed)
- Services are simplified to 5 core offerings with pricing
- All placeholder "Havana Heights" references updated to "House Of Havana"
- Gift cards are mentioned as available through Barber-Os booking system
