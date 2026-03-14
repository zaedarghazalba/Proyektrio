# DROPINK Studio - Architecture Website

Website portfolio premium untuk studio arsitektur DROPINK dengan fitur multibahasa (Indonesia & Inggris), animasi loading screen sinematik, dan galeri proyek interaktif.

---

## 🎯 Fitur Utama

### 1. **Multibahasa (i18n)**
- Support 2 bahasa: Indonesia (default) & Inggris
- URL-based locale: `/id/...` dan `/en/...`
- Slug dinamis per locale untuk SEO
- Language switcher di navbar

### 2. **Loading Screen Sinematik**
- Animasi logo "DROPINK" huruf per huruf
- Underline animation
- Tagline "Architecture Studio"
- **Hanya muncul saat kunjungan pertama** (session storage)
- Fade out smooth ke website utama

### 3. **Page Transition**
- Smooth fade animation saat navigasi
- Berlaku untuk semua perpindahan halaman
- Tidak ada loading screen berulang dalam sesi yang sama

### 4. **Project Gallery**
- 4 proyek dengan detail lengkap
- Hover effect: blur + title overlay
- Grid responsive (1-3 kolom)
- Slider dengan navigasi panah & dots
- **Smart redirection**: gallery redirect ke proyek lain (bukan proyek yang sedang dibuka)

### 5. **Project Detail Page**
- Full-width hero image
- Project overview, challenge, solution
- Features list
- Gallery slider dengan judul per gambar
- WhatsApp CTA dengan dynamic message

### 6. **WhatsApp Integration**
- Direct link ke WhatsApp
- Pre-filled message dengan nama proyek
- Nomor: `6281239968426`

### 7. **Responsive Design**
- Mobile-first approach
- Breakpoints: sm, md, lg
- Touch-friendly untuk mobile

### 8. **Custom Cursor**
- Circle cursor dengan hover effect
- "VIEW" indicator pada clickable elements
- Smooth following animation

### 9. **Theme Toggle**
- Dark mode (default)
- Light mode
- Persistent preference

---

## 🏗️ Arsitektur Sistem

### Tech Stack
```
Frontend Framework:  Next.js 16.1.6 (App Router)
Language:            TypeScript 5
Styling:             Tailwind CSS 3.4
Animations:          Framer Motion 11
i18n:                next-intl 4
Theme:               next-themes
Icons:               SVG inline
```

### Struktur Folder
```
combine3/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── project/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx         # Project Detail Page
│   │   │   ├── layout.tsx               # Root Layout
│   │   │   ├── page.tsx                 # Homepage
│   │   │   └── template.tsx             # Page Transition Wrapper
│   │   ├── globals.css                  # Global Styles
│   │   └── favicon.ico
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── ParallaxImage.tsx
│   │   │   ├── Preloader.tsx            # Loading Screen
│   │   │   ├── SplitText.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── providers/
│   │   │   └── Providers.tsx            # Context Providers
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── CTA.tsx
│   │       ├── Hero.tsx
│   │       ├── Projects.tsx
│   │       ├── Services.tsx
│   │       ├── Stats.tsx
│   │       └── Testimonials.tsx
│   ├── hooks/
│   │   ├── useCountUp.ts                # Counter Animation
│   │   ├── useCursor.ts                 # Custom Cursor Logic
│   │   └── useMousePosition.ts
│   ├── i18n/
│   │   ├── routing.ts                   # next-intl routing config
│   │   └── ../i18n.ts                   # i18n config
│   ├── lib/
│   │   ├── constants.ts                 # WhatsApp, Site Config
│   │   ├── motion.ts                    # Animation Variants
│   │   └── utils.ts                     # Helper Functions
│   ├── messages/
│   │   ├── id.json                      # Indonesian Translations
│   │   └── en.json                      # English Translations
│   └── proxy.ts                         # Middleware Proxy
├── public/
│   ├── Image (4).png
│   ├── Image(2).png
│   ├── Image(3).png
│   └── feed 1.png
├── .env.example
├── DEPLOYMENT.md
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🔧 Konfigurasi

### Environment Variables
```env
# WhatsApp Number (without +)
WHATSAPP_NUMBER=6281239968426

# Site URL (update for production)
NEXT_PUBLIC_SITE_URL=https://dropink.studio
```

### Locale Configuration
```typescript
// src/i18n/routing.ts
{
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "always"
}
```

### Project Slugs per Locale
| Locale | House Modern | Luxury Home | Living Room | Staircase Dining |
|--------|--------------|-------------|-------------|------------------|
| ID     | `rumah-modern` | `rumah-mewah` | `ruang-tamu` | `tangga-makan` |
| EN     | `modern-minimalist-house` | `luxury-family-home` | `contemporary-living-room` | `staircase-dining-area` |

---

## 🚀 Menjalankan Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

### Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## 📦 Deployment

### Vercel (Recommended)

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Deploy di Vercel**
   - Buka https://vercel.com
   - Import repository GitHub
   - Framework: Next.js
   - Build Command: `npm run build`
   - Add environment variables

3. **Environment Variables di Vercel**
   ```
   WHATSAPP_NUMBER=6281239968426
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

### Production Build Info
```
Route (app)
├ ƒ /[locale]              ← Homepage (ID/EN)
└ ƒ /[locale]/project/[slug]  ← Project detail pages

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

---

## 🎨 Design System

### Colors
```css
--black: #080808      /* Main background */
--white: #f4f1eb      /* Main text */
--g1: #111111         /* Secondary background */
--g2: #1a1a1a         /* Border dark */
--g3: #222222         /* Border medium */
--g4: #444444         /* Border light */
--g5: #888888         /* Muted text */
--g6: #bbbbbb         /* Accent text */
```

### Typography
```
Font Display:  Bebas Neue (headings)
Font Body:     Cormorant Garamond (body text)
Font Mono:     DM Mono (labels, captions)
```

### Spacing
```
Section Padding: 120px 60px
Max Width:       1440px
Gap:             6-8px (grid), 12-20px (flex)
```

---

## 📱 Pages & Routes

### 1. Homepage (`/[locale]`)
- Hero section dengan DROPINK text
- Stats counter animation
- Services (3 cards)
- Projects slider (4 projects)
- About section
- Testimonials
- CTA dengan WhatsApp

### 2. Project Detail (`/[locale]/project/[slug]`)
- Full-width hero image
- Project info (title, category)
- Overview, Challenge, Solution
- Features grid (6 items)
- Gallery slider dengan hover title
- WhatsApp CTA

### 3. 404 Page (`/_not-found`)
- Custom error page

---

## 🔐 Session Management

### Preloader Logic
```typescript
// First visit
sessionStorage.setItem("dropink-visited", "true")
→ Show loading screen (2.5s)
→ Fade to website

// Subsequent visits (same session)
sessionStorage.getItem("dropink-visited") === "true"
→ Skip loading screen
→ Direct page transition (0.5s fade)
```

---

## 📊 Performance

### Bundle Size
- First Load JS: ~170 KB
- Middleware: ~49 KB
- Total pages: 3

### Optimizations
- ✅ Code splitting (automatic)
- ✅ Image optimization (Next.js Image)
- ✅ Font optimization (next/font)
- ✅ CSS purging (Tailwind)
- ✅ Tree shaking
- ✅ i18n routing (middleware)

---

## 🛠️ Development Notes

### Key Decisions
1. **No Marquee Component** - Removed untuk cleaner design
2. **No Custom Scroll** - Menggunakan native scroll dengan smooth behavior
3. **No Local Fonts** - Menggunakan next/font untuk optimization
4. **Session-based Preloader** - Tidak annoying untuk repeat visits
5. **Dynamic Slugs** - SEO-friendly URLs per locale

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📞 Contact & Support

**WhatsApp:** 6281239968426  
**Email:** hello@dropink.studio  
**Location:** Jakarta, Indonesia

---

## 📄 License

Copyright © 2026 DROPINK Studio. All rights reserved.

---

## 🙏 Acknowledgments

- Next.js Team
- Vercel
- Framer Motion
- Tailwind CSS
- next-intl

---

**Built with ❤️ by Zaedar Ghazalba**
