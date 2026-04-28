# Quick Start Guide

## 🎯 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:3000`

---

## 📋 What You Get

✅ **Hero Banner** - Animated introduction section
✅ **Services** - 4 service cards with hover effects
✅ **Why Choose Us** - 6 reasons with CTA
✅ **Testimonials** - 4 client reviews with ratings
✅ **Contact Form** - Fully validated form
✅ **Footer** - Complete footer with links
✅ **Dark Mode** - Toggle theme button
✅ **Responsive** - Works on all devices

---

## 🎨 Customize

### Update Company Info
Edit `src/components/Footer.tsx`:
```typescript
// Change email, phone, website
📧 info@vdinfotech.in
📱 +91 98765 43210
🌐 www.vdinfotech.in
```

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --primary-color: #0066cc;      /* Change this */
  --secondary-color: #00d4ff;    /* And this */
  --accent-color: #ff6b6b;       /* And this */
}
```

### Update Services
Edit `src/components/Services.tsx`:
```typescript
const services = [
  {
    title: 'Your Service',
    description: 'Your description',
    icon: '🎯',
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Add Testimonials
Edit `src/components/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    name: 'Client Name',
    company: 'Company Name',
    text: 'Their testimonial...',
    rating: 5,
    image: '👨‍💼'
  }
]
```

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Test Production Build
```bash
npm start
```

### Deploy to Vercel
```bash
# Push to GitHub first
git push origin main

# Then deploy from Vercel dashboard
# https://vercel.com
```

---

## 📱 Features

### Navigation
- Sticky header with logo
- Smooth scroll to sections
- Dark/Light mode toggle
- Mobile hamburger menu

### Animations
- Fade-in on scroll
- Hover effects on cards
- Floating background elements
- Smooth transitions

### Form Validation
- Name: Min 2 characters
- Email: Valid format
- Phone: 10 digits
- Service: Required
- Message: Min 10 characters

### Responsive Design
- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: 768px - 992px
- Large: > 992px

---

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
└── components/
    ├── Navigation.tsx   # Header
    ├── HeroBanner.tsx   # Hero section
    ├── Services.tsx     # Services
    ├── WhyChooseUs.tsx  # Why us
    ├── Testimonials.tsx # Reviews
    ├── ContactForm.tsx  # Contact form
    └── Footer.tsx       # Footer
```

---

## 🎯 Next Steps

1. **Customize Content** - Update company info and services
2. **Add Backend** - Connect form to email service
3. **Setup Analytics** - Add Google Analytics
4. **Deploy** - Push to production
5. **Monitor** - Track performance and user behavior

---

## 💡 Tips

- Use `npm run dev` for development
- Test on mobile devices
- Check dark mode functionality
- Verify all links work
- Test form validation
- Check SEO meta tags

---

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment options
- Review `PROJECT_SUMMARY.md` for feature details
- Contact: info@vdinfotech.in

---

**Happy coding! 🚀**
