<template>
  <div class="w-screen min-h-screen bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 relative overflow-hidden flex flex-col">
    <!-- Animated floating circles -->
    <div class="absolute w-72 h-72 bg-white opacity-10 rounded-full -top-20 -left-20 animate-pulse-slow"></div>
    <div class="absolute w-56 h-56 bg-white opacity-10 rounded-full -bottom-24 -right-24 animate-pulse-slow"></div>

    <!-- Container -->
    <div class="container mx-auto flex justify-center items-center flex-1 px-4">
      <!-- Sign in card -->
      <div
        ref="card"
        class="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md relative z-10"
      >
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back
        </h2>
        <p class="text-gray-500 text-center mb-8">
          Sign in to continue to your dashboard
        </p>

        <form @submit.prevent="signIn" class="space-y-6">
          <div class="relative">
            <input
              type="email"
              v-model="email"
              required
              class="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-purple-500 outline-none py-2"
              placeholder="Email"
            />
            <label
              class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            >
              Email
            </label>
          </div>

          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              class="peer placeholder-transparent w-full border-b-2 border-gray-300 focus:border-purple-500 outline-none py-2 pr-10"
              placeholder="Password"
            />
            <label
              class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            >
              Password
            </label>
            <span
              @click="showPassword = !showPassword"
              class="absolute right-0 top-2 text-gray-400 cursor-pointer"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </span>
          </div>

          <button
            type="submit"
            class="w-full bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p class="mt-6 text-gray-400 text-center">
          Don't have an account?
          <a href="#" class="text-purple-500 font-medium hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const card = ref<HTMLElement | null>(null)

const signIn = () => {
  console.log('Sign In with', email.value, password.value)
}

onMounted(() => {
  if (card.value) {
    gsap.from(card.value, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
  }
})
</script>

<style>
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.2); opacity: 0.2; }
}
.animate-pulse-slow {
  animation: pulse-slow 6s infinite;
}
</style>
