# Deployment Guide - DROPINK Studio

## ✅ Production Ready

Website sudah dioptimalkan untuk production dengan menghapus semua file yang tidak digunakan.

---

## 📦 Files Removed (Unused)

### Components
- ❌ `src/components/common/MarqueeText.tsx` - Tidak digunakan setelah homepage redesign

### Hooks
- ❌ `src/hooks/useSmoothScroll.ts` - Tidak digunakan, menggunakan CSS scroll-behavior

### Fonts
- ❌ `src/app/fonts/GeistVF.woff` - Tidak digunakan
- ❌ `src/app/fonts/GeistMonoVF.woff` - Tidak digunakan

### Constants
- ❌ `MARQUEE_ITEMS` - Tidak digunakan
- ❌ `PROJECT_IMAGES` - Tidak digunakan (images hardcoded di components)

### CSS
- ❌ `@keyframes marquee` - Tidak digunakan
- ❌ `.animate-marquee` - Tidak digunakan

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Production ready"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka https://vercel.com
   - Import repository GitHub
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Deploy!

3. **Environment Variables** (jika perlu)
   - Tidak ada environment variables yang diperlukan

### Option 2: Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy folder `.next`** ke Netlify dengan settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

### Option 3: Self-Hosted (VPS)

1. **Build production**
   ```bash
   npm run build
   ```

2. **Start server**
   ```bash
   npm run start
   ```

3. **Atau export static**
   ```bash
   npx next export
   ```

---

## 📊 Production Build Info

```
Route (app)
├ ƒ /[locale]              ← Homepage (ID/EN)
└ ƒ /[locale]/project/[slug]  ← Project detail pages

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

### Bundle Size
- First Load JS: ~170 KB
- Middleware: ~49 KB
- Total pages: 3 (homepage, project detail, 404)

---

## ⚙️ Configuration

### next.config.mjs
```javascript
- Images: Unsplash CDN allowed
- i18n: next-intl configured
- Middleware: i18n routing
```

### Supported Locales
- `id` (Indonesian) - Default
- `en` (English)

### WhatsApp Integration
- Number: `6281234567890` (update sebelum production!)
- Auto-message on click

---

## 🔧 Pre-Deployment Checklist

- [ ] Update WhatsApp number di `src/lib/constants.ts`
- [ ] Update `SITE_CONFIG.url` dengan domain production
- [ ] Add OG image di `public/og-image.jpg`
- [ ] Test semua links (project cards, social media)
- [ ] Test language switcher (ID ↔ EN)
- [ ] Test form WhatsApp redirect
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` locally

---

## 📱 Pages

1. **Homepage** (`/id` or `/en`)
   - Hero section
   - Stats counter
   - Services
   - Projects gallery
   - About section
   - Testimonials
   - CTA with WhatsApp

2. **Project Detail** (`/id/project/[slug]`)
   - Villa Serenity
   - Urban Loft
   - Sky Tower
   - Coastal Retreat

3. **404 Page** (`/_not-found`)

---

## 🎯 Performance

- ✅ Code splitting
- ✅ Image optimization (Next.js Image)
- ✅ Font optimization (next/font)
- ✅ CSS purging (Tailwind)
- ✅ Tree shaking (unused code removed)
- ✅ i18n routing (middleware)

---

## 📞 Contact

Untuk pertanyaan deployment, hubungi developer atau buka dokumentasi:
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- next-intl: https://next-intl-docs.vercel.app
