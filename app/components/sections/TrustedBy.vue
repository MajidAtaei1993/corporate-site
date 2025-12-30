<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
        start: 'top 80%'
      }
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="py-20 bg-slate-900">
    <div class="max-w-6xl mx-auto text-center space-y-10">
      <h2 class="text-xl text-slate-400 uppercase tracking-wider">Trusted by</h2>

      <div class="flex flex-wrap justify-center items-center gap-12">
        <div class="w-24 h-10 bg-slate-700 rounded flex items-center justify-center text-white font-bold">Logo1</div>
        <div class="w-24 h-10 bg-slate-700 rounded flex items-center justify-center text-white font-bold">Logo2</div>
        <div class="w-24 h-10 bg-slate-700 rounded flex items-center justify-center text-white font-bold">Logo3</div>
        <div class="w-24 h-10 bg-slate-700 rounded flex items-center justify-center text-white font-bold">Logo4</div>
      </div>
    </div>
  </section>
</template>
