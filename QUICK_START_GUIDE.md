# Quick Start Guide - House Of Havana Website

## ✨ Your Website is Ready

All major development work is complete. Here's what you need to know to get your site live today.

## 🎯 What's Been Done

✅ 6 Real barber profiles with detailed bios  
✅ Real services with pricing ($46-$190)  
✅ Contact page with form  
✅ Social media integration (Instagram, Facebook, TikTok)  
✅ FAQ section on services page  
✅ Booking system integrated (Barber-Os)  
✅ Business information updated throughout  
✅ "Why Choose Us" section expanded  
✅ News section hidden  
✅ All links updated and working  

## 🚨 What You Must Do Before Launch

### 1. Add Your Barber Photos (5 minutes)

Create a folder: `/public/barbers/`

Add these 6 photos (PNG format):

- `cristian.png` - Cristian Perdomo
- `cj.png` - CJ Galaura  
- `kurt.png` - Kurt
- `janna.png` - Janna
- `sarah.png` - Sarah Alphonse
- `kyle.png` - Kyle

**Tip:** Photos should be professional headshots, around 800x1000px

### 2. Set Up Contact Form Email (10 minutes)

The contact form needs to send emails to **<hello@jztech.co>**

**Easiest Option - Resend (Recommended):**

1. Sign up at <https://resend.com> (Free tier: 100 emails/day)
2. Get your API key
3. Install Resend:

   ```bash
   npm install resend
   ```

4. Create `.env.local` file:

   ```
   RESEND_API_KEY=your_api_key_here
   ```

5. In `/app/api/contact/route.ts`, uncomment the Resend code (lines 28-36)

**That's it!** Your contact form will now send emails.

### 3. Test Everything (5 minutes)

```bash
# Run the development server
npm run dev
```

Visit <http://localhost:3000> and test:

- [ ] All pages load
- [ ] Contact form submits
- [ ] Booking button opens Barber-Os
- [ ] Social media links work
- [ ] Barber photos display

## 🚀 Deploy to Production

### Option A: Vercel (Recommended - 2 minutes)

1. Push your code to GitHub
2. Go to <https://vercel.com>
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable: `RESEND_API_KEY`
6. Click "Deploy"

**Done!** Your site is live.

### Option B: Netlify

1. Push your code to GitHub
2. Go to <https://netlify.com>
3. Click "New site from Git"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Add environment variable: `RESEND_API_KEY`
8. Deploy

## 📋 Post-Launch Checklist

After your site is live:

- [ ] Test contact form sends emails to <hello@jztech.co>
- [ ] Test booking link opens correctly
- [ ] Check all pages on mobile devices
- [ ] Share social media links with team
- [ ] Monitor first few contact form submissions
- [ ] Set up Google Analytics (optional)
- [ ] Add site to Google Search Console (optional)

## 🔗 Important URLs

- **Booking System:** <https://getsquire.com/booking/brands/house-of-havana-barbershop>
- **Instagram:** <https://instagram.com/houseofhavanabarbershop_yxe/>
- **Facebook:** <https://facebook.com/HouseOfHavanaBarbershop/>
- **TikTok:** <https://www.tiktok.com/@houseofhavana.yxe>

## 📞 Your Contact Information

- **Business:** House Of Havana Men's Grooming Ltd
- **Address:** 3501 8 St, Unit #110, Saskatoon, SK S7H0W5
- **Display Email:** <info@houseofhavana.ca>
- **Form Email:** <hello@jztech.co>
- **Hours:** Mon-Fri 10am-7pm, Sat 9am-6pm, Sun: Closed

## 💡 Pro Tips

1. **Barber Photos:** Use consistent lighting and backgrounds for a professional look
2. **Email Testing:** Send yourself a test email before launching
3. **Mobile First:** Most visitors will use mobile - test thoroughly
4. **Google Reviews:** After launch, encourage clients to leave Google reviews
5. **Social Media:** Post your new website link on all platforms

## 📚 Additional Documentation

- `DEPLOYMENT_CHECKLIST.md` - Detailed pre-launch checklist
- `BARBER_IMAGES_NEEDED.md` - Image specifications
- `IMPLEMENTATION_SUMMARY.md` - What was changed
- `/app/api/contact/route.ts` - Email setup instructions

## ⚡ Launch Timeline

**Right Now (15 minutes):**

1. Add barber photos
2. Set up Resend account
3. Add API key to environment

**Today (30 minutes):**

1. Test locally
2. Deploy to Vercel/Netlify
3. Final testing on live site

**This Week:**

1. Share with team
2. Post on social media
3. Monitor contact form

## 🎉 You're Ready

Your website is professional, functional, and ready for customers. Follow the steps above and you'll be live within an hour.

**Questions?** Check the inline code comments or documentation files.

---

**Need Help?**  

- Check `DEPLOYMENT_CHECKLIST.md` for detailed steps
- Review code comments in `/app/api/contact/route.ts`
- Test locally before deploying: `npm run dev`
