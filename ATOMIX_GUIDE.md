# Atomix Design System - ShohojISP Implementation Guide

## 🎨 Theme Configuration

### Custom Theme Tokens

Located in `atomix.config.ts`:

```typescript
{
  colors: {
    primary: '#00f2ff',      // Cyan brand color
    secondary: '#001a33',    // Deep blue
    success: '#10b981',      // Green
    purple: '#7c3aed',       // Purple accent
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
  },
  spacing: {
    section: '7rem',         // Standard section padding
  },
  fontSize: {
    hero: 'clamp(2.5rem, 5vw, 4rem)',
    title: 'clamp(1.8rem, 4vw, 3rem)',
  },
  boxShadow: {
    glow: '0 0 20px rgba(0, 242, 255, 0.4)',
    card: '0 20px 60px rgba(0, 0, 0, 0.4)',
  }
}
```

---

## 📦 Layout Components

### Container

Responsive container with max-width:

```tsx
import { Container } from '@shohojdhara/atomix';

<Container>
  {/* Content */}
</Container>

// Props:
// - type?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid'
// - className?: string
```

### Grid System

Flexbox-based responsive grid:

```tsx
import { Grid, GridCol } from '@shohojdhara/atomix';

<Grid>
  <GridCol xs={12} sm={6} md={4} lg={3}>
    {/* Column content */}
  </GridCol>
</Grid>

// Grid Props:
// - alignItems?: 'start' | 'center' | 'end' | 'stretch'
// - justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around'
// - gap?: number
// - className?: string

// GridCol Props:
// - xs?: 1-12  (0px+)
// - sm?: 1-12  (640px+)
// - md?: 1-12  (768px+)
// - lg?: 1-12  (1024px+)
// - xl?: 1-12  (1280px+)
```

---

## 🎯 Common Patterns

### 1. Section Layout

```tsx
<section className="isp-section">
  <Container>
    <SectionIntro
      alignment="center"
      label="🚀 Feature"
      title="Section Title"
      text="Description text"
      className="u-mb-8"
    />
    
    <Grid>
      {/* Content */}
    </Grid>
  </Container>
</section>
```

### 2. Responsive Card Grid

```tsx
<Grid>
  {items.map((item) => (
    <GridCol key={item.id} xs={12} sm={6} lg={4}>
      <Card
        glass={true}
        hoverable
        className="u-h-full"
        title={item.title}
        text={item.description}
      />
    </GridCol>
  ))}
</Grid>
```

### 3. Two-Column Layout

```tsx
<Grid alignItems="center">
  <GridCol xs={12} lg={6}>
    {/* Left content */}
  </GridCol>
  <GridCol xs={12} lg={6}>
    {/* Right content */}
  </GridCol>
</Grid>
```

### 4. Form Layout

```tsx
<Grid>
  <GridCol xs={12} sm={6}>
    <FormGroup label="Name" htmlFor="name">
      <Input id="name" type="text" />
    </FormGroup>
  </GridCol>
  <GridCol xs={12} sm={6}>
    <FormGroup label="Email" htmlFor="email">
      <Input id="email" type="email" />
    </FormGroup>
  </GridCol>
</Grid>
```

---

## 🎨 Utility Classes

### Spacing

```css
/* Margin */
.u-m-0 to .u-m-12    /* All sides */
.u-mt-4              /* Top */
.u-mb-4              /* Bottom */
.u-ml-4              /* Left */
.u-mr-4              /* Right */
.u-mx-4              /* Horizontal */
.u-my-4              /* Vertical */
.u-mx-auto           /* Center horizontally */

/* Padding */
.u-p-0 to .u-p-12    /* All sides */
.u-pt-4              /* Top */
.u-pb-4              /* Bottom */
.u-pl-4              /* Left */
.u-pr-4              /* Right */
.u-px-4              /* Horizontal */
.u-py-4              /* Vertical */

/* Gap */
.u-gap-2             /* Flex/Grid gap */
.u-gap-4
.u-gap-6
```

### Flexbox

```css
.u-flex               /* display: flex */
.u-flex-column        /* flex-direction: column */
.u-flex-wrap          /* flex-wrap: wrap */
.u-items-start        /* align-items: flex-start */
.u-items-center       /* align-items: center */
.u-items-end          /* align-items: flex-end */
.u-justify-start      /* justify-content: flex-start */
.u-justify-center     /* justify-content: center */
.u-justify-end        /* justify-content: flex-end */
.u-justify-between    /* justify-content: space-between */
```

### Typography

```css
.u-text-center        /* text-align: center */
.u-text-left          /* text-align: left */
.u-text-right         /* text-align: right */

.u-fs-xs              /* font-size: 0.75rem */
.u-fs-sm              /* font-size: 0.875rem */
.u-fs-base            /* font-size: 1rem */
.u-fs-lg              /* font-size: 1.125rem */
.u-fs-xl              /* font-size: 1.25rem */
.u-fs-2xl             /* font-size: 1.5rem */

.u-font-bold          /* font-weight: 700 */
.u-font-semibold      /* font-weight: 600 */

.u-text-primary       /* Primary text color */
.u-text-secondary     /* Secondary text color */
.u-text-muted         /* Muted text color */
```

### Sizing

```css
.u-w-full             /* width: 100% */
.u-h-full             /* height: 100% */
.u-min-h-screen       /* min-height: 100vh */
```

### Display

```css
.u-block              /* display: block */
.u-inline-block       /* display: inline-block */
.u-hidden             /* display: none */
```

---

## 🎯 Component Props Reference

### Card

```tsx
<Card
  glass={boolean}           // Glass effect
  hoverable={boolean}       // Hover animation
  flat={boolean}           // No shadow
  row={boolean}            // Horizontal layout
  size="sm" | "md" | "lg"  // Size variant
  icon={ReactNode}         // Icon element
  title={string}           // Card title
  text={string}            // Card description
  header={ReactNode}       // Custom header
  actions={ReactNode}      // Action buttons
  className={string}       // Additional classes
/>
```

### Button

```tsx
<Button
  variant="primary" | "secondary" | "outline-primary" | "ghost"
  size="sm" | "md" | "lg"
  fullWidth={boolean}
  disabled={boolean}
  onClick={function}
  href={string}            // For link buttons
  type="button" | "submit"
/>
```

### Badge

```tsx
<Badge
  label={string}
  variant="primary" | "secondary" | "success"
  size="sm" | "md" | "lg"
  glass={boolean}
  icon={ReactNode}
/>
```

### SectionIntro

```tsx
<SectionIntro
  alignment="left" | "center" | "right"
  label={string}           // Small label above title
  title={ReactNode}        // Main title
  text={string}            // Description
  className={string}
/>
```

---

## 🎨 Custom Styling Best Practices

### 1. Use Atomix Utilities First

```tsx
// ✅ Good - Using utilities
<div className="u-flex u-items-center u-gap-4 u-mb-6">

// ❌ Avoid - Custom CSS for common patterns
<div className="custom-flex-container">
```

### 2. BEM for Custom Components

```css
/* ✅ Good - BEM naming */
.isp-hero__title { }
.isp-hero__stat { }
.isp-hero__stat-value { }

/* ❌ Avoid - Generic names */
.title { }
.stat { }
```

### 3. CSS Variables for Brand Values

```css
/* ✅ Good - Using CSS variables */
.custom-element {
  color: var(--isp-cyan);
  background: var(--isp-gradient-hero);
}

/* ❌ Avoid - Hardcoded values */
.custom-element {
  color: #00f2ff;
}
```

### 4. Leverage Atomix Theme

```tsx
// ✅ Good - Using theme colors
<Card className="u-bg-primary">

// ❌ Avoid - Inline styles
<Card style={{ backgroundColor: '#00f2ff' }}>
```

---

## 📱 Responsive Design

### Breakpoints

```
xs: 0px+      (Mobile)
sm: 640px+    (Small tablets)
md: 768px+    (Tablets)
lg: 1024px+   (Desktop)
xl: 1280px+   (Large desktop)
```

### Mobile-First Approach

```tsx
// ✅ Good - Mobile first
<GridCol xs={12} md={6} lg={4}>

// ❌ Avoid - Desktop first
<GridCol lg={4} md={6} xs={12}>
```

### Responsive Utilities

```css
/* Show/hide at breakpoints */
.u-hidden-sm          /* Hidden on sm+ */
.u-block-md           /* Block on md+ */

/* Responsive spacing */
.u-p-4                /* Padding on all screens */
.u-md-p-6             /* Padding on md+ */
.u-lg-p-8             /* Padding on lg+ */
```

---

## ♿ Accessibility

### ARIA Labels

```tsx
<section aria-labelledby="section-title">
  <h2 id="section-title">Title</h2>
</section>

<div role="list" aria-label="Features">
  <div role="listitem">Item</div>
</div>
```

### Semantic HTML

```tsx
// ✅ Good
<nav>
  <ul>
    <li><a href="#">Link</a></li>
  </ul>
</nav>

// ❌ Avoid
<div>
  <div>
    <div><a href="#">Link</a></div>
  </div>
</div>
```

---

## 🚀 Performance Tips

### 1. Use Equal Height Cards

```tsx
<GridCol xs={12} md={4}>
  <Card className="u-h-full" />
</GridCol>
```

### 2. Lazy Load Images

```tsx
<img src="/image.jpg" loading="lazy" alt="Description" />
```

### 3. Optimize Animations

```css
/* Use transform and opacity for animations */
@keyframes slide {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

---

## 📚 Additional Resources

- [Atomix Documentation](https://github.com/shohojdhara/atomix)
- [Atomix Components](https://github.com/shohojdhara/atomix/tree/main/src/components)
- [Atomix Utilities](https://github.com/shohojdhara/atomix/tree/main/docs/styles)

---

## 🎯 Quick Reference

### Common Component Imports

```tsx
import {
  // Layout
  Container,
  Grid,
  GridCol,
  
  // UI
  Card,
  Button,
  Badge,
  
  // Navigation
  Navbar,
  Nav,
  NavItem,
  
  // Forms
  Input,
  Select,
  Textarea,
  FormGroup,
  
  // Content
  SectionIntro,
  Steps,
  List,
  
  // Footer
  Footer,
  FooterSection,
  FooterLink,
} from '@shohojdhara/atomix';
```

### Common Utility Classes

```tsx
className="u-flex u-items-center u-gap-4 u-mb-6"
className="u-text-center u-py-8"
className="u-w-full u-h-full"
className="u-bg-primary u-text-white"
```
