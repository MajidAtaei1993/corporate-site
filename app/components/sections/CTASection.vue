<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '~/components/ui/Button.vue'
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (sectionRef.value) {
    gsap.from(sectionRef.value.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 90%'
      }
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="py-32 bg-gradient-to-b from-black via-slate-900 to-slate-950 text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-white">Ready to get started?</h2>
    <p class="mt-4 text-slate-300">Join hundreds of companies scaling with us.</p>

    <div class="mt-10 flex justify-center gap-6 flex-wrap">
      <Button variant="primary" class="px-10 py-4 text-lg">Get started</Button>
      <Button variant="ghost" class="px-10 py-4 text-lg text-white border border-white/20 hover:bg-white/10">
        Contact sales
      </Button>
    </div>
  </section>
</template>
