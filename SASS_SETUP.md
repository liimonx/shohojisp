# Atomix Sass Theming Setup

## Structure

```
src/styles/
├── main.scss              # Main entry point
├── theme.scss             # Base theme + Atomix overrides
├── _variables.scss        # Theme tokens
├── _mixins.scss           # Reusable mixins
├── _breakpoints.scss      # Responsive utilities
├── _animations.scss       # Animation keyframes
├── _typography.scss       # Text styles
├── _utilities.scss        # Utility classes
└── components/
    ├── _navbar.scss
    ├── _hero.scss
    ├── _sections.scss
    ├── _stats.scss
    ├── _pricing.scss
    ├── _cards.scss
    ├── _buttons.scss
    ├── _badges.scss
    ├── _forms.scss
    └── _testimonials.scss
```

## Usage

### In Components
```tsx
import '../styles/main.scss';
```

### Using Variables
```scss
.my-component {
  color: $isp-cyan;
  background: $isp-blue-surface;
}
```

### Using Mixins
```scss
.my-card {
  @include card-surface;
  @include glow-effect;
}
```

### Responsive Design
```scss
.my-element {
  @include mobile {
    font-size: 1rem;
  }
  
  @include desktop {
    font-size: 1.5rem;
  }
}
```

## Atomix Integration

CSS variables are automatically mapped to Atomix tokens in `theme.scss`:
- `--atomix-primary-main` → `$isp-cyan`
- `--atomix-surface-main` → `$isp-blue-surface`
- `--atomix-text-primary` → `$isp-text-primary`
