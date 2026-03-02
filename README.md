# Solid Blog - Vue 3 Landing Page Template

A modern Vue 3 landing page template for startups, migrated from an HTML/CSS/JavaScript template to a fully componentized Vue application.

**🌐 Lenguage**: **Spanish** | [Spanish](README-ESP.md)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Getting Started](#2-getting-started)
3. [Project Structure](#3-project-structure)
4. [Migration Strategy: HTML/CSS/JS to Vue](#4-migration-strategy-htmlcssjs-to-vue)
5. [Component Architecture](#5-component-architecture)
6. [Styling System](#6-styling-system)
7. [Animation System](#7-animation-system)
8. [How to Customize & Extend](#8-how-to-customize--extend)
9. [Credits](#9-credits)

---

## 1. Project Overview

Solid Blog is a dark-themed landing page template designed for startups and SaaS products. This project represents a migration from a static HTML/CSS/JavaScript template to a modern Vue 3 application using the Composition API.

### Tech Stack

| Technology       | Version | Purpose                                                    |
| ---------------- | ------- | ---------------------------------------------------------- |
| **Vue**          | 3.5.29  | Frontend framework (Composition API with `<script setup>`) |
| **Vue Router**   | 5.0.3   | Client-side routing                                        |
| **Pinia**        | 3.0.4   | State management                                           |
| **Vite**         | 7.3.1   | Build tool and development server                          |
| **TypeScript**   | 5.9.3   | Type safety                                                |
| **anime.js**     | 3.2.2   | JavaScript animation library                               |
| **ScrollReveal** | 4.0.9   | Scroll-based reveal animations                             |

### Development Tools

| Tool        | Purpose                       |
| ----------- | ----------------------------- |
| **Bun**     | Package manager               |
| **ESLint**  | JavaScript/TypeScript linting |
| **Oxlint**  | Fast Rust-based linter        |
| **Oxfmt**   | Rust-based code formatter     |
| **vue-tsc** | Type checking for Vue files   |

---

## 2. Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **Bun** >= 1.x (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TzzJokerzzT/solid-vue-langin-page.git
cd solid-blog

# Install dependencies
bun install

# Start development server
bun run dev
```

### Available Scripts

| Script    | Command           | Description                                         |
| --------- | ----------------- | --------------------------------------------------- |
| `dev`     | `bun run dev`     | Start development server at `http://localhost:5173` |
| `build`   | `bun run build`   | Type check and build for production                 |
| `preview` | `bun run preview` | Preview the production build locally                |
| `lint`    | `bun run lint`    | Run all linters (Oxlint + ESLint)                   |
| `format`  | `bun run format`  | Format source code with Oxfmt                       |

---

## 3. Project Structure

```
solid-blog/
├── public/
│   └── images/                 # Static SVG assets (logo, icons, illustrations)
├── src/
│   ├── App.vue                 # Root component
│   ├── main.ts                 # Application entry point
│   ├── features/
│   │   └── landing/            # Landing page feature module
│   │       ├── LandingPage.vue
│   │       ├── components/     # Section components
│   │       └── composables/    # Reusable logic (animations)
│   ├── router/
│   │   └── index.ts            # Vue Router configuration
│   ├── shared/
│   │   └── styles/             # Global CSS modules
│   ├── stores/
│   │   └── counter.ts          # Example Pinia store
│   └── view/
│       └── LangingPageView.vue # Router view wrapper
├── index.html                  # HTML entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### Architecture Overview

The project follows a **feature-based architecture**:

- **`features/`**: Contains feature modules (e.g., `landing/`). Each feature encapsulates its own components, composables, and logic.
- **`shared/`**: Contains resources shared across features (global styles, utilities).
- **`router/`**: Vue Router configuration.
- **`stores/`**: Pinia state management stores.
- **`view/`**: Route-level view components.

This structure allows for scalability—new features can be added as separate modules without cluttering the codebase.

---

## 4. Migration Strategy: HTML/CSS/JS to Vue

### Overview

The migration followed these key principles:

1. **Component Decomposition**: Each HTML section became a Vue component
2. **CSS Modularization**: Global CSS was split into logical modules
3. **Logic Extraction**: JavaScript animations were converted to Vue composables
4. **Type Safety**: TypeScript was added for all components and logic

### HTML Sections to Vue Components

| Original HTML Section        | Vue Component                             |
| ---------------------------- | ----------------------------------------- |
| `<header>`                   | `SiteHeader.vue`                          |
| `<section class="hero">`     | `HeroSection.vue`                         |
| `<section class="features">` | `FeaturesSection.vue` + `FeatureCard.vue` |
| `<section class="pricing">`  | `PricingSection.vue`                      |
| `<section class="cta">`      | `CtaSection.vue`                          |
| `<footer>`                   | `SiteFooter.vue`                          |

### CSS Organization

The original monolithic CSS file was split into:

| File             | Content                               |
| ---------------- | ------------------------------------- |
| `variables.css`  | CSS custom properties (design tokens) |
| `reset.css`      | Browser normalization                 |
| `typography.css` | Heading and text styles               |
| `buttons.css`    | Button component styles               |
| `utilities.css`  | Utility classes                       |
| `main.css`       | Entry point that imports all modules  |

### JavaScript to Composables

The original JavaScript animation code was converted to a Vue composable:

```
Original: inline <script> with anime.js calls
Migrated: src/features/landing/composables/useHeroAnimation.ts
```

This composable:

- Encapsulates all hero section animation logic
- Uses Vue lifecycle hooks (`onMounted`, `onUnmounted`)
- Provides proper cleanup of animations
- Handles ScrollReveal initialization

---

## 5. Component Architecture

### Component Hierarchy

```
App.vue
└── RouterView
    └── LangingPageView.vue
        └── LandingPage.vue
            ├── SiteHeader.vue
            ├── HeroSection.vue
            ├── FeaturesSection.vue
            │   └── FeatureCard.vue (×6)
            ├── PricingSection.vue
            ├── CtaSection.vue
            └── SiteFooter.vue
```

### Component Reference

#### SiteHeader

**Path:** `src/features/landing/components/SiteHeader.vue`

**Description:** Site header with logo and navigation area.

**Props:**

| Prop      | Type     | Default              | Description            |
| --------- | -------- | -------------------- | ---------------------- |
| `logoSrc` | `string` | `'/images/logo.svg'` | Path to the logo image |
| `logoAlt` | `string` | `'Solid'`            | Alt text for the logo  |

**Usage:**

```vue
<SiteHeader logo-src="/images/custom-logo.svg" logo-alt="My Brand" />
```

---

#### HeroSection

**Path:** `src/features/landing/components/HeroSection.vue`

**Description:** Hero section with animated geometric shapes, headline, description, and CTA buttons.

**Props:**

| Prop                  | Type     | Default                           | Description               |
| --------------------- | -------- | --------------------------------- | ------------------------- |
| `title`               | `string` | `'Landing template for startups'` | Main headline             |
| `description`         | `string` | `'Our landing page template...'`  | Hero description text     |
| `primaryButtonText`   | `string` | `'Get started now'`               | Primary CTA button text   |
| `primaryButtonHref`   | `string` | `'#'`                             | Primary CTA button link   |
| `secondaryButtonText` | `string` | `'Learn more'`                    | Secondary CTA button text |
| `secondaryButtonHref` | `string` | `'#'`                             | Secondary CTA button link |

**Usage:**

```vue
<HeroSection
  title="Welcome to My App"
  description="Build amazing products faster."
  primary-button-text="Start Free Trial"
  primary-button-href="/signup"
/>
```

---

#### FeaturesSection

**Path:** `src/features/landing/components/FeaturesSection.vue`

**Description:** Features grid section displaying feature cards.

**Props:**

| Prop          | Type        | Default                        | Description              |
| ------------- | ----------- | ------------------------------ | ------------------------ |
| `title`       | `string`    | `'Build up the whole...'`      | Section title            |
| `description` | `string`    | `'Excepteur sint occaecat...'` | Section description      |
| `features`    | `Feature[]` | 6 default features             | Array of feature objects |

**Feature Object Interface:**

```typescript
interface Feature {
  icon: string // Path to icon SVG
  title: string // Feature title
  description: string // Feature description
}
```

**Usage:**

```vue
<FeaturesSection
  title="Why Choose Us"
  :features="[
    { icon: '/images/icon-1.svg', title: 'Fast', description: 'Lightning speed' },
    { icon: '/images/icon-2.svg', title: 'Secure', description: 'Bank-level security' },
  ]"
/>
```

---

#### FeatureCard

**Path:** `src/features/landing/components/FeatureCard.vue`

**Description:** Individual feature card with icon, title, and description.

**Props:**

| Prop          | Type     | Required | Description          |
| ------------- | -------- | -------- | -------------------- |
| `icon`        | `string` | Yes      | Path to the icon SVG |
| `title`       | `string` | Yes      | Feature title        |
| `description` | `string` | Yes      | Feature description  |

**Usage:**

```vue
<FeatureCard
  icon="/images/feature-icon-01.svg"
  title="Instant Setup"
  description="Get started in minutes with our simple setup process."
/>
```

---

#### PricingSection

**Path:** `src/features/landing/components/PricingSection.vue`

**Description:** Pricing table section with plan details and features list.

**Props:**

| Prop          | Type       | Default                        | Description               |
| ------------- | ---------- | ------------------------------ | ------------------------- |
| `title`       | `string`   | `'Simple, transarent pricing'` | Section title             |
| `description` | `string`   | `'Excepteur sint occaecat...'` | Section description       |
| `planName`    | `string`   | `'Starter Plan'`               | Name of the pricing plan  |
| `price`       | `string`   | `'$34'`                        | Price display             |
| `priceLabel`  | `string`   | `'/month'`                     | Price period label        |
| `features`    | `string[]` | 4 default features             | List of included features |
| `buttonText`  | `string`   | `'Get started now'`            | CTA button text           |
| `buttonHref`  | `string`   | `'#'`                          | CTA button link           |

**Usage:**

```vue
<PricingSection
  title="Choose Your Plan"
  plan-name="Pro Plan"
  price="$99"
  price-label="/month"
  :features="['Unlimited projects', '24/7 Support', 'API Access']"
/>
```

---

#### CtaSection

**Path:** `src/features/landing/components/CtaSection.vue`

**Description:** Call-to-action section with title and button.

**Props:**

| Prop         | Type     | Default                    | Description  |
| ------------ | -------- | -------------------------- | ------------ |
| `title`      | `string` | `'Still not convinced...'` | CTA headline |
| `buttonText` | `string` | `'Get started now'`        | Button text  |
| `buttonHref` | `string` | `'#'`                      | Button link  |

**Usage:**

```vue
<CtaSection title="Ready to get started?" button-text="Sign Up Free" button-href="/register" />
```

---

#### SiteFooter

**Path:** `src/features/landing/components/SiteFooter.vue`

**Description:** Site footer with logo, navigation links, social icons, and copyright.

**Props:**

| Prop      | Type     | Default              | Description            |
| --------- | -------- | -------------------- | ---------------------- |
| `logoSrc` | `string` | `'/images/logo.svg'` | Path to the logo image |
| `logoAlt` | `string` | `'Solid'`            | Alt text for the logo  |

**Usage:**

```vue
<SiteFooter logo-src="/images/footer-logo.svg" />
```

---

## 6. Styling System

### CSS Variables Reference

The design system is built on CSS custom properties defined in `src/shared/styles/variables.css`.

#### Colors

| Variable           | Value     | Usage                      |
| ------------------ | --------- | -------------------------- |
| `--color-bg`       | `#1d2026` | Primary background         |
| `--color-bg-alt`   | `#2c3039` | Alternative background     |
| `--color-text`     | `#ffffff` | Primary text               |
| `--color-text-alt` | `#8a94a7` | Secondary/muted text       |
| `--color-primary`  | `#0270d7` | Primary brand color (blue) |
| `--color-accent`   | `#00bffb` | Accent color (cyan)        |

#### Typography

| Variable           | Value                     | Usage            |
| ------------------ | ------------------------- | ---------------- |
| `--font-family`    | `'Heebo', sans-serif`     | Base font family |
| `--font-size-base` | `16px`                    | Base font size   |
| `--font-size-sm`   | `14px`                    | Small text       |
| `--font-size-xs`   | `12px`                    | Extra small text |
| `--font-size-h1`   | `38px` / `48px` (desktop) | Heading 1        |
| `--font-size-h2`   | `30px` / `38px` (desktop) | Heading 2        |
| `--font-size-h3`   | `24px`                    | Heading 3        |
| `--font-size-h4`   | `20px`                    | Heading 4        |

#### Spacing

| Variable       | Value  |
| -------------- | ------ |
| `--spacing-8`  | `8px`  |
| `--spacing-16` | `16px` |
| `--spacing-24` | `24px` |
| `--spacing-32` | `32px` |
| `--spacing-48` | `48px` |
| `--spacing-64` | `64px` |

### Utility Classes

#### Spacing Utilities

```css
/* Margins */
.m-8, .m-16, .m-24, .m-32, .m-48, .m-64
.mt-8, .mt-16, .mt-24, .mt-32, .mt-48, .mt-64  /* margin-top */
.mb-8, .mb-16, .mb-24, .mb-32, .mb-48, .mb-64  /* margin-bottom */

/* Padding */
.p-8, .p-16, .p-24, .p-32, .p-48, .p-64
.pt-8, .pt-16, .pt-24, .pt-32, .pt-48, .pt-64  /* padding-top */
.pb-8, .pb-16, .pb-24, .pb-32, .pb-48, .pb-64  /* padding-bottom */
```

#### Text Utilities

```css
.text-center    /* text-align: center */
.text-left      /* text-align: left */
.text-right     /* text-align: right */
.text-sm        /* font-size: var(--font-size-sm) */
.text-xs        /* font-size: var(--font-size-xs) */
.text-alt       /* color: var(--color-text-alt) */
```

#### Layout Utilities

```css
.container      /* max-width: 1080px, centered */
.container-sm   /* max-width: 800px, centered */
```

#### Divider Utilities

```css
.has-top-divider     /* Border top with subtle color */
.has-bottom-divider  /* Border bottom with subtle color */
```

### Customizing the Theme

To customize the color scheme, modify the CSS variables in `src/shared/styles/variables.css`:

```css
:root {
  /* Change to your brand colors */
  --color-primary: #your-primary-color;
  --color-accent: #your-accent-color;
  --color-bg: #your-background-color;
}
```

---

## 7. Animation System

### anime.js Integration

The hero section animations are managed by the `useHeroAnimation` composable.

**Path:** `src/features/landing/composables/useHeroAnimation.ts`

#### How It Works

1. **Initialization**: The composable accepts a template ref pointing to the hero section
2. **Timeline Animation**: Creates an anime.js timeline that animates the geometric shapes
3. **Lifecycle Management**: Starts animations on `onMounted` and cleans up on `onUnmounted`

#### Animation Sequence

```typescript
// Simplified animation flow
anime
  .timeline()
  .add({
    targets: '.hero-ball',
    translateY: ['-80px', '0'],
    opacity: [0, 1],
    duration: 800,
  })
  .add(
    {
      targets: '.hero-illustration',
      translateY: ['40px', '0'],
      opacity: [0, 1],
      duration: 600,
    },
    '-=400',
  )
```

### ScrollReveal Integration

ScrollReveal is initialized in the same composable to animate elements as they enter the viewport.

#### Default Configuration

```typescript
ScrollReveal().reveal('.feature-card', {
  duration: 600,
  distance: '20px',
  origin: 'bottom',
  interval: 100,
})
```

### Modifying Animations

To modify the hero animations:

1. Open `src/features/landing/composables/useHeroAnimation.ts`
2. Modify the anime.js timeline or ScrollReveal configuration
3. Refer to documentation:
   - anime.js: https://animejs.com/documentation/
   - ScrollReveal: https://scrollrevealjs.org/api/reveal.html

---

## 8. How to Customize & Extend

### Adding a New Section Component

1. **Create the component file:**

```bash
touch src/features/landing/components/TestimonialsSection.vue
```

2. **Define the component:**

```vue
<script setup lang="ts">
interface Testimonial {
  quote: string
  author: string
  role: string
}

withDefaults(
  defineProps<{
    title?: string
    testimonials?: Testimonial[]
  }>(),
  {
    title: 'What Our Customers Say',
    testimonials: () => [],
  },
)
</script>

<template>
  <section class="testimonials section">
    <div class="container">
      <div class="section-header center-content">
        <h2 class="section-title mt-0">{{ title }}</h2>
      </div>
      <!-- Add your testimonial cards here -->
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  /* Your styles */
}
</style>
```

3. **Add to LandingPage.vue:**

```vue
<script setup lang="ts">
import TestimonialsSection from './components/TestimonialsSection.vue'
</script>

<template>
  <div class="landing-page">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <!-- Add here -->
      <PricingSection />
      <CtaSection />
    </main>
    <SiteFooter />
  </div>
</template>
```

### Modifying the Color Scheme

1. Open `src/shared/styles/variables.css`
2. Update the color variables:

```css
:root {
  /* Light theme example */
  --color-bg: #ffffff;
  --color-bg-alt: #f5f5f5;
  --color-text: #1d2026;
  --color-text-alt: #6b7280;
  --color-primary: #2563eb;
  --color-accent: #06b6d4;
}
```

### Adding New Routes

1. **Create a new view:**

```bash
touch src/view/AboutPageView.vue
```

2. **Register the route in `src/router/index.ts`:**

```typescript
import AboutPageView from '@/view/AboutPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LangingPageView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPageView,
    },
  ],
})
```

---

## 9. Credits

This project is a Vue 3 migration of the **Solid** HTML template.

**Original Template:** [Cruip - Solid](https://cruip.com/solid/)

Cruip creates high-quality HTML, React, Vue, and Tailwind CSS templates for startups and SaaS businesses. The original Solid template provided the design foundation, HTML structure, and CSS styles that were migrated to this Vue 3 implementation.

---

_Documentation generated following the Diátaxis Framework principles._
