<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

const features = [
  { title: 'Scalable Architecture', description: 'Built to handle millions of users seamlessly.' },
  { title: 'Enterprise Security', description: 'End-to-end encryption and compliance.' },
  { title: 'High Performance', description: 'Optimized for speed and low latency.' }
]

onMounted(() => {
  if (sectionRef.value) {
    gsap.from(sectionRef.value.children, {
      opacity: 0,
      y: 40,
      stagger: 0.25,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%'
      }
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="py-32 bg-slate-950 text-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
      <div v-for="f in features" :key="f.title" class="space-y-4 p-6 bg-slate-900/30 rounded-lg backdrop-blur-md hover:scale-105 transition-transform duration-200">
        <h3 class="text-2xl font-bold">{{ f.title }}</h3>
        <p class="text-slate-300">{{ f.description }}</p>
      </div>
    </div>
  </section>
</template>
