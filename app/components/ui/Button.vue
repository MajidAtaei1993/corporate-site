<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost'

defineProps<{
  variant?: Variant
}>()
</script>

<template>
  <button
    :class="[
      'px-5 py-2.5 rounded-lg font-medium transition',
      variant === 'primary' && 'bg-brand-500 text-white hover:bg-brand-700',
      variant === 'secondary' && 'bg-slate-100 text-slate-900 hover:bg-slate-200',
      variant === 'ghost' && 'text-brand-500 hover:bg-brand-50'
    ]"
  >
    <slot />
  </button>
</template>
