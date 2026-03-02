<script setup lang="ts">
interface Props {
  logoSrc?: string
  logoAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  logoSrc: '/images/logo.svg',
  logoAlt: 'Logo',
})
</script>

<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header-inner">
        <div class="brand header-brand">
          <h1 class="header-logo">
            <a href="#">
              <img class="header-logo-image" :src="props.logoSrc" :alt="props.logoAlt" />
            </a>
          </h1>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  padding: 24px 0;
}

.site-header-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
  margin: 0;
}

@media (min-width: 641px) {
  .site-header {
    position: relative;
  }

  .site-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    background: var(--color-bg-3);
    background: linear-gradient(80deg, rgba(36, 40, 48, 0.5) 0%, rgba(36, 40, 48, 0) 100%);
    transform-origin: 0;
    transform: skewY(-12deg);
  }
}
</style>
