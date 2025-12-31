<template>
  <div ref="el">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const el = ref<HTMLElement>()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from(el.value!, {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: { trigger: el.value!, start: 'top 80%' }
  })
})
</script>
