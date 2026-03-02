<script setup lang="ts">
import { useHeroAnimation } from './composables/useHeroAnimation'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PricingSection from './components/PricingSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'

// Initialize animations
useHeroAnimation()
</script>

<template>
  <div class="body-wrap">
    <SiteHeader />

    <main>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.body-wrap {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
