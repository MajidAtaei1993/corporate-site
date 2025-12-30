<template>
  <div class="relative">
    <Hero />
    <TrustedBy />
    <Features />
    <CTASection />
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Services – Company',
    description: 'Our professional digital services'
})

import gsap from 'gsap'
import Hero from '~/components/sections/Hero.vue'
import TrustedBy from '~/components/sections/TrustedBy.vue'
import Features from '~/components/sections/Features.vue'
import CTASection from '~/components/sections/CTASection.vue'
onMounted(() => {
  gsap.from('.hero', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out'
  })
})
</script>