<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '~/components/ui/Button.vue'

const isOpen = ref(false)
const isHidden = ref(false)
let lastScroll = 0

const links = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' }
]

const handleScroll = () => {
  const currentScroll = window.scrollY
  isHidden.value = currentScroll > lastScroll && currentScroll > 100
  lastScroll = currentScroll
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl px-6 md:px-10 py-3 flex items-center justify-between w-[90%] max-w-7xl shadow-lg transition-transform duration-300',
      isHidden ? '-translate-y-24' : 'translate-y-0'
    ]"
  >
    <div class="text-white font-bold text-lg md:text-xl tracking-tight">Company</div>

    <nav class="hidden md:flex gap-8 text-slate-300">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="hover:text-white transition relative"
        :class="$route.path === link.to ? 'text-brand-500 font-semibold' : ''"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>

<nuxt-link
  :to="{ name: 'signin' }"
  class="hidden md:inline-flex text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition"
>
  Sign in
</nuxt-link>

    <button class="md:hidden text-white text-2xl" @click="isOpen = !isOpen">
      <span v-if="!isOpen">☰</span>
      <span v-else>✕</span>
    </button>
  </header>

  <transition name="slide-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-white text-xl"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        @click="isOpen = false"
        class="hover:text-brand-500 transition"
      >
        {{ link.name }}
      </NuxtLink>

      <Button variant="ghost" class="px-8 py-3 text-lg" @click="isOpen = false">
        Sign in
      </Button>
    </div>
  </transition>
</template>

<style scoped>
.slide-fade-enter-active { transition: all 0.3s ease; }
.slide-fade-leave-active { transition: all 0.3s ease; }
.slide-fade-enter-from { opacity: 0; transform: translateY(-20px); }
.slide-fade-enter-to { opacity: 1; transform: translateY(0); }
.slide-fade-leave-from { opacity: 1; transform: translateY(0); }
.slide-fade-leave-to { opacity: 0; transform: translateY(-20px); }
</style>
