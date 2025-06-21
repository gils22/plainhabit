<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#E0F2FF] via-white to-white px-4"
  >
    <div class="w-full max-w-sm rounded-xl bg-white p-8 shadow-2xl backdrop-blur-md">
      <h2 class="text-primary mb-1 text-center text-2xl font-bold">Login to Account</h2>
      <p class="mb-6 text-center text-sm text-gray-500">Please enter your email and password</p>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="mb-1 block text-sm font-medium text-gray-700">Email address</label>
          <div class="relative">
            <input
              v-model="email"
              type="email"
              placeholder="example@gmail.com"
              class="focus:border-primary w-full rounded-md border px-4 py-2 pl-10 text-sm shadow focus:outline-none"
              required
            />
            <span class="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <i class="fas fa-envelope text-sm"></i>
            </span>
          </div>
        </div>

        <div class="mb-4">
          <label class="mb-1 block text-sm font-medium text-gray-700">Password</label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="focus:border-primary w-full rounded-md border px-4 py-2 pr-10 pl-10 text-sm shadow focus:outline-none"
              required
            />
            <span class="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <i class="fas fa-lock text-sm"></i>
            </span>

            <button
              type="button"
              @click="togglePassword"
              class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
            >
              <component :is="showPassword ? EyeOff : Eye" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <div class="mb-4 flex items-center space-x-2">
          <input type="checkbox" id="remember" class="accent-primary" />
          <label for="remember" class="text-sm text-gray-600">Remember Password</label>
        </div>

        <button
          type="submit"
          class="bg-primary w-full rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Login
        </button>

        <p class="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?
          <router-link to="/register" class="text-primary font-medium hover:underline">
            Create Account
          </router-link>
        </p>

        <div
          v-if="errorMessage"
          class="mt-4 rounded bg-red-100 p-3 text-center text-sm text-red-600"
        >
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Eye, EyeOff } from 'lucide-vue-next'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const showPassword = ref(false)

const router = useRouter()

function togglePassword() {
  showPassword.value = !showPassword.value
}

function handleLogin() {
  const dummyEmail = 'gilang@gmail.com'
  const dummyPassword = '123456'

  if (email.value === dummyEmail && password.value === dummyPassword) {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/profile')
  } else {
    errorMessage.value = 'Email atau password salah!'
  }
}
</script>
