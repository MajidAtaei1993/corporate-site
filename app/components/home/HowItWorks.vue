<template>
  <UiSection>
    <Reveal>
      <h2 class="section-title">How NOXAI Works</h2>
      <p class="section-subtitle">
        From raw data to actionable insights, NOXAI streamlines your workflow.
      </p>
    </Reveal>

    <div class="pipeline">
      <div
        class="step"
        v-for="(step, i) in steps"
        :key="i"
        ref="stepsRef"
      >
        <div class="icon-wrapper">
          <span class="icon">{{ step.icon }}</span>
        </div>
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

onMounted(async () => {
  await nextTick()
  gsap.from('.step', {
    y: 60,
    opacity: 0,
    scale: 0.95,
    stagger: 0.2,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.pipeline',
      start: 'top 80%',
    }
  })
})
</script>

<style scoped>
.section-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: var(--v-theme-primary);
}
.section-subtitle {
  font-size: 16px;
  text-align: center;
  color: var(--v-theme-secondary);
  margin-bottom: 60px;
}

.pipeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.step {
  background: var(--v-theme-surface);
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  box-shadow:
    0 5px 15px rgba(0,0,0,0.05),
    0 10px 30px rgba(0,0,0,0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}
.step:hover {
  transform: translateY(-8px);
  box-shadow:
    0 15px 40px rgba(0,0,0,0.08),
    0 25px 60px rgba(0,0,0,0.05);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1));
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.icon {
  font-size: 36px;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--v-theme-primary);
  margin-bottom: 8px;
}
p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--v-theme-secondary);
}
</style>
