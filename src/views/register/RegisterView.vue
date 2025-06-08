<template>
  <div class="flex flex-1 items-center justify-center px-4 py-24">
    <div class="w-full max-w-md rounded-2xl border border-gray-300 bg-white p-8 shadow-lg">
      <h1 class="mb-6 text-center text-2xl font-bold text-gray-800">
        Daftar Akun <span class="text-primary">Cuanlyze</span>
      </h1>

      <form @submit.prevent="handleRegister" class="space-y-5">
        <div>
          <label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
            required
          />
        </div>
        <div>
          <label for="password" class="mb-1 block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            id="password"
            type="password"
            v-model="password"
            class="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-primary w-full rounded-md py-2 text-sm font-semibold text-white shadow transition hover:opacity-90"
        >
          Daftar
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-600">
        Sudah punya akun?
        <router-link to="/login" class="text-primary underline">Login di sini</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { registerUser } from './presenter'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = async () => {
  try {
    await registerUser(email.value, password.value)

    Swal.fire({
      icon: 'success',
      title: 'Pendaftaran Berhasil!',
      html: `Silakan cek email <b>${email.value}</b> untuk konfirmasi sebelum login.`,
      confirmButtonText: 'Oke',
    }).then(() => {
      router.push('/login')
    })
  } catch (registerError: any) {
    Swal.fire({
      icon: 'error',
      title: 'Gagal Mendaftar',
      text: registerError.message,
      confirmButtonText: 'Coba Lagi',
    })
  }
}
</script>
