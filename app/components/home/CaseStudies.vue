<template>
  <UiSection>
    <Reveal>
      <h2>Our Impact</h2>
      <p>Real-world AI solutions that drive results</p>
    </Reveal>

    <div class="projects-grid">
      <Reveal v-for="project in projects" :key="project.title">
        <UiCard class="project-card">
          <!-- Placeholder background instead of image -->
          <div class="project-image" :style="{ backgroundImage: project.image }" />
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

const projects = [
  { title: 'Finance AI', description: 'Real-time risk predictions.', image: 'linear-gradient(135deg, #222, #444)' },
  { title: 'Retail AI', description: 'Smart inventory management.', image: 'linear-gradient(135deg, #333, #555)' },
  { title: 'IoT AI', description: 'Predictive maintenance.', image: 'linear-gradient(135deg, #111, #333)' },
  { title: 'Healthcare AI', description: 'Patient care recommendations.', image: 'linear-gradient(135deg, #444, #666)' }
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 40px;
}
.project-card {
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.project-card:hover { transform: translateY(-8px); }
.project-image {
  height: 180px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
}
.project-info { padding: 16px 10px; }
h3 { margin-bottom: 6px; color: var(--nox-white); }
p { color: var(--nox-gray); font-size: 14px; }
</style>
