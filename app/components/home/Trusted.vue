<template>
  <UiSection>
    <Reveal>
      <p class="label">Trusted by innovative teams</p>
    </Reveal>

    <div class="logos" ref="logosEl">
      <div
        v-for="(logo, i) in logos"
        :key="i"
        class="logo"
        @mouseenter="hoverIn($event)"
        @mouseleave="hoverOut($event)"
      >
        <img :src="logo.src" :alt="logo.name" class="logo-img" />
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

import AixLabs from '~~/app/assets/images/logos/AixLabs.png'
import Cortexa from '~~/app/assets/images/logos/Cortexa.png'
import Dataforge from '~~/app/assets/images/logos/Dataforge.png'
import Neuialflow from '~~/app/assets/images/logos/Neuialflow.png'
import Qauntyx from '~~/app/assets/images/logos/Qauntyx.png'
import Synaptiq from '~~/app/assets/images/logos/Synaptiq.png'

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const logosEl = ref<HTMLElement | null>(null)

const logos = [
  { name: 'NeuialFlow', src: Neuialflow },
  { name: 'DataForge', src: Dataforge },
  { name: 'Synaptiq', src: Synaptiq },
  { name: 'AIX Labs', src: AixLabs },
  { name: 'Cortexa', src: Cortexa },
  { name: 'Quantyx', src: Qauntyx }
]

onMounted(() => {
  if (!logosEl.value) return

  gsap.from(logosEl.value.children, {
    opacity: 0,
    y: 60,
    scale: 0.85,
    stagger: 0.12,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: logosEl.value,
      start: 'top 80%'
    }
  })
})

const hoverIn = (e: MouseEvent) => {
  gsap.to(e.currentTarget, {
    y: -12,
    scale: 1.08,
    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
    duration: 0.4,
    ease: 'power3.out'
  })
}

const hoverOut = (e: MouseEvent) => {
  gsap.to(e.currentTarget, {
    y: 0,
    scale: 1,
    boxShadow: '0 0 0 rgba(0,0,0,0)',
    duration: 0.4,
    ease: 'power3.out'
  })
}
</script>

<style scoped>
.logos {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  margin-top: 40px;
}

.logo {
  background: var(--v-theme-surface);
  border: 1px solid var(--v-theme-border);
  border-radius: 22px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  will-change: transform;
}

.logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) contrast(1.1);
  opacity: 0.85;
  transition: filter 0.4s ease, opacity 0.4s ease;
}

.logo:hover .logo-img {
  filter: grayscale(0%) contrast(1.2);
  opacity: 1;
}

.label {
  text-align: center;
  color: var(--v-theme-primary);
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.75;
}
</style>
