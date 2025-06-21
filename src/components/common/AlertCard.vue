<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg" data-aos="zoom-in">
      <h2 class="mb-4 text-center text-xl font-bold text-gray-900">WAJIB MASUK</h2>
      <p class="mb-8 text-center text-gray-700">Mohon menuju ke halaman Masuk.</p>

      <div class="flex justify-center">
        <button
          @click="redirectLogin"
          class="bg-primary w-full rounded py-3 font-semibold text-white transition hover:opacity-90"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const redirectLogin = () => {
  router.push('/login')
}
</script>
