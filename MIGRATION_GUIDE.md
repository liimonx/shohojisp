# Adding New Sections - Migration Guide

## 🎯 Quick Start Template

When adding a new section to ShohojISP, follow this template:

```tsx
import { Container, SectionIntro, Grid, GridCol, Card } from '@shohojdhara/atomix';

export default function NewSection() {
  return (
    <section className="isp-section" id="new-section" aria-labelledby="new-section-title">
      <Container>
        <SectionIntro
          alignment="center"
          label="🎯 Category"
          title="Section Title"
          text="Section description goes here"
          className="u-mb-8"
        />

        <Grid>
          <GridCol xs={12} md={6} lg={4}>
            <Card
              glass={true}
              hoverable
              className="u-h-full"
              title="Feature 1"
              text="Description"
            />
          </GridCol>
          {/* More columns */}
        </Grid>
      </Container>
    </section>
  );
}
```

---

## 📋 Step-by-Step Guide

### Step 1: Create Component File

```bash
touch src/components/NewSection.tsx
```

### Step 2: Import Required Components

```tsx
import { 
  Container,      // For max-width wrapper
  Grid,           // For responsive grid
  GridCol,        // For grid columns
  SectionIntro,   // For section header
  Card,           // For content cards
  Button,         // For actions
} from '@shohojdhara/atomix';
```

### Step 3: Define Data Structure

```tsx
const items = [
  {
    id: 1,
    icon: '🎯',
    title: 'Feature Name',
    description: 'Feature description',
  },
  // More items...
];
```

### Step 4: Build Component Structure

```tsx
export default function NewSection() {
  return (
    <section className="isp-section" id="unique-id">
      <Container>
        {/* Header */}
        <SectionIntro {...headerProps} />
        
        {/* Content Grid */}
        <Grid>
          {items.map((item) => (
            <GridCol key={item.id} xs={12} md={6} lg={4}>
              <Card {...cardProps} />
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
```

### Step 5: Add Custom Styles (if needed)

Only add custom CSS for brand-specific elements:

```css
/* src/App.css */

/* =============================================
   NEW SECTION
   ============================================= */
.isp-new-section {
  background: var(--isp-blue-mid);
}

.isp-new-section__custom-element {
  /* Only unique styles not covered by Atomix */
}
```

---

## 🎨 Common Layout Patterns

### Pattern 1: Feature Grid (3 columns)

```tsx
<Grid>
  {features.map((feature) => (
    <GridCol key={feature.id} xs={12} sm={6} lg={4}>
      <Card
        glass={true}
        hoverable
        className="u-h-full"
        icon={<span className="u-fs-2xl">{feature.icon}</span>}
        title={feature.title}
        text={feature.description}
      />
    </GridCol>
  ))}
</Grid>
```

### Pattern 2: Two-Column Content

```tsx
<Grid alignItems="center" className="u-gap-8">
  <GridCol xs={12} lg={6}>
    <img src="/image.jpg" alt="Description" />
  </GridCol>
  <GridCol xs={12} lg={6}>
    <SectionIntro
      label="🎯 Feature"
      title="Title"
      text="Description"
    />
    {/* Additional content */}
  </GridCol>
</Grid>
```

### Pattern 3: Stats/Metrics Row

```tsx
<Grid>
  {stats.map((stat) => (
    <GridCol key={stat.label} xs={6} md={3}>
      <div className="u-text-center">
        <div className="u-fs-3xl u-font-bold u-mb-2">
          {stat.value}<span className="u-text-primary">{stat.suffix}</span>
        </div>
        <div className="u-fs-sm u-text-secondary">
          {stat.label}
        </div>
      </div>
    </GridCol>
  ))}
</Grid>
```

### Pattern 4: Testimonials/Cards

```tsx
<Grid>
  {testimonials.map((item) => (
    <GridCol key={item.id} xs={12} md={4}>
      <Card
        glass={true}
        hoverable
        className="u-h-full"
      >
        <div className="u-fs-2xl u-text-primary u-mb-4">
          {item.rating}
        </div>
        <h3 className="u-fs-lg u-font-bold u-mb-2">
          {item.title}
        </h3>
        <p className="u-text-secondary u-fs-sm">
          {item.content}
        </p>
      </Card>
    </GridCol>
  ))}
</Grid>
```

---

## 🎯 Responsive Grid Configurations

### Mobile-First Breakpoints

```tsx
// Single column on mobile, 2 on tablet, 3 on desktop
<GridCol xs={12} sm={6} lg={4}>

// Single column on mobile, 2 on tablet, 4 on desktop
<GridCol xs={12} sm={6} md={3}>

// Full width on mobile, half on tablet+
<GridCol xs={12} md={6}>

// 2 columns on mobile, 4 on desktop
<GridCol xs={6} lg={3}>
```

### Common Configurations

| Layout | xs (0px+) | sm (640px+) | md (768px+) | lg (1024px+) |
|--------|-----------|-------------|-------------|--------------|
| 1 Column | 12 | 12 | 12 | 12 |
| 2 Columns | 12 | 6 | 6 | 6 |
| 3 Columns | 12 | 6 | 4 | 4 |
| 4 Columns | 12 | 6 | 3 | 3 |
| Sidebar | 12 | 12 | 4 | 3 |
| Main | 12 | 12 | 8 | 9 |

---

## 🎨 Styling Guidelines

### Use Atomix Utilities First

```tsx
// ✅ Good
<div className="u-flex u-items-center u-gap-4 u-mb-6 u-p-4">

// ❌ Avoid
<div className="custom-container">
```

### Custom CSS Only When Needed

```css
/* ✅ Good - Brand-specific animation */
.isp-custom-animation {
  animation: custom-effect 2s ease-in-out infinite;
}

/* ❌ Avoid - Recreating Atomix utilities */
.custom-flex {
  display: flex;
  align-items: center;
}
```

### BEM Naming for Custom Elements

```css
/* Block */
.isp-section-name { }

/* Element */
.isp-section-name__element { }

/* Modifier */
.isp-section-name__element--variant { }
```

---

## 🔧 Props and Configuration

### SectionIntro Props

```tsx
<SectionIntro
  alignment="left" | "center" | "right"  // Text alignment
  label="🎯 Category"                    // Small label
  title={<>Title with <span>styling</span></>}
  text="Description text"
  className="u-mb-8"                     // Additional classes
/>
```

### Card Props

```tsx
<Card
  glass={true}              // Glassmorphism effect
  hoverable={true}          // Hover animation
  flat={false}              // Remove shadow
  row={false}               // Horizontal layout
  size="md"                 // sm | md | lg
  icon={<Icon />}           // Icon element
  title="Card Title"        // Title text
  text="Description"        // Body text
  header={<Custom />}       // Custom header
  actions={<Buttons />}     // Action buttons
  className="u-h-full"      // Equal height
/>
```

### Grid Props

```tsx
<Grid
  alignItems="center"       // start | center | end | stretch
  justifyContent="between"  // start | center | end | between | around
  gap={4}                   // Gap size
  className="custom-class"  // Additional classes
>
```

---

## 📱 Responsive Considerations

### Mobile-First Design

```tsx
// Start with mobile layout
<GridCol xs={12}>
  {/* Mobile: Full width */}
</GridCol>

// Add tablet breakpoint
<GridCol xs={12} md={6}>
  {/* Tablet: Half width */}
</GridCol>

// Add desktop breakpoint
<GridCol xs={12} md={6} lg={4}>
  {/* Desktop: Third width */}
</GridCol>
```

### Responsive Utilities

```tsx
<div className="u-text-center u-md-text-left">
  {/* Center on mobile, left on tablet+ */}
</div>

<div className="u-p-4 u-md-p-6 u-lg-p-8">
  {/* Responsive padding */}
</div>
```

---

## ♿ Accessibility Checklist

```tsx
<section 
  className="isp-section" 
  id="unique-id"
  aria-labelledby="section-title"
>
  <Container>
    <h2 id="section-title">Section Title</h2>
    
    <div role="list" aria-label="Features list">
      <div role="listitem">
        {/* Item content */}
      </div>
    </div>
  </Container>
</section>
```

### Required Attributes

- ✅ `id` on sections for navigation
- ✅ `aria-labelledby` linking to heading
- ✅ `role="list"` and `role="listitem"` for lists
- ✅ `aria-label` for descriptive labels
- ✅ `alt` text for images
- ✅ Semantic HTML (`<section>`, `<nav>`, `<header>`)

---

## 🚀 Performance Tips

### 1. Lazy Load Images

```tsx
<img 
  src="/image.jpg" 
  alt="Description"
  loading="lazy"
/>
```

### 2. Use Equal Height Cards

```tsx
<GridCol xs={12} md={4}>
  <Card className="u-h-full" />
</GridCol>
```

### 3. Optimize Animations

```css
/* Use transform and opacity */
@keyframes slide {
  from { 
    transform: translateY(20px); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}
```

---

## 📝 Example: Complete Section

```tsx
import { Container, SectionIntro, Grid, GridCol, Card, Button } from '@shohojdhara/atomix';

const features = [
  { id: 1, icon: '🚀', title: 'Fast', desc: 'Lightning fast performance' },
  { id: 2, icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
  { id: 3, icon: '📊', title: 'Analytics', desc: 'Real-time insights' },
];

export default function FeaturesSection() {
  return (
    <section 
      className="isp-section isp-section--alt" 
      id="features"
      aria-labelledby="features-title"
    >
      <Container>
        <SectionIntro
          alignment="center"
          label="✨ Features"
          title={<>Powerful Features for<br />Modern ISPs</>}
          text="Everything you need to run your ISP efficiently and scale with confidence."
          className="u-mb-8"
        />

        <Grid role="list" aria-label="Feature list">
          {features.map((feature) => (
            <GridCol key={feature.id} xs={12} sm={6} lg={4}>
              <Card
                glass={true}
                hoverable
                className="u-h-full"
                icon={<span className="u-fs-2xl">{feature.icon}</span>}
                title={feature.title}
                text={feature.desc}
                role="listitem"
                actions={
                  <Button variant="outline-primary" size="sm">
                    Learn More
                  </Button>
                }
              />
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
```

---

## 🎯 Testing Checklist

Before committing your new section:

- [ ] Responsive on all breakpoints (xs, sm, md, lg, xl)
- [ ] Accessibility attributes present
- [ ] Images have alt text
- [ ] Links are keyboard accessible
- [ ] Cards have equal height
- [ ] Animations perform smoothly
- [ ] No console errors
- [ ] Follows BEM naming for custom CSS
- [ ] Uses Atomix utilities where possible
- [ ] Matches brand design system

---

## 📚 Additional Resources

- [Atomix Components](https://github.com/shohojdhara/atomix)
- [ATOMIX_GUIDE.md](./ATOMIX_GUIDE.md)
- [REFACTORING_COMPLETE.md](./REFACTORING_COMPLETE.md)
