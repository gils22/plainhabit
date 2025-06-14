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
              type="password"
              class="focus:border-primary w-full rounded-md border px-4 py-2 pl-10 text-sm shadow focus:outline-none"
              required
            />
            <span class="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <i class="fas fa-lock text-sm"></i>
            </span>
          </div>
          <div class="mt-1 text-right">
            <a href="#" class="text-primary text-xs hover:underline">Forgot Password?</a>
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
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  console.log('Login with:', email.value, password.value)
}
</script>
