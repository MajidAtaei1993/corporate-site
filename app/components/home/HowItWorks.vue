<template>
  <UiSection>
    <Reveal>
      <h2>How NOXAI Works</h2>
    </Reveal>

    <div class="pipeline">
      <div class="step" v-for="(step, i) in steps" :key="i" ref="stepsRef">
        <div class="icon">{{ step.icon }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stepsRef = ref<HTMLElement[]>([])
const steps = [
  { icon: '🗄️', title: 'Data Ingestion', text: 'Collect and normalize datasets.' },
  { icon: '🤖', title: 'Processing & AI Models', text: 'Run predictive models.' },
  { icon: '⚡', title: 'Decision Engine', text: 'Generate actionable insights.' },
  { icon: '📤', title: 'Output / Automation', text: 'Trigger actions and reports.' }
]

onMounted(() => {
  nextTick(() => {
    const elements = document.querySelectorAll('.step')
    elements.forEach((el, i) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        delay: i * 0.2,
        duration: 1,
        scrollTrigger: { trigger: el, start: 'top 80%' }
      })
    })
  })
})
</script>

<style scoped>
.pipeline {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 40px;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: var(--v-theme-surface);
  border-radius: 16px;
  box-shadow:
    0 0 10px rgba(0,0,0,0.05),
    5px 5px 15px rgba(0,0,0,0.03),
    -5px -5px 20px rgba(0,0,0,0.02);
}
.icon {
  font-size: 48px;
  margin-bottom: 16px;
}
h3 {
  margin-bottom: 8px;
  color: var(--v-theme-primary);
}
p {
  color: var(--v-theme-secondary);
}
</style>
