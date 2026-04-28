# VD Infotech Technologies - Professional Homepage

A modern, fully responsive, and feature-rich homepage for VD Infotech Technologies Pvt Ltd built with Next.js, React, Bootstrap, and Framer Motion.

## 🎯 Features

### ✅ Mandatory Requirements
- **React.js/Next.js**: Built with Next.js 16.2.4 for optimal performance
- **Fully Responsive**: Mobile-first design that works on all devices
- **Professional Premium UI**: Modern gradient design with smooth animations
- **Fast Loading**: Optimized with Next.js static generation and image optimization
- **Contact Form Validation**: Comprehensive form validation using React Hook Form and Zod
- **SEO Optimization**: Meta tags, Open Graph, and semantic HTML

### 🎁 Bonus Features
- **Smooth Animations**: Framer Motion animations throughout the site
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Professional Design**: Gradient backgrounds, hover effects, and modern UI patterns

## 📋 Sections

1. **Hero Banner** - Eye-catching introduction with animated background elements
2. **Our Services** - Four main services with icons and features:
   - Web Development
   - SEO Optimization
   - Google Ads
   - App Development
3. **Why Choose Us** - Six compelling reasons with icons and CTA
4. **Client Testimonials** - Four client reviews with ratings
5. **Contact Form** - Fully validated contact form with error handling
6. **Footer** - Comprehensive footer with links and contact information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the homepage.

## 📦 Dependencies

- **next**: 16.2.4 - React framework
- **react**: 19.2.4 - UI library
- **bootstrap**: 5.3.8 - CSS framework
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **@hookform/resolvers**: Form validation resolver

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00d4ff;
  --accent-color: #ff6b6b;
  /* ... more variables */
}
```

### Content
- Update company information in `src/components/Footer.tsx`
- Modify services in `src/components/Services.tsx`
- Edit testimonials in `src/components/Testimonials.tsx`
- Update contact details in `src/components/ContactForm.tsx`

### Animations
Adjust animation timing and effects in individual component files using Framer Motion props.

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Form labels and error messages

## 🔍 SEO Features

- Meta tags and descriptions
- Open Graph tags for social sharing
- Semantic HTML
- Fast page load times
- Mobile-friendly design

## 📧 Contact Form Validation

The contact form validates:
- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Phone**: 10-digit number
- **Service**: Selection required
- **Message**: Minimum 10 characters

## 🌙 Dark Mode

Toggle dark/light mode using the button in the navigation bar. The preference is maintained during the session.

## 📊 Performance

- Static generation for fast page loads
- Optimized images and assets
- Minimal JavaScript bundle
- CSS-in-JS for efficient styling
- Smooth animations with GPU acceleration

## 🔗 Links

- **Website**: www.vdinfotech.in
- **Email**: info@vdinfotech.in
- **Phone**: +91 98765 43210

## 📄 License

All rights reserved © 2024 VD Infotech Technologies Pvt Ltd

## 🤝 Support

For any issues or questions, please contact us at info@vdinfotech.in

---

**Built with ❤️ using Next.js, React, and Bootstrap**
