<template>
  <div class="mx-auto max-w-3xl px-4 py-10">
    <h1 class="text-primary mb-6 text-center text-3xl font-bold">Cek Kesehatan Finansial Produk</h1>

    <FinancialForm v-if="!loading && !hasil" @onCheck="handleCheck" />

    <div v-if="loading" class="mt-6 flex flex-col items-center justify-center text-gray-500">
      <svg
        class="text-primary mb-2 h-8 w-8 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <p class="text-sm italic">Menganalisis data produk, mohon tunggu...</p>
    </div>

    <FinancialResult
      v-if="hasil"
      :data="hasil"
      class="mt-6"
      @reset="hasil = null"
      @save="handleSave"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import FinancialForm from '@/components/FinancialForm.vue'
import FinancialResult from '@/components/FinancialResult.vue'
import { checkProductHealth } from '@/api/productHealth'
import { saveProductResult } from '@/api/saveProductResult'
import type { FinalResult } from '@/api/saveProductResult'

const hasil = ref<FinalResult | null>(null)
const loading = ref(false)
const router = useRouter()

type InitialCheckInput = Omit<FinalResult, 'cluster' | 'kesehatan' | 'saran' | 'user_id'>

async function handleCheck(payload: InitialCheckInput) {
  const userId = localStorage.getItem('user_id')
  if (!userId) {
    alert('Silakan login terlebih dahulu untuk menggunakan fitur ini.')
    router.push('/login')
    return
  }

  loading.value = true
  hasil.value = null

  try {
    const result = await checkProductHealth(payload)

    const finalResult: FinalResult = {
      ...payload,
      user_id: userId,
      cluster: result.cluster,
      kesehatan: result.label,
      saran: result.saran,
    }

    hasil.value = finalResult
    await nextTick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error) {
    console.error('API error:', error)
    alert('Terjadi kesalahan saat memproses data.')
  } finally {
    loading.value = false
  }
}

async function handleSave() {
  if (!hasil.value) return

  try {
    await saveProductResult(hasil.value)
    alert('Riwayat berhasil disimpan!')
  } catch (err) {
    console.error('Gagal menyimpan:', err)
    alert('Gagal menyimpan riwayat. Silakan coba lagi.')
  }
}
</script>
