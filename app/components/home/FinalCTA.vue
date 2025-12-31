<template>
  <UiSection class="final-cta">
    <Reveal>
      <h2>Ready to Experience NOXAI?</h2>
      <p>Transform your business with autonomous intelligence today.</p>
    </Reveal>

    <div class="actions">
      <v-btn size="x-large" color="primary">Request Demo</v-btn>
      <v-btn variant="outlined" size="x-large" color="secondary">Contact Sales</v-btn>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'
</script>

<style scoped>
.final-cta { text-align: center; padding: 100px 20px; }
.final-cta h2 { font-size: 48px; margin-bottom: 24px; color: var(--v-theme-primary); }
.final-cta p { color: var(--v-theme-secondary); font-size: 18px; margin-bottom: 48px; }
.actions > * { margin: 0 16px; }
</style>
