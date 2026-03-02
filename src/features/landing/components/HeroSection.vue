<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Landing template for startups',
  description:
    'Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.',
  primaryButtonText: 'Pre order now',
  primaryButtonHref: '#',
  secondaryButtonText: 'Get in touch',
  secondaryButtonHref: '#',
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-inner">
        <div class="hero-copy">
          <h1 class="hero-title mt-0">{{ title }}</h1>
          <p class="hero-paragraph">{{ description }}</p>
          <div class="hero-cta">
            <a class="button button-primary" :href="primaryButtonHref">{{ primaryButtonText }}</a>
            <a class="button" :href="secondaryButtonHref">{{ secondaryButtonText }}</a>
          </div>
        </div>
        <div class="hero-figure anime-element">
          <svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
            <rect width="528" height="396" style="fill: transparent" />
          </svg>
          <div class="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
          <div class="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
          <div class="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
          <div class="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
          <div class="hero-figure-box hero-figure-box-05"></div>
          <div class="hero-figure-box hero-figure-box-06"></div>
          <div class="hero-figure-box hero-figure-box-07"></div>
          <div class="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
          <div class="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
          <div class="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding-top: 48px;
  padding-bottom: 88px;
}

.hero-paragraph {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-text-2);
  margin-bottom: 32px;
}

.hero-cta {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-cta .button {
  min-width: 170px;
}

.hero-figure {
  position: relative;
  margin-top: 48px;
}

.hero-figure svg {
  width: 100%;
  height: auto;
}

.hero-figure::before {
  content: '';
  position: absolute;
  top: -2%;
  left: -3%;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQ0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iYSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxRDIwMjYiIG9mZnNldD0iMCUiLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFEMjAyNiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik00MjYgMzAzYzYwIDAgMTE4LTIwIDE1NS01NGgxOWMtNDAgNDktMTEwIDc4LTE4NiA3OC0xMzEgMC0yMzQtOTMtMjU0LTIxN0g1MWMtMzYgMC02Ny0xNy04NS00M2gyMTJjLTIyLTE0LTM2LTQwLTM2LTY3aDIyYzAgNDMgMzUgNzggODMgNzggNTAgMCA5MC0zNSA5MC04M1Y0aDIydjJjMCA0OS0zNSA4OS04NCA5NC0xMiAwLTI0LTItMzQtNi0zIDgtNSAxNy01IDI2IDAgMzUgMjcgNjkgNjkgODFhNDEgNDEgMCAxIDEgMCAyNGMtMzUgOS01OCAzNS01OCA2NyAwIDMzIDI1IDYxIDYyIDY5eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=');
}

/* Hero Figure Boxes - Common Styles */
.hero-figure-box {
  position: absolute;
  top: 0;
  will-change: transform;
}

.hero-figure-box-01,
.hero-figure-box-02,
.hero-figure-box-03,
.hero-figure-box-04,
.hero-figure-box-08,
.hero-figure-box-09,
.hero-figure-box-10 {
  overflow: hidden;
}

.hero-figure-box-01::before,
.hero-figure-box-02::before,
.hero-figure-box-03::before,
.hero-figure-box-04::before,
.hero-figure-box-08::before,
.hero-figure-box-09::before,
.hero-figure-box-10::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform-origin: 100% 100%;
}

/* Hide boxes until animation is ready */
:global(.anime-ready) .hero-figure-box {
  opacity: 1;
}

/* Box 01 */
.hero-figure-box-01 {
  left: 103.2%;
  top: 41.9%;
  width: 28.03%;
  height: 37.37%;
  background: linear-gradient(to left top, var(--color-primary-3), var(--color-primary-1));
  transform: rotateZ(45deg);
  opacity: 0;
}

.hero-figure-box-01::before {
  background: linear-gradient(to left, rgba(15, 138, 253, 0.6) 0%, rgba(15, 138, 253, 0) 60%);
  transform: rotateZ(45deg) scale(1.5);
}

/* Box 02 */
.hero-figure-box-02 {
  left: 61.3%;
  top: 64.1%;
  width: 37.87%;
  height: 50.50%;
  background: linear-gradient(to left top, var(--color-primary-3), var(--color-primary-1));
  transform: rotateZ(-45deg);
  opacity: 0;
}

.hero-figure-box-02::before {
  background: linear-gradient(to left, rgba(15, 138, 253, 0.6) 0%, rgba(15, 138, 253, 0) 60%);
  transform: rotateZ(45deg) scale(1.5);
}

/* Box 03 */
.hero-figure-box-03 {
  left: 87.7%;
  top: -56.8%;
  width: 56.81%;
  height: 75.75%;
  background: linear-gradient(to left top, var(--color-primary-3) 0%, rgba(2, 86, 164, 0) 60%);
  transform: rotateZ(0deg);
  opacity: 0;
}

.hero-figure-box-03::before {
  display: none;
}

/* Box 04 */
.hero-figure-box-04 {
  left: 54.9%;
  top: -35.6%;
  width: 45.45%;
  height: 60.60%;
  background: linear-gradient(to left top, var(--color-primary-3), var(--color-primary-1));
  transform: rotateZ(-135deg);
  opacity: 0;
}

.hero-figure-box-04::before {
  background: linear-gradient(to top, rgba(0, 191, 251, 0.4) 0%, rgba(0, 191, 251, 0) 60%);
  transform: rotateZ(-45deg) scale(1.5);
}

/* Box 05 */
.hero-figure-box-05 {
  left: 17.4%;
  top: 13.3%;
  width: 64%;
  height: 73.7%;
  background-color: var(--color-bg-2);
  box-shadow: var(--shadow-default);
  transform: perspective(500px) rotateY(-15deg) rotateX(8deg) rotateZ(-1deg);
}

/* Box 06 */
.hero-figure-box-06 {
  left: 65.5%;
  top: 6.3%;
  width: 30.3%;
  height: 40.4%;
  background: linear-gradient(to left top, var(--color-primary-3), var(--color-primary-1));
  transform: rotateZ(20deg);
}

.hero-figure-box-06::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgba(15, 138, 253, 0.5) 0%, rgba(15, 138, 253, 0) 60%);
  transform: rotateZ(45deg) scale(1.5);
}

/* Box 07 */
.hero-figure-box-07 {
  left: 37.8%;
  top: 77.2%;
  width: 22.72%;
  height: 30.3%;
  background: linear-gradient(to left top, var(--color-primary-3), var(--color-primary-1));
  transform: rotateZ(20deg);
}

.hero-figure-box-07::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgba(15, 138, 253, 0.5) 0%, rgba(15, 138, 253, 0) 60%);
  transform: rotateZ(45deg) scale(1.5);
}

/* Box 08 */
.hero-figure-box-08 {
  left: 77.4%;
  top: 31.06%;
  width: 19.31%;
  height: 25.75%;
  background: var(--color-bg-4);
  transform: rotateZ(-22deg);
  opacity: 0;
}

.hero-figure-box-08::before {
  background: linear-gradient(to left, rgba(0, 191, 251, 0.3) 0%, rgba(0, 191, 251, 0) 60%);
  transform: rotateZ(45deg) scale(1.5);
}

/* Box 09 */
.hero-figure-box-09 {
  left: 4.4%;
  top: 68.9%;
  width: 23.48%;
  height: 31.31%;
  background: var(--color-bg-4);
  transform: rotateZ(-52deg);
  opacity: 0;
}

.hero-figure-box-09::before {
  background: linear-gradient(to left, rgba(0, 191, 251, 0.2) 0%, rgba(0, 191, 251, 0) 60%);
  transform: rotateZ(45deg) scale(1.5);
}

/* Box 10 */
.hero-figure-box-10 {
  left: -3.8%;
  top: 4.3%;
  width: 10.98%;
  height: 14.64%;
  background: rgba(0, 191, 251, 0.3);
  transform: rotateZ(-50deg);
  opacity: 0;
}

.hero-figure-box-10::before {
  display: none;
}

/* Desktop Styles */
@media (min-width: 641px) {
  .hero {
    text-align: left;
    padding-top: 88px;
    padding-bottom: 120px;
  }

  .hero-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hero-copy {
    padding-right: 48px;
    min-width: 448px;
    max-width: 512px;
  }

  .hero-title {
    margin-bottom: 16px;
  }

  .hero-paragraph {
    margin-bottom: 32px;
  }

  .hero-cta {
    flex-direction: row;
    margin: 0;
  }

  .hero-figure {
    width: 528px;
    height: 396px;
    margin-top: 0;
  }

  .hero-figure svg {
    width: 528px;
    height: 396px;
  }
}
</style>
