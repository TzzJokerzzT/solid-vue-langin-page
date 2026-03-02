# Solid Blog - Plantilla de Landing Page con Vue 3

Una plantilla moderna de landing page con Vue 3 para startups, migrada desde una plantilla HTML/CSS/JavaScript a una aplicación Vue completamente componentizada.

---

## Tabla de Contenidos

1. [Descripción del Proyecto](#1-descripción-del-proyecto)
2. [Primeros Pasos](#2-primeros-pasos)
3. [Estructura del Proyecto](#3-estructura-del-proyecto)
4. [Estrategia de Migración: HTML/CSS/JS a Vue](#4-estrategia-de-migración-htmlcssjs-a-vue)
5. [Arquitectura de Componentes](#5-arquitectura-de-componentes)
6. [Sistema de Estilos](#6-sistema-de-estilos)
7. [Sistema de Animaciones](#7-sistema-de-animaciones)
8. [Cómo Personalizar y Extender](#8-cómo-personalizar-y-extender)
9. [Créditos](#9-créditos)

---

## 1. Descripción del Proyecto

Solid Blog es una plantilla de landing page con tema oscuro diseñada para startups y productos SaaS. Este proyecto representa una migración desde una plantilla estática HTML/CSS/JavaScript hacia una aplicación moderna con Vue 3 utilizando la Composition API.

### Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Vue** | 3.5.29 | Framework frontend (Composition API con `<script setup>`) |
| **Vue Router** | 5.0.3 | Enrutamiento del lado del cliente |
| **Pinia** | 3.0.4 | Gestión de estado |
| **Vite** | 7.3.1 | Herramienta de construcción y servidor de desarrollo |
| **TypeScript** | 5.9.3 | Seguridad de tipos |
| **anime.js** | 3.2.2 | Biblioteca de animaciones JavaScript |
| **ScrollReveal** | 4.0.9 | Animaciones basadas en scroll |

### Herramientas de Desarrollo

| Herramienta | Propósito |
|-------------|-----------|
| **Bun** | Gestor de paquetes |
| **ESLint** | Análisis de código JavaScript/TypeScript |
| **Oxlint** | Analizador rápido basado en Rust |
| **Oxfmt** | Formateador de código basado en Rust |
| **vue-tsc** | Verificación de tipos para archivos Vue |

---

## 2. Primeros Pasos

### Prerrequisitos

- **Node.js** >= 18.x
- **Bun** >= 1.x (recomendado) o npm/yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd solid-blog

# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun run dev
```

### Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `dev` | `bun run dev` | Inicia el servidor de desarrollo en `http://localhost:5173` |
| `build` | `bun run build` | Verifica tipos y construye para producción |
| `preview` | `bun run preview` | Previsualiza la construcción de producción localmente |
| `lint` | `bun run lint` | Ejecuta todos los analizadores (Oxlint + ESLint) |
| `format` | `bun run format` | Formatea el código fuente con Oxfmt |

---

## 3. Estructura del Proyecto

```
solid-blog/
├── public/
│   └── images/                 # Recursos SVG estáticos (logo, iconos, ilustraciones)
├── src/
│   ├── App.vue                 # Componente raíz
│   ├── main.ts                 # Punto de entrada de la aplicación
│   ├── features/
│   │   └── landing/            # Módulo de la landing page
│   │       ├── LandingPage.vue
│   │       ├── components/     # Componentes de sección
│   │       └── composables/    # Lógica reutilizable (animaciones)
│   ├── router/
│   │   └── index.ts            # Configuración de Vue Router
│   ├── shared/
│   │   └── styles/             # Módulos CSS globales
│   ├── stores/
│   │   └── counter.ts          # Store de ejemplo con Pinia
│   └── view/
│       └── LangingPageView.vue # Wrapper de vista para el router
├── index.html                  # Punto de entrada HTML
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### Visión General de la Arquitectura

El proyecto sigue una **arquitectura basada en características (features)**:

- **`features/`**: Contiene módulos de características (ej: `landing/`). Cada característica encapsula sus propios componentes, composables y lógica.
- **`shared/`**: Contiene recursos compartidos entre características (estilos globales, utilidades).
- **`router/`**: Configuración de Vue Router.
- **`stores/`**: Stores de gestión de estado con Pinia.
- **`view/`**: Componentes de vista a nivel de ruta.

Esta estructura permite escalabilidad—nuevas características pueden añadirse como módulos separados sin saturar el código base.

---

## 4. Estrategia de Migración: HTML/CSS/JS a Vue

### Visión General

La migración siguió estos principios clave:

1. **Descomposición en Componentes**: Cada sección HTML se convirtió en un componente Vue
2. **Modularización del CSS**: El CSS global se dividió en módulos lógicos
3. **Extracción de Lógica**: Las animaciones JavaScript se convirtieron en composables de Vue
4. **Seguridad de Tipos**: Se añadió TypeScript para todos los componentes y lógica

### Secciones HTML a Componentes Vue

| Sección HTML Original | Componente Vue |
|-----------------------|----------------|
| `<header>` | `SiteHeader.vue` |
| `<section class="hero">` | `HeroSection.vue` |
| `<section class="features">` | `FeaturesSection.vue` + `FeatureCard.vue` |
| `<section class="pricing">` | `PricingSection.vue` |
| `<section class="cta">` | `CtaSection.vue` |
| `<footer>` | `SiteFooter.vue` |

### Organización del CSS

El archivo CSS monolítico original se dividió en:

| Archivo | Contenido |
|---------|-----------|
| `variables.css` | Propiedades CSS personalizadas (tokens de diseño) |
| `reset.css` | Normalización del navegador |
| `typography.css` | Estilos de encabezados y texto |
| `buttons.css` | Estilos del componente botón |
| `utilities.css` | Clases utilitarias |
| `main.css` | Punto de entrada que importa todos los módulos |

### JavaScript a Composables

El código JavaScript original de animaciones se convirtió en un composable de Vue:

```
Original: <script> en línea con llamadas a anime.js
Migrado: src/features/landing/composables/useHeroAnimation.ts
```

Este composable:
- Encapsula toda la lógica de animación de la sección hero
- Utiliza hooks del ciclo de vida de Vue (`onMounted`, `onUnmounted`)
- Proporciona limpieza adecuada de las animaciones
- Maneja la inicialización de ScrollReveal

---

## 5. Arquitectura de Componentes

### Jerarquía de Componentes

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

### Referencia de Componentes

#### SiteHeader

**Ruta:** `src/features/landing/components/SiteHeader.vue`

**Descripción:** Encabezado del sitio con logo y área de navegación.

**Props:**

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `logoSrc` | `string` | `'/images/logo.svg'` | Ruta a la imagen del logo |
| `logoAlt` | `string` | `'Solid'` | Texto alternativo para el logo |

**Uso:**

```vue
<SiteHeader logo-src="/images/custom-logo.svg" logo-alt="Mi Marca" />
```

---

#### HeroSection

**Ruta:** `src/features/landing/components/HeroSection.vue`

**Descripción:** Sección hero con formas geométricas animadas, titular, descripción y botones de llamada a la acción.

**Props:**

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `title` | `string` | `'Landing template for startups'` | Titular principal |
| `description` | `string` | `'Our landing page template...'` | Texto descriptivo del hero |
| `primaryButtonText` | `string` | `'Get started now'` | Texto del botón CTA primario |
| `primaryButtonHref` | `string` | `'#'` | Enlace del botón CTA primario |
| `secondaryButtonText` | `string` | `'Learn more'` | Texto del botón CTA secundario |
| `secondaryButtonHref` | `string` | `'#'` | Enlace del botón CTA secundario |

**Uso:**

```vue
<HeroSection
  title="Bienvenido a Mi App"
  description="Construye productos increíbles más rápido."
  primary-button-text="Iniciar Prueba Gratis"
  primary-button-href="/registro"
/>
```

---

#### FeaturesSection

**Ruta:** `src/features/landing/components/FeaturesSection.vue`

**Descripción:** Sección de cuadrícula de características mostrando tarjetas de características.

**Props:**

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `title` | `string` | `'Build up the whole...'` | Título de la sección |
| `description` | `string` | `'Excepteur sint occaecat...'` | Descripción de la sección |
| `features` | `Feature[]` | 6 características por defecto | Array de objetos de características |

**Interfaz del Objeto Feature:**

```typescript
interface Feature {
  icon: string      // Ruta al icono SVG
  title: string     // Título de la característica
  description: string // Descripción de la característica
}
```

**Uso:**

```vue
<FeaturesSection
  title="Por Qué Elegirnos"
  :features="[
    { icon: '/images/icon-1.svg', title: 'Rápido', description: 'Velocidad relámpago' },
    { icon: '/images/icon-2.svg', title: 'Seguro', description: 'Seguridad nivel bancario' }
  ]"
/>
```

---

#### FeatureCard

**Ruta:** `src/features/landing/components/FeatureCard.vue`

**Descripción:** Tarjeta individual de característica con icono, título y descripción.

**Props:**

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `icon` | `string` | Sí | Ruta al icono SVG |
| `title` | `string` | Sí | Título de la característica |
| `description` | `string` | Sí | Descripción de la característica |

**Uso:**

```vue
<FeatureCard
  icon="/images/feature-icon-01.svg"
  title="Configuración Instantánea"
  description="Comienza en minutos con nuestro proceso de configuración simple."
/>
```

---

#### PricingSection

**Ruta:** `src/features/landing/components/PricingSection.vue`

**Descripción:** Sección de tabla de precios con detalles del plan y lista de características.

**Props:**

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `title` | `string` | `'Simple, transarent pricing'` | Título de la sección |
| `description` | `string` | `'Excepteur sint occaecat...'` | Descripción de la sección |
| `planName` | `string` | `'Starter Plan'` | Nombre del plan de precios |
| `price` | `string` | `'$34'` | Precio mostrado |
| `priceLabel` | `string` | `'/month'` | Etiqueta del período de precio |
| `features` | `string[]` | 4 características por defecto | Lista de características incluidas |
| `buttonText` | `string` | `'Get started now'` | Texto del botón CTA |
| `buttonHref` | `string` | `'#'` | Enlace del botón CTA |

**Uso:**

```vue
<PricingSection
  title="Elige Tu Plan"
  plan-name="Plan Pro"
  price="$99"
  price-label="/mes"
  :features="['Proyectos ilimitados', 'Soporte 24/7', 'Acceso a API']"
/>
```

---

#### CtaSection

**Ruta:** `src/features/landing/components/CtaSection.vue`

**Descripción:** Sección de llamada a la acción con título y botón.

**Props:**

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `title` | `string` | `'Still not convinced...'` | Titular del CTA |
| `buttonText` | `string` | `'Get started now'` | Texto del botón |
| `buttonHref` | `string` | `'#'` | Enlace del botón |

**Uso:**

```vue
<CtaSection
  title="¿Listo para comenzar?"
  button-text="Regístrate Gratis"
  button-href="/registro"
/>
```

---

#### SiteFooter

**Ruta:** `src/features/landing/components/SiteFooter.vue`

**Descripción:** Pie de página del sitio con logo, enlaces de navegación, iconos sociales y copyright.

**Props:**

| Prop | Tipo | Por Defecto | Descripción |
|------|------|-------------|-------------|
| `logoSrc` | `string` | `'/images/logo.svg'` | Ruta a la imagen del logo |
| `logoAlt` | `string` | `'Solid'` | Texto alternativo para el logo |

**Uso:**

```vue
<SiteFooter logo-src="/images/footer-logo.svg" />
```

---

## 6. Sistema de Estilos

### Referencia de Variables CSS

El sistema de diseño está construido sobre propiedades CSS personalizadas definidas en `src/shared/styles/variables.css`.

#### Colores

| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-bg` | `#1d2026` | Fondo principal |
| `--color-bg-alt` | `#2c3039` | Fondo alternativo |
| `--color-text` | `#ffffff` | Texto principal |
| `--color-text-alt` | `#8a94a7` | Texto secundario/atenuado |
| `--color-primary` | `#0270d7` | Color primario de marca (azul) |
| `--color-accent` | `#00bffb` | Color de acento (cian) |

#### Tipografía

| Variable | Valor | Uso |
|----------|-------|-----|
| `--font-family` | `'Heebo', sans-serif` | Familia tipográfica base |
| `--font-size-base` | `16px` | Tamaño de fuente base |
| `--font-size-sm` | `14px` | Texto pequeño |
| `--font-size-xs` | `12px` | Texto extra pequeño |
| `--font-size-h1` | `38px` / `48px` (escritorio) | Encabezado 1 |
| `--font-size-h2` | `30px` / `38px` (escritorio) | Encabezado 2 |
| `--font-size-h3` | `24px` | Encabezado 3 |
| `--font-size-h4` | `20px` | Encabezado 4 |

#### Espaciado

| Variable | Valor |
|----------|-------|
| `--spacing-8` | `8px` |
| `--spacing-16` | `16px` |
| `--spacing-24` | `24px` |
| `--spacing-32` | `32px` |
| `--spacing-48` | `48px` |
| `--spacing-64` | `64px` |

### Clases Utilitarias

#### Utilidades de Espaciado

```css
/* Márgenes */
.m-8, .m-16, .m-24, .m-32, .m-48, .m-64
.mt-8, .mt-16, .mt-24, .mt-32, .mt-48, .mt-64  /* margin-top */
.mb-8, .mb-16, .mb-24, .mb-32, .mb-48, .mb-64  /* margin-bottom */

/* Padding */
.p-8, .p-16, .p-24, .p-32, .p-48, .p-64
.pt-8, .pt-16, .pt-24, .pt-32, .pt-48, .pt-64  /* padding-top */
.pb-8, .pb-16, .pb-24, .pb-32, .pb-48, .pb-64  /* padding-bottom */
```

#### Utilidades de Texto

```css
.text-center    /* text-align: center */
.text-left      /* text-align: left */
.text-right     /* text-align: right */
.text-sm        /* font-size: var(--font-size-sm) */
.text-xs        /* font-size: var(--font-size-xs) */
.text-alt       /* color: var(--color-text-alt) */
```

#### Utilidades de Layout

```css
.container      /* max-width: 1080px, centrado */
.container-sm   /* max-width: 800px, centrado */
```

#### Utilidades de Divisores

```css
.has-top-divider     /* Borde superior con color sutil */
.has-bottom-divider  /* Borde inferior con color sutil */
```

### Personalizando el Tema

Para personalizar el esquema de colores, modifica las variables CSS en `src/shared/styles/variables.css`:

```css
:root {
  /* Cambia a los colores de tu marca */
  --color-primary: #tu-color-primario;
  --color-accent: #tu-color-de-acento;
  --color-bg: #tu-color-de-fondo;
}
```

---

## 7. Sistema de Animaciones

### Integración de anime.js

Las animaciones de la sección hero son gestionadas por el composable `useHeroAnimation`.

**Ruta:** `src/features/landing/composables/useHeroAnimation.ts`

#### Cómo Funciona

1. **Inicialización**: El composable acepta un template ref apuntando a la sección hero
2. **Animación de Timeline**: Crea un timeline de anime.js que anima las formas geométricas
3. **Gestión del Ciclo de Vida**: Inicia animaciones en `onMounted` y limpia en `onUnmounted`

#### Secuencia de Animación

```typescript
// Flujo de animación simplificado
anime.timeline()
  .add({
    targets: '.hero-ball',
    translateY: ['-80px', '0'],
    opacity: [0, 1],
    duration: 800
  })
  .add({
    targets: '.hero-illustration',
    translateY: ['40px', '0'],
    opacity: [0, 1],
    duration: 600
  }, '-=400')
```

### Integración de ScrollReveal

ScrollReveal se inicializa en el mismo composable para animar elementos cuando entran en el viewport.

#### Configuración Por Defecto

```typescript
ScrollReveal().reveal('.feature-card', {
  duration: 600,
  distance: '20px',
  origin: 'bottom',
  interval: 100
})
```

### Modificando las Animaciones

Para modificar las animaciones del hero:

1. Abre `src/features/landing/composables/useHeroAnimation.ts`
2. Modifica el timeline de anime.js o la configuración de ScrollReveal
3. Consulta la documentación:
   - anime.js: https://animejs.com/documentation/
   - ScrollReveal: https://scrollrevealjs.org/api/reveal.html

---

## 8. Cómo Personalizar y Extender

### Añadiendo un Nuevo Componente de Sección

1. **Crea el archivo del componente:**

```bash
touch src/features/landing/components/TestimonialsSection.vue
```

2. **Define el componente:**

```vue
<script setup lang="ts">
interface Testimonial {
  quote: string
  author: string
  role: string
}

withDefaults(defineProps<{
  title?: string
  testimonials?: Testimonial[]
}>(), {
  title: 'Lo Que Dicen Nuestros Clientes',
  testimonials: () => []
})
</script>

<template>
  <section class="testimonials section">
    <div class="container">
      <div class="section-header center-content">
        <h2 class="section-title mt-0">{{ title }}</h2>
      </div>
      <!-- Añade tus tarjetas de testimonios aquí -->
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  /* Tus estilos */
}
</style>
```

3. **Añádelo a LandingPage.vue:**

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
      <TestimonialsSection />  <!-- Añádelo aquí -->
      <PricingSection />
      <CtaSection />
    </main>
    <SiteFooter />
  </div>
</template>
```

### Modificando el Esquema de Colores

1. Abre `src/shared/styles/variables.css`
2. Actualiza las variables de color:

```css
:root {
  /* Ejemplo de tema claro */
  --color-bg: #ffffff;
  --color-bg-alt: #f5f5f5;
  --color-text: #1d2026;
  --color-text-alt: #6b7280;
  --color-primary: #2563eb;
  --color-accent: #06b6d4;
}
```

### Añadiendo Nuevas Rutas

1. **Crea una nueva vista:**

```bash
touch src/view/AboutPageView.vue
```

2. **Registra la ruta en `src/router/index.ts`:**

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

## 9. Créditos

Este proyecto es una migración a Vue 3 de la plantilla HTML **Solid**.

**Plantilla Original:** [Cruip - Solid](https://cruip.com/solid/)

Cruip crea plantillas de alta calidad en HTML, React, Vue y Tailwind CSS para startups y negocios SaaS. La plantilla original Solid proporcionó la base de diseño, estructura HTML y estilos CSS que fueron migrados a esta implementación con Vue 3.

---

*Documentación generada siguiendo los principios del Framework Diátaxis.*
