<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '~/components/ui/Button.vue'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (heroRef.value) {
    gsap.from(heroRef.value.children, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    })
  }

  // Animated gradient background
  const gradient = heroRef.value?.querySelector<HTMLElement>('.bg-gradient-animate')
  if (gradient) {
    gsap.to(gradient, {
      backgroundPosition: '200% 0%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'linear'
    })
  }
})
</script>

<template>
  <section ref="heroRef" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-[length:200%_200%] animate-gradient bg-gradient-animate -z-20"></div>

    <!-- Floating Glow -->
    <div class="absolute inset-0 -z-10 flex justify-center items-center">
      <div class="w-[700px] h-[700px] bg-brand-500/20 blur-[160px] rounded-full animate-pulse-slow"></div>
    </div>

    <!-- Main Content -->
    <div class="text-center max-w-4xl px-6">
      <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Enterprise digital solutions
      </h1>

      <p class="mt-6 text-xl md:text-2xl text-slate-200">
        We design, build and scale modern web platforms.
      </p>

      <div class="mt-12 flex justify-center gap-6 flex-wrap">
        <Button variant="primary" class="px-10 py-4 text-lg">Get started</Button>
        <Button variant="ghost" class="px-10 py-4 text-lg text-white border border-white/20 hover:bg-white/10">
          Contact sales
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
@layer utilities {
  .animate-pulse-slow {
    animation: pulse 8s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.5; }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradientMove 20s linear infinite;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 0%; }
    50% { background-position: 200% 0%; }
    100% { background-position: 0% 0%; }
  }
}
</style>
