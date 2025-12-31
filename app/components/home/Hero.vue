<template>
  <section class="hero">
    <NeuralField />

    <div class="content">
      <h1>
        <span>Autonomous</span><br />
        <span>Intelligence</span>
      </h1>

      <p>
        NOXAI builds real-time AI systems that analyze, predict and decide for your business.
      </p>

      <div class="actions">
        <v-btn size="x-large">Request Demo</v-btn>
        <v-btn variant="text">View Platform</v-btn>
      </div>

      <!-- Placeholder image / gradient block -->
      <div class="hero-placeholder" />
    </div>
  </section>
</template>

<script setup lang="ts">
import NeuralField from '~~/app/components/visual/NeuralField.vue'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('h1 span', { y: 100, opacity: 0, duration: 1.4, ease: 'power4.out', stagger: 0.1 })
  gsap.from('.hero p', { y: 30, opacity: 0, delay: 0.6, duration: 1 })
  gsap.from('.actions', { y: 20, opacity: 0, delay: 1, duration: 1 })
})
</script>

<style scoped>
.hero {
  position: relative;
  padding: 120px 20px;
  text-align: center;
  overflow: hidden;
  color: var(--nox-white);
}
.hero h1 { font-size: 48px; line-height: 1.2; margin-bottom: 24px; }
.hero p { font-size: 18px; color: var(--nox-gray); margin-bottom: 32px; }
.actions > * { margin: 0 12px; }

.hero-placeholder {
  height: 240px;
  width: 100%;
  margin-top: 40px;
  border-radius: 20px;
  background: linear-gradient(135deg, #111, #333);
}
</style>
