<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '~/layout/Container.vue'
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)

const services = [
  { icon: '💻', title: 'Web Development', description: 'Fullstack web platforms using Vue, Nuxt, Node.js.' },
  { icon: '☁️', title: 'Cloud Architecture', description: 'Scalable and secure cloud solutions.' },
  { icon: '📱', title: 'Mobile Apps', description: 'iOS & Android apps with smooth UX.' },
  { icon: '⚙️', title: 'DevOps', description: 'CI/CD pipelines and automated deployment.' }
]

onMounted(() => {
  if (sectionRef.value) {
    gsap.from(sectionRef.value.children, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 85%'
      }
    })
  }
})
</script>

<template>
  <Container>
    <section class="py-32 text-white">
      <div class="text-center mb-20">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4">Our Expertise</h1>
        <p class="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-6 mb-8">
          Transforming ideas into scalable digital products with cutting-edge technology.
        </p>
      </div>

      <!-- Services Grid -->
      <div ref="sectionRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
        <div v-for="s in services" :key="s.title"
             class="bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 p-8 rounded-3xl flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl cursor-pointer group">
          <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{{ s.icon }}</div>
          <h3 class="text-2xl font-bold mb-2 text-white">{{ s.title }}</h3>
          <p class="text-slate-100">{{ s.description }}</p>
          <div class="mt-4 w-12 h-1 bg-white rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="mt-20 flex justify-center">
        <button class="px-14 py-4 bg-brand-500 hover:bg-brand-600 rounded-xl transition-all text-lg shadow-lg">
          Explore All Services
        </button>
      </div>
    </section>
  </Container>
</template>

<style scoped>
/* Floating subtle animation برای کارت‌ها */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

div[v-for] {
  animation: float 6s ease-in-out infinite;
}
</style>
