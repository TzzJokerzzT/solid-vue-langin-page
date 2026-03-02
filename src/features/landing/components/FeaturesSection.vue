<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'

interface Feature {
  id: number
  iconSrc: string
  iconAlt: string
  title: string
  description: string
}

interface Props {
  features?: Feature[]
}

const props = withDefaults(defineProps<Props>(), {
  features: () => [
    {
      id: 1,
      iconSrc: '/images/feature-icon-01.svg',
      iconAlt: 'Feature 01',
      title: 'Be Productive',
      description:
        'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
    },
    {
      id: 2,
      iconSrc: '/images/feature-icon-02.svg',
      iconAlt: 'Feature 02',
      title: 'Be Productive',
      description:
        'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
    },
    {
      id: 3,
      iconSrc: '/images/feature-icon-03.svg',
      iconAlt: 'Feature 03',
      title: 'Be Productive',
      description:
        'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
    },
    {
      id: 4,
      iconSrc: '/images/feature-icon-04.svg',
      iconAlt: 'Feature 04',
      title: 'Be Productive',
      description:
        'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
    },
    {
      id: 5,
      iconSrc: '/images/feature-icon-05.svg',
      iconAlt: 'Feature 05',
      title: 'Be Productive',
      description:
        'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
    },
    {
      id: 6,
      iconSrc: '/images/feature-icon-06.svg',
      iconAlt: 'Feature 06',
      title: 'Be Productive',
      description:
        'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
    },
  ],
})
</script>

<template>
  <section class="features section">
    <div class="container">
      <div class="features-inner section-inner has-bottom-divider">
        <div class="features-wrap">
          <FeatureCard
            v-for="feature in props.features"
            :key="feature.id"
            :icon-src="feature.iconSrc"
            :icon-alt="feature.iconAlt"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-inner {
  padding-top: 48px;
  padding-bottom: 48px;
}

.features-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -16px;
  margin-left: -16px;
}

.features-wrap :deep(.feature) {
  padding-left: 16px;
  padding-right: 16px;
}

.has-bottom-divider {
  position: relative;
}

.has-bottom-divider::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: block;
  height: 1px;
  background: var(--color-bg-4);
}

@media (min-width: 641px) {
  .features-inner {
    padding-top: 88px;
    padding-bottom: 88px;
  }

  .features-wrap {
    margin-right: -32px;
    margin-left: -32px;
  }

  .features-wrap :deep(.feature) {
    padding-left: 32px;
    padding-right: 32px;
    flex-basis: 33.33%;
    max-width: 33.33%;
  }
}
</style>
