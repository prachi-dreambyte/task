# Deployment Guide - VD Infotech Homepage

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the official Next.js hosting platform with zero-config deployment.

#### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Benefits**:
- Automatic deployments on push
- Free SSL certificate
- Global CDN
- Serverless functions
- Analytics included

### Option 2: Netlify

#### Steps:
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Or connect your GitHub repository

**Configuration** (netlify.toml):
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: AWS Amplify

#### Steps:
1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Select the branch to deploy
4. Configure build settings (auto-detected for Next.js)
5. Deploy

### Option 4: Docker (Self-hosted)

#### Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build and run:
```bash
docker build -t vd-infotech .
docker run -p 3000:3000 vd-infotech
```

### Option 5: Traditional VPS/Server

#### Steps:
1. SSH into your server
2. Install Node.js 18+
3. Clone the repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start npm --name "vd-infotech" -- start
   pm2 startup
   pm2 save
   ```
7. Set up Nginx as reverse proxy
8. Configure SSL with Let's Encrypt

#### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name www.vdinfotech.in vdinfotech.in;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Pre-deployment Checklist

- [ ] Update contact information in components
- [ ] Verify all links work correctly
- [ ] Test form submission (set up backend if needed)
- [ ] Check dark/light mode functionality
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags
- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm start`
- [ ] Update favicon if needed
- [ ] Configure analytics (Google Analytics, etc.)

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# API endpoints (if needed)
NEXT_PUBLIC_API_URL=https://api.vdinfotech.in

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact form backend
NEXT_PUBLIC_FORM_API=https://your-backend.com/api/contact
```

## 🔐 Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Environment Variables**: Never commit sensitive data
3. **CORS**: Configure CORS properly for API calls
4. **Rate Limiting**: Implement rate limiting on contact form
5. **Input Validation**: Already implemented with Zod
6. **CSP Headers**: Configure Content Security Policy

### Next.js Security Headers (next.config.ts):
```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
}
```

## 📊 Performance Optimization

### Already Implemented:
- ✅ Static generation
- ✅ Image optimization
- ✅ CSS minification
- ✅ JavaScript bundling

### Additional Optimizations:
1. Enable compression on server
2. Set up CDN for static assets
3. Configure caching headers
4. Monitor Core Web Vitals
5. Use analytics to track performance

## 🔄 Continuous Deployment

### GitHub Actions Example:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - name: Deploy
        run: npm run deploy
```

## 📧 Form Submission Backend

The contact form currently logs to console. To handle submissions:

### Option 1: Serverless Function (Vercel)
Create `api/contact.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Send email or save to database
  console.log('Contact form submission:', data);
  
  return NextResponse.json({ success: true });
}
```

### Option 2: External Service
- SendGrid for emails
- Firebase for database
- Supabase for PostgreSQL
- MongoDB Atlas for NoSQL

## 🎯 Domain Setup

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Point nameservers to your hosting provider
3. Configure DNS records:
   - A record: Points to server IP
   - CNAME: www subdomain
   - MX records: For email

## 📱 Mobile App Considerations

For future mobile app development:
- API endpoints should be separate from frontend
- Consider API versioning
- Implement proper authentication
- Use JWT tokens for security

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Change port
PORT=3001 npm start
```

### Memory Issues
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

## 📞 Support

For deployment issues:
- Check Next.js documentation: https://nextjs.org/docs
- Vercel support: https://vercel.com/support
- Contact: info@vdinfotech.in

---

**Ready to Deploy!** 🚀
