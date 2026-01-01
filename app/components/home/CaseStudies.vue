<template>
  <UiSection>
    <Reveal>
      <h2 class="section-title">Our Impact</h2>
      <p class="section-subtitle">Real-world AI solutions that drive results</p>
    </Reveal>

    <div class="projects-grid">
      <Reveal v-for="project in projects" :key="project.title">
        <UiCard class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </UiCard>
      </Reveal>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import UiCard from '~~/app/components/ui/UiCard.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

import FinanceAI from '~~/app/assets/images/projects/finance-ai.png'
import RetailAI from '~~/app/assets/images/projects/retail-ai.png'
import IoTAI from '~~/app/assets/images/projects/iot-ai.png'
import HealthcareAI from '~~/app/assets/images/projects/healthcare-ai.png'

const projects = [
  { title: 'Finance AI', description: 'Real-time risk predictions.', image: FinanceAI },
  { title: 'Retail AI', description: 'Smart inventory management.', image: RetailAI },
  { title: 'IoT AI', description: 'Predictive maintenance.', image: IoTAI },
  { title: 'Healthcare AI', description: 'Patient care recommendations.', image: HealthcareAI }
]
</script>

<style scoped>
.section-title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: var(--v-theme-primary);
  margin-bottom: 8px;
}
.section-subtitle {
  font-size: 16px;
  text-align: center;
  color: var(--v-theme-secondary);
  margin-bottom: 50px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.project-card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 16px;
  background: var(--v-theme-surface);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.03);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08), 0 25px 60px rgba(0,0,0,0.05);
}

.project-image {
  height: 180px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-info {
  padding: 16px;
}
.project-info h3 {
  margin-bottom: 6px;
  font-size: 18px;
  color: var(--v-theme-primary);
}
.project-info p {
  color: var(--v-theme-secondary);
  font-size: 14px;
  line-height: 1.5;
}
</style>
