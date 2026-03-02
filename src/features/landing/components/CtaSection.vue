<script setup lang="ts">
interface Props {
  title?: string
  buttonText?: string
  buttonHref?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Still not convinced on buying?',
  buttonText: 'Get in touch',
  buttonHref: '#',
})
</script>

<template>
  <section class="cta section">
    <div class="container">
      <div class="cta-inner section-inner">
        <h3 class="section-title mt-0">{{ props.title }}</h3>
        <div class="cta-cta">
          <a class="button button-primary button-wide-mobile" :href="props.buttonHref">
            {{ props.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-inner {
  padding-top: 48px;
  padding-bottom: 48px;
}

.section-title {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-h3);
  color: var(--color-text-1);
}

@media (min-width: 641px) {
  .cta-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 88px;
    padding-bottom: 88px;
  }
}
</style>
