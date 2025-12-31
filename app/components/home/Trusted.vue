<template>
  <UiSection>
    <Reveal>
      <p class="label">Trusted by innovative teams</p>
    </Reveal>

    <div class="logos">
      <Reveal v-for="(icon, i) in icons" :key="i">
        <div class="logo">
          <span class="icon">{{ icon }}</span>
        </div>
      </Reveal>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'

const icons = ['🤖', '⚡', '📊', '🔒', '🧠', '🚀']
</script>

<style scoped>
.logos {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  opacity: 0.9;
  margin-top: 32px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--v-theme-border);
  padding: 20px;
  border-radius: 12px;
  font-size: 36px;
  background: var(--v-theme-surface);
  transition: transform 0.3s ease, background 0.3s ease;
}
.logo:hover {
  transform: translateY(-6px);
  background: rgba(0,0,0,0.05);
}
.label {
  font-size: 18px;
  color: var(--v-theme-primary);
  text-align: center;
}
</style>
