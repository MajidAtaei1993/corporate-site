<template>
  <UiSection>
    <Reveal>
      <h2 class="section-title">Our Capabilities</h2>
      <p class="section-subtitle">
        NOXAI delivers cutting-edge AI solutions for modern businesses.
      </p>
    </Reveal>

    <div class="cards">
      <Reveal v-for="(cap, i) in capabilities" :key="i">
        <UiCard class="cap-card">
          <div class="icon-wrapper">
            <span class="icon">{{ cap.icon }}</span>
          </div>
          <h3>{{ cap.title }}</h3>
          <p>{{ cap.text }}</p>
        </UiCard>
      </Reveal>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import UiCard from '~~/app/components/ui/UiCard.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

const capabilities = [
  { icon: '🤖', title: 'AI Modeling', text: 'Predictive and generative AI models.' },
  { icon: '⚡', title: 'Real-time Insights', text: 'Instant actionable data for decisions.' },
  { icon: '📊', title: 'Analytics Dashboard', text: 'Visualize KPIs and trends easily.' },
  { icon: '🔒', title: 'Secure & Scalable', text: 'Enterprise-grade performance and security.' }
]
</script>

<style scoped>
.section-title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: var(--nox-white);
  margin-bottom: 8px;
}
.section-subtitle {
  font-size: 16px;
  color: var(--nox-gray);
  text-align: center;
  margin-bottom: 40px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
}

.cap-card {
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background: var(--nox-surface);
  border-radius: 16px;

  /* چند لایه سایه نامیزان */
  box-shadow:
    0 0 10px rgba(255, 255, 255, 0.03),
    5px 5px 15px rgba(255, 255, 255, 0.02),
    -5px -5px 20px rgba(255, 255, 255, 0.015);
}

.cap-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.05),
    10px 10px 30px rgba(255, 255, 255, 0.03),
    -10px -10px 40px rgba(255, 255, 255, 0.02);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.03);
}

.icon {
  font-size: 32px;
}

h3 {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
  color: var(--nox-white);
}

p {
  color: var(--nox-gray);
  font-size: 14px;
  line-height: 1.6;
}
</style>
