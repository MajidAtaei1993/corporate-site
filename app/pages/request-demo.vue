<template>
  <UiSection>
    <!-- عنوان صفحه -->
    <Reveal>
      <h1 class="title">Request a Demo</h1>
      <p class="subtitle">See how NOXAI can transform your business.</p>
    </Reveal>

    <!-- فرم -->
    <form @submit.prevent="submitForm" ref="formEl" class="demo-form">
      <Reveal v-for="(field, i) in fields" :key="i">
<v-text-field
  v-if="field.type !== 'textarea'"
  v-model="form[field.model]"
  :label="field.placeholder"
  :type="field.type"
  outlined
  dense
  color="primary"
  class="input-field"
  required
/>
<v-textarea
  v-else
  v-model="form[field.model]"
  :label="field.placeholder"
  outlined
  dense
  color="primary"
  class="input-field"
  required
  rows="4"
/>
      </Reveal>

      <Reveal>
        <v-btn type="submit" color="primary" large class="submit-btn">
          Request Demo
        </v-btn>
      </Reveal>
    </form>
  </UiSection>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, nextTick } from 'vue'
import UiSection from '~~/app/components/ui/UiSection.vue'
import Reveal from '~~/app/components/ui/Reveal.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// رفرنس فرم
const formEl = ref<HTMLFormElement | null>(null)

// فرم reactive
const form = reactive({
  company: '',
  email: '',
  useCase: ''
})

// فیلدهای فرم
const fields = [
  { model: 'company', placeholder: 'Company Name', type: 'text' },
  { model: 'email', placeholder: 'Email', type: 'email' },
  { model: 'useCase', placeholder: 'Tell us about your use case', type: 'textarea' }
]

// ارسال فرم
const submitForm = () => {
  if (!form.company || !form.email || !form.useCase) {
    alert('Please fill in all fields.')
    return
  }

  console.log('Form submitted:', form)
  alert(`Thank you, ${form.company}! We'll contact you soon.`)

  // ریست فرم
  form.company = ''
  form.email = ''
  form.useCase = ''
}

// GSAP Reveal animation
onMounted(async () => {
  await nextTick()
  if (!formEl.value) return
  const inputs = formEl.value.querySelectorAll('.input-field, .submit-btn')
  gsap.from(inputs, {
    y: 40,
    opacity: 0,
    scale: 0.95,
    stagger: 0.15,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: formEl.value,
      start: 'top 80%'
    }
  })
})
</script>


<style scoped>
/* عنوان صفحه */
.title {
  font-size: 52px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
  color: var(--v-theme-primary);
}
.subtitle {
  text-align: center;
  font-size: 18px;
  color: var(--v-theme-secondary);
  margin-bottom: 50px;
}

/* فرم */
.demo-form {
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;

  /* glassmorphism */
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
}

/* input fields */
.input-field {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: var(--v-theme-primary);
}

/* دکمه ارسال */
.submit-btn {
  margin-top: 10px;
  border-radius: 16px;
  font-weight: 600;
  padding: 14px 0;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* ریسپانسیو */
@media (max-width: 600px) {
  .demo-form {
    padding: 30px 20px;
  }
  .title {
    font-size: 38px;
  }
  .subtitle {
    font-size: 16px;
  }
}
</style>
