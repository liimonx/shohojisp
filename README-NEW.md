# ShohojISP - Modern ISP Management Platform

> A next-generation ISP management platform built with React, TypeScript, Vite, and Atomix Design System.

![React](https://img.shields.io/badge/React-19.2.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Atomix](https://img.shields.io/badge/Atomix-0.5.1-cyan)
![Vite](https://img.shields.io/badge/Vite-8.0.1-purple)

---

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🎨 **Atomix Design System** - Modern, accessible component library
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant with ARIA labels
- 🎯 **Type-Safe** - Full TypeScript support
- 🎭 **Glassmorphism** - Modern UI with glass effects
- 🌈 **Animated** - Smooth animations and transitions

---

## 📦 Tech Stack

### Core
- **React 19.2.4** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 8.0.1** - Build tool

### Design System
- **Atomix 0.5.1** - Component library
- **Sass 1.98.0** - CSS preprocessor

### Routing
- **React Router DOM 7.13.2** - Client-side routing

### Icons
- **Phosphor Icons 2.1.10** - Icon library

---

## 🎨 Atomix Design System

This project fully leverages the Atomix design system for:

### Layout Components
- `Container` - Responsive max-width wrapper
- `Grid` / `GridCol` - Flexbox-based grid system

### UI Components
- `Card` - Content cards with glass effect
- `Button` - Action buttons with variants
- `Badge` - Labels and tags
- `SectionIntro` - Section headers
- `Steps` - Step indicators

### Navigation
- `Navbar` / `Nav` / `NavItem` - Navigation components
- `Footer` / `FooterSection` / `FooterLink` - Footer components

### Forms
- `Input` / `Select` / `Textarea` - Form inputs
- `FormGroup` - Form field wrapper

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd shohojisp

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
shohojisp/
├── src/
│   ├── components/          # React components
│   │   ├── HeroSection.tsx
│   │   ├── Solutions.tsx
│   │   ├── AIAgents.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── StatsBanner.tsx
│   │   ├── Pricing.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── Navbar.tsx
│   ├── App.tsx              # Main app component
│   ├── App.css              # Custom styles
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── atomix.config.ts         # Atomix theme config
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── package.json             # Dependencies
```

---

## 🎨 Customization

### Theme Configuration

Edit `atomix.config.ts` to customize the design system:

```typescript
export default defineConfig({
  prefix: "atomix",
  theme: {
    extend: {
      colors: {
        primary: { main: '#00f2ff' },
        secondary: { main: '#001a33' },
      },
      borderRadius: {
        md: '12px',
        lg: '16px',
      },
    },
  },
});
```

### Custom Styles

Add brand-specific styles in `src/App.css`:

```css
:root {
  --isp-cyan: #00f2ff;
  --isp-blue-deep: #000810;
  /* More custom variables */
}
```

---

## 📚 Documentation

### Comprehensive Guides

- **[ATOMIX_GUIDE.md](./ATOMIX_GUIDE.md)** - Complete Atomix usage guide
  - Theme configuration
  - Component reference
  - Utility classes
  - Best practices
  - Responsive design

- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Adding new sections
  - Quick start templates
  - Layout patterns
  - Styling guidelines
  - Testing checklist

- **[REFACTORING_COMPLETE.md](./REFACTORING_COMPLETE.md)** - Refactoring details
  - Components refactored
  - CSS optimization
  - Metrics and statistics

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview
  - Summary statistics
  - Key improvements
  - Next steps

---

## 🎯 Key Features

### Hero Section
- Animated background grid
- Floating glow orbs
- Real-time stats display
- Floating status chips
- Responsive layout

### Solutions Grid
- 4-column responsive grid
- Glass effect cards
- Hover animations
- Feature lists

### AI Agents
- Two-column layout
- Image showcase
- Capability cards
- Responsive design

### Pricing
- 3-tier pricing cards
- Featured plan highlight
- Feature comparison
- Call-to-action buttons

### Contact Form
- Responsive form layout
- Form validation
- Success state
- Sticky sidebar

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Size | Device |
|------------|------|--------|
| xs | 0px+ | Mobile |
| sm | 640px+ | Small tablets |
| md | 768px+ | Tablets |
| lg | 1024px+ | Desktop |
| xl | 1280px+ | Large desktop |

All components are fully responsive and follow a mobile-first approach.

---

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Alt text for images
- ✅ Color contrast compliance

---

## 🎨 Design System

### Colors

```css
Primary:   #00f2ff (Cyan)
Secondary: #001a33 (Deep Blue)
Success:   #10b981 (Green)
Purple:    #7c3aed (Purple)
```

### Typography

```css
Font Family: 'Inter', system-ui, sans-serif
Mono Font:   'JetBrains Mono', monospace
```

### Spacing

```css
Section Padding: 7rem
Container Max:   1200px
Grid Gap:        1.5rem
```

---

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript** for type safety
- **BEM** naming for custom CSS
- **Atomix utilities** for common styles
- **Mobile-first** responsive design

---

## 🚀 Deployment

### Build

```bash
npm run build
```

Output will be in the `dist/` directory.

### Deploy to Vercel

```bash
vercel deploy
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

---

## 📊 Performance

- ✅ Optimized bundle size
- ✅ Code splitting
- ✅ Lazy loading images
- ✅ Minimal custom CSS
- ✅ Tree-shaking enabled

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the patterns in `MIGRATION_GUIDE.md`
4. Use Atomix components first
5. Add custom CSS only when necessary
6. Ensure responsive design
7. Add accessibility attributes
8. Test on all breakpoints
9. Submit a pull request

---

## 📝 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

- [Atomix Design System](https://github.com/shohojdhara/atomix)
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ using Atomix Design System**
