import { onMounted, onUnmounted, shallowRef } from 'vue'
import type { AnimeInstance } from 'animejs'

interface HeroAnimationOptions {
  enableScrollReveal?: boolean
}

export function useHeroAnimation(options: HeroAnimationOptions = {}) {
  const { enableScrollReveal = true } = options
  const isAnimationReady = shallowRef(false)
  const animationInstances = shallowRef<AnimeInstance[]>([])

  async function initAnimations() {
    const anime = (await import('animejs')).default

    const instances: AnimeInstance[] = []

    // Box 05 animation timeline
    const box05Timeline = anime.timeline({
      targets: '.hero-figure-box-05',
    })
    box05Timeline
      .add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: '500px',
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateY: '-15deg',
        rotateX: '8deg',
        rotateZ: '-1deg',
      })
    instances.push(box05Timeline)

    // Box 06, 07 animation timeline
    const box0607Timeline = anime.timeline({
      targets: '.hero-figure-box-06, .hero-figure-box-07',
    })
    box0607Timeline
      .add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: '500px',
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateZ: '20deg',
      })
    instances.push(box0607Timeline)

    // Other boxes animation
    const otherBoxes = anime({
      targets:
        '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [
        anime.random(-360, 360),
        (el: HTMLElement) => el.getAttribute('data-rotation') || '0deg',
      ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: 'easeInOutExpo',
    })
    instances.push(otherBoxes)

    animationInstances.value = instances
    isAnimationReady.value = true

    // Add anime-ready class to document for CSS transitions
    document.documentElement.classList.add('anime-ready')
  }

  async function initScrollReveal() {
    if (!enableScrollReveal) return

    try {
      const ScrollReveal = (await import('scrollreveal')).default
      const sr = ScrollReveal()

      sr.reveal('.feature, .pricing-table-inner', {
        duration: 600,
        distance: '20px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 100,
      })
    } catch (error) {
      console.warn('ScrollReveal not available:', error)
    }
  }

  function cleanup() {
    animationInstances.value.forEach((instance) => {
      instance.pause()
    })
    animationInstances.value = []
    document.documentElement.classList.remove('anime-ready')
  }

  onMounted(async () => {
    // Remove no-js class if present
    document.documentElement.classList.remove('no-js')
    document.documentElement.classList.add('js')

    await initAnimations()
    await initScrollReveal()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    isAnimationReady,
  }
}
