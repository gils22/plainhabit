<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#E0F2FF] via-white to-white px-4"
  >
    <div class="w-full max-w-sm rounded-xl bg-white p-8 shadow-2xl backdrop-blur-md">
      <h2 class="text-primary mb-1 text-center text-2xl font-bold">Create an Account</h2>
      <p class="mb-6 text-center text-sm text-gray-500">Create an account to continue</p>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="mb-1 block text-sm font-medium text-gray-700">Username</label>
          <div class="relative">
            <input
              v-model="username"
              type="text"
              placeholder="Username"
              class="focus:border-primary w-full rounded-md border px-4 py-2 pl-10 text-sm shadow focus:outline-none"
              required
            />
            <span class="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <i class="fas fa-user text-sm"></i>
            </span>
          </div>
        </div>

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
          <input type="checkbox" id="terms" class="accent-primary" required />
          <label for="terms" class="text-sm text-gray-600">I accept terms and conditions</label>
        </div>

        <button
          type="submit"
          class="bg-primary w-full rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Register
        </button>

        <p class="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <router-link to="/login" class="text-primary font-medium hover:underline">
            Login
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')

function handleRegister() {
  console.log('Register with:', username.value, email.value, password.value)
}
</script>
