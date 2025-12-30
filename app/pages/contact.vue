<script setup lang="ts">
import Header from '~/layout/Header.vue'
import Container from '~/layout/Container.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted', form.value)
  // بعداً API call واقعی اضافه شود
}
</script>

<template>
  <div class="relative text-white min-h-screen">
    <Header />

    <section class="py-32">
      <Container>
        <!-- Header Section -->
        <div class="text-center mb-20">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-4">Contact Us</h1>
          <p class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mt-8">
            Have a question or want to work with us? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <!-- Form Card -->
        <div class="max-w-2xl mx-auto bg-slate-900/40 backdrop-blur-xl rounded-3xl shadow-2xl p-10 animate-fade-in mt-8">
          <form @submit.prevent="submitForm" class="flex flex-col gap-6">
            <!-- Name & Email -->
            <div class="flex flex-col md:flex-row gap-6">
              <input v-model="form.name" type="text" placeholder="Your Name"
                     class="flex-1 p-4 rounded-xl bg-slate-800/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"/>
              <input v-model="form.email" type="email" placeholder="Your Email"
                     class="flex-1 p-4 rounded-xl bg-slate-800/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"/>
            </div>

            <!-- Message -->
            <textarea v-model="form.message" placeholder="Your Message" rows="6"
                      class="w-full p-4 rounded-xl bg-slate-800/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"></textarea>

            <!-- Submit Button -->
            <button type="submit"
                    class="w-full md:w-auto px-12 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:scale-105 hover:shadow-xl transition-all text-lg font-bold self-center">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  </div>
</template>

<style scoped>
/* Fade-in subtle animation for the form card */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease forwards;
}
</style>
