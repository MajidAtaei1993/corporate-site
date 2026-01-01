<template>
  <UiSection>
    <Reveal>
      <h1>Request a Demo</h1>
      <p>See how NOXAI can transform your business.</p>
    </Reveal>

    <form class="form">
      <input placeholder="Company name" />
      <input placeholder="Email" />
      <textarea placeholder="Tell us about your use case"></textarea>
      <v-btn color="primary">Submit</v-btn>
    </form>
  </UiSection>
</template>

<script setup lang="ts">
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'
</script>

<style scoped>
.form {
  max-width: 500px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
input, textarea {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--v-theme-border);
  background: var(--v-theme-surface);
  color: var(--v-theme-primary);
}
</style>
