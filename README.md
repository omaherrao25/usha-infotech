# Usha Infotech — React Website

Premium enterprise website for Usha Infotech built with:
- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11** (all animations)
- **React Router DOM 6** (client-side routing)
- **Lenis** (smooth scrolling — optional, see below)

---

## 📁 Project Structure

```
usha-infotech/
├── index.html                  # Vite root HTML
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                # React root entry
    ├── App.jsx                 # Router + Layout
    ├── index.css               # Global styles + Tailwind
    │
    ├── data/                   # All content extracted from HTML
    │   ├── services.js         # 6 services with full content
    │   ├── products.js         # 8 products with specs & pricing
    │   └── caseStudies.js      # 5 case studies + client list
    │
    ├── animations/             # Framer Motion variants
    │   ├── fadeUp.js           # fadeUp, fadeIn, fadeLeft, fadeRight, scaleIn
    │   └── stagger.js          # staggerContainer, staggerItem, presets
    │
    ├── components/             # Reusable components
    │   ├── Navbar.jsx          # Sticky blur navbar + mobile menu
    │   ├── Footer.jsx          # Full footer with CTA strip
    │   ├── Hero.jsx            # Animated hero with CountUp stats
    │   ├── ServiceCard.jsx     # Card for home services grid
    │   ├── ServiceSplitSection.jsx  # Full split layout for services page
    │   ├── CaseStudyCard.jsx   # Case study preview/full card
    │   ├── CaseStudySplitSection.jsx # Premium alternating layout
    │   ├── ProductCard.jsx     # Product card with specs grid
    │   ├── CTASection.jsx      # Reusable CTA section
    │   ├── PageHero.jsx        # Inner page hero header
    │   └── ScrollProgress.jsx  # Scroll progress bar
    │
    └── pages/
        ├── Home.jsx            # All home sections
        ├── Services.jsx        # All 6 services alternating
        ├── Products.jsx        # Filtered product catalog
        └── CaseStudies.jsx     # All 5 case studies storytelling
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 🖼️ Adding Real Images

The project uses emoji/icon placeholders for images. To add real images:

1. Place your images in `public/assets/`:
   ```
   public/
   └── assets/
       ├── logo.png
       ├── srv_infra.png
       ├── srv_hardware.png
       ├── srv_cctv.png
       ├── srv_network.png
       ├── srv_rental.png
       ├── srv_b2b.png
       ├── SameerAgarwal.jpeg
       ├── EktaAgarwal.jpeg
       └── logos/
           ├── TIMUS LIFESTYLE.png
           ├── fizzyfox logo.png
           ├── WELD TECH.png
           ├── WHIZKIDS.png
           └── KAIZEN SOLUTIONS.png
   ```

2. In `ServiceSplitSection.jsx`, replace the emoji icon block:
   ```jsx
   // Replace this:
   <div className="text-[120px] opacity-80 animate-float select-none">
     {ICONS[service.id] || service.icon}
   </div>

   // With this:
   <img
     src={`/assets/${service.image}.png`}
     alt={service.title}
     className="w-full h-full object-cover"
   />
   ```

3. Similarly update `CaseStudySplitSection.jsx` and `Hero.jsx` founders section.

---

## 🎨 Customizing Colors

Colors are defined in `tailwind.config.js` under `theme.extend.colors.brand`:

```js
brand: {
  blue: '#1E40AF',
  'blue-mid': '#2563EB',
  teal: '#0D9488',
  // ...
}
```

And in `src/index.css` as CSS variables:
```css
:root {
  --blue: #1E40AF;
  --blue-mid: #2563EB;
  --teal: #0D9488;
}
```

---

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, stats, services grid, case study preview, process, story, trust |
| `/services` | Services | All 6 services in alternating split layout with scroll animations |
| `/products` | Products | Category-filtered product catalog with specs |
| `/case-studies` | Case Studies | All 5 case studies in premium storytelling layout |

---

## ✨ Animation System

All animations use **Framer Motion** variants for consistency:

```jsx
import { fadeUp, fadeLeft, fadeRight, viewportOnce } from '../animations/fadeUp'
import { staggerMed, staggerItem } from '../animations/stagger'

// Scroll reveal
<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>

// Stagger children
<motion.div variants={staggerMed} initial="hidden" whileInView="visible" viewport={viewportOnce}>
  <motion.div variants={staggerItem}>...</motion.div>
  <motion.div variants={staggerItem}>...</motion.div>
</motion.div>
```

---

## 📞 Contact Details (Update in Footer.jsx & CTASection.jsx)

- **Phone 1:** +91 8087051208
- **Phone 2:** +91 9422251208
- **Email:** sales.ushainfocom@gmail.com
- **Address:** Shop No 5, Damodar Chambers, Old Kanherewadi, CBS, Shalimar, Nashik, MH 422001
- **Hours:** Mon – Sat : 10:00 AM – 8:30 PM
- **WhatsApp:** https://wa.me/918087051208
- **Facebook:** https://www.facebook.com/ushainfotech01/
- **Instagram:** https://www.instagram.com/usha_infotech/

---

## 🚀 Deployment

### Netlify
```bash
npm run build
# Drag & drop the `dist/` folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Self-hosted (Apache/Nginx)
```bash
npm run build
# Upload contents of dist/ to your web server
# Configure server to redirect all routes to index.html for SPA routing
```

**Nginx config for SPA:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🛠️ Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| react | 18.3 | UI framework |
| react-dom | 18.3 | DOM rendering |
| react-router-dom | 6.23 | Client-side routing |
| framer-motion | 11.0 | Animations |
| gsap | 3.12 | Optional advanced animations |
| lenis | 1.1 | Optional smooth scrolling |
| tailwindcss | 3.4 | Utility CSS |
| vite | 5.2 | Build tool |
