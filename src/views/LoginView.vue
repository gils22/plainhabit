<template>
  <div class="mx-auto mt-20 max-w-md rounded border p-6">
    <h1 class="mb-4 text-center text-xl font-bold">Login ke Cuanlyze</h1>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          class="w-full rounded border px-2 py-1"
          required
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          class="w-full rounded border px-2 py-1"
          required
        />
      </div>
      <button type="submit" class="w-full rounded bg-[#FF9C06] py-2 text-white hover:opacity-90">
        Login
      </button>
    </form>

    <p v-if="error" class="mt-3 text-center text-sm text-red-500">
      {{ error }}
    </p>

    <p class="mt-4 text-center text-sm">
      Belum punya akun?
      <router-link to="/register" class="text-[#FF9C06] underline">Daftar di sini</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  error.value = ''

  const { data, error: loginError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (loginError) {
    error.value = loginError.message
    return
  }

  if (data.user?.email) {
    localStorage.setItem('email', data.user.email)
  }

  router.push('/')
}
</script>
