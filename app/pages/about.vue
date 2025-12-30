<script setup lang="ts">
import Header from '~/layout/Header.vue'
import Container from '~/layout/Container.vue'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const teamRef = ref<HTMLElement | null>(null)

const team = [
  { name: 'Alice Smith', role: 'CEO', avatar: '' },
  { name: 'Bob Johnson', role: 'CTO', avatar: '' },
  { name: 'Carol Lee', role: 'Lead Designer', avatar: '' },
  { name: 'David Kim', role: 'DevOps Engineer', avatar: '' }
]

onMounted(() => {
  if (teamRef.value) {
    gsap.from(teamRef.value.children, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: teamRef.value,
        start: 'top 85%'
      }
    })
  }
})
</script>

<template>
  <div class="text-white min-h-screen relative">
    <Header />

    <!-- Hero Section -->
    <section class="py-32">
      <Container>
        <div class="flex flex-col-reverse md:flex-row items-center gap-12">
          <!-- Text -->
          <div class="md:w-1/2 text-center md:text-left space-y-6">
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight">
              About Our Company
            </h1>
            <p class="text-lg md:text-xl text-slate-300 mt-6">
              We are a forward-thinking digital studio that builds scalable solutions for modern enterprises. Our mission is to transform ideas into impactful products.
            </p>
            <div class="flex justify-center md:justify-start gap-4 flex-wrap mt-6">
              <button class="px-8 py-3 bg-brand-500 hover:bg-brand-600 rounded-lg transition-all">
                Get Started
              </button>
              <button class="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-lg transition-all">
                Contact Sales
              </button>
            </div>
          </div>

          <!-- Illustration / Placeholder -->
          <div class="md:w-1/2 flex justify-center">
            <div class="w-full max-w-md h-80 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 rounded-3xl shadow-2xl animate-float"></div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Team Section -->
    <section class="py-32 bg-slate-900/40">
      <Container>
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">Meet the Team</h2>
        <div ref="teamRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="t in team" :key="t.name" class="bg-slate-800/40 p-6 rounded-2xl hover:scale-105 hover:shadow-xl transition-transform duration-300 text-center">
            <div class="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl">
              {{ t.name.split(' ').map(n => n[0]).join('') }}
            </div>
            <h3 class="text-xl font-semibold">{{ t.name }}</h3>
            <p class="text-slate-300">{{ t.role }}</p>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
