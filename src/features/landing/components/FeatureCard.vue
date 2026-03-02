<script setup lang="ts">
interface Props {
  iconSrc: string
  iconAlt?: string
  title: string
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  iconAlt: 'Feature icon',
})
</script>

<template>
  <div class="feature text-center">
    <div class="feature-inner">
      <div class="feature-icon">
        <img :src="props.iconSrc" :alt="props.iconAlt" />
      </div>
      <h4 class="feature-title mt-24">{{ props.title }}</h4>
      <p class="text-sm mb-0">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.feature {
  padding: 16px 0;
  width: 100%;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
}

.feature-inner {
  height: 100%;
}

.feature-icon {
  display: flex;
  justify-content: center;
}

.feature-icon img {
  width: 64px;
  height: 64px;
}

.feature-title {
  color: var(--color-text-1);
}

@media (min-width: 641px) {
  .feature {
    padding: 32px 32px;
  }
}
</style>
