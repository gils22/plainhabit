<template>
  <div class="mx-auto mt-20 max-w-md rounded border p-6">
    <h1 class="mb-4 text-center text-xl font-bold">Daftar Akun Cuanlyze</h1>

    <form @submit.prevent="handleRegister" class="space-y-4">
      <div>
        <label>Email</label>
        <input type="email" v-model="email" class="w-full rounded border px-2 py-1" required />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          class="w-full rounded border px-2 py-1"
          required
        />
      </div>
      <button type="submit" class="bg-primary w-full rounded py-2 text-white hover:opacity-90">
        Daftar
      </button>
    </form>

    <p class="mt-2 text-red-500" v-if="error">{{ error }}</p>
    <p class="mt-2 text-green-600" v-if="success">{{ success }}</p>

    <p class="mt-4 text-center text-sm">
      Sudah punya akun?
      <router-link to="/login" class="text-primary underline">Login di sini</router-link>
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
const success = ref('')
const router = useRouter()

const handleRegister = async () => {
  error.value = ''
  success.value = ''

  const { data, error: registerError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (registerError) {
    error.value = registerError.message
    return
  }

  success.value = `Pendaftaran berhasil! Silakan cek email "${email.value}" untuk konfirmasi sebelum login.`
}
</script>
