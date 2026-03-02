<script setup lang="ts">
interface PricingFeature {
  id: number
  text: string
}

interface Props {
  title?: string
  description?: string
  price?: number
  currency?: string
  period?: string
  featuresTitle?: string
  features?: PricingFeature[]
  buttonText?: string
  buttonHref?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Unlimited for all',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.',
  price: 49,
  currency: '$',
  period: '/month',
  featuresTitle: 'What you will get',
  features: () => [
    { id: 1, text: 'Lorem ipsum dolor sit nisi' },
    { id: 2, text: 'Lorem ipsum dolor sit nisi' },
    { id: 3, text: 'Lorem ipsum dolor sit nisi' },
    { id: 4, text: 'Lorem ipsum dolor sit nisi' },
  ],
  buttonText: 'Pre order now',
  buttonHref: '#',
})
</script>

<template>
  <section class="pricing section">
    <div class="container-sm">
      <div class="pricing-inner section-inner">
        <div class="pricing-header text-center">
          <h2 class="section-title mt-0">{{ props.title }}</h2>
          <p class="section-paragraph mb-0">{{ props.description }}</p>
        </div>
        <div class="pricing-tables-wrap">
          <div class="pricing-table">
            <div class="pricing-table-inner">
              <div class="pricing-table-main">
                <div class="pricing-table-header pb-24">
                  <div class="pricing-table-price">
                    <span class="pricing-table-price-currency h2">{{ props.currency }}</span>
                    <span class="pricing-table-price-amount h1">{{ props.price }}</span>
                    <span class="text-xs">{{ props.period }}</span>
                  </div>
                </div>
                <div class="pricing-table-features-title text-xs pt-24 pb-24">
                  {{ props.featuresTitle }}
                </div>
                <ul class="pricing-table-features list-reset text-xs">
                  <li v-for="feature in props.features" :key="feature.id">
                    <span>{{ feature.text }}</span>
                  </li>
                </ul>
              </div>
              <div class="pricing-table-cta mb-8">
                <a
                  class="button button-primary button-shadow button-block"
                  :href="props.buttonHref"
                >
                  {{ props.buttonText }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-inner {
  padding-top: 48px;
  padding-bottom: 48px;
}

.pricing-header {
  margin-bottom: 48px;
}

.section-title {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
  color: var(--color-text-1);
}

.section-paragraph {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-text-2);
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}

.pricing-tables-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -12px;
  margin-left: -12px;
}

.pricing-table {
  position: relative;
  width: 100%;
  max-width: 368px;
  padding: 0 12px;
}

.pricing-table-inner {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: var(--color-bg-2);
  padding: 24px;
  height: 100%;
}

.pricing-table-inner > * {
  position: relative;
  width: 100%;
}

.pricing-table-inner::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: var(--shadow-default);
  mix-blend-mode: multiply;
}

.pricing-table-main {
  display: flex;
  flex-direction: column;
}

.pricing-table-header {
  border-bottom: 1px solid var(--color-bg-4);
}

.pricing-table-price {
  color: var(--color-text-1);
}

.pricing-table-price-currency {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
}

.pricing-table-price-amount {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-semibold);
}

.pricing-table-features-title {
  color: var(--color-text-1);
  font-weight: var(--font-weight-semibold);
  border-bottom: 1px solid var(--color-bg-4);
}

.pricing-table-features {
  color: var(--color-text-2);
  flex-grow: 1;
  padding: 24px 0;
}

.pricing-table-features li {
  display: flex;
  align-items: center;
  padding: 14px 0;
  position: relative;
}

.pricing-table-features li::before {
  content: '';
  width: 16px;
  height: 12px;
  margin-right: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.6 6.4L1.6 4 0 5.6 5.6 12 16 1.6 14.4 0z' fill='%230270D7' fill-rule='nonzero'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
}

.pricing-table-cta {
  align-self: flex-end;
}

.list-reset {
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 641px) {
  .pricing-inner {
    padding-top: 88px;
    padding-bottom: 88px;
  }
}
</style>
