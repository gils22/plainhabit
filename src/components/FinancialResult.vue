<template>
  <div class="mt-6 rounded-lg bg-white p-6 text-gray-700 shadow-xl transition-all">
    <h2
      class="mb-2 text-2xl font-bold"
      :class="{
        'text-green-600': data.kesehatan === 'Sehat',
        'text-yellow-600': data.kesehatan === 'Waspada',
        'text-red-600': data.kesehatan === 'Tidak Sehat',
      }"
    >
      Status Kesehatan: {{ data.kesehatan }}
    </h2>

    <p class="mb-1 text-sm font-medium">
      <span class="opacity-80">Produk:</span> {{ data.namaProduk }} ({{ data.kategoriProduk }})
    </p>
    <p class="mb-1 text-sm font-medium">
      <span class="opacity-80">Pendapatan:</span> Rp {{ formatRupiah(data.totalPendapatan) }},
      <span class="opacity-80">Profit:</span> Rp {{ formatRupiah(data.profit) }}
    </p>
    <p class="mb-3 text-sm font-medium">
      <span class="opacity-80">Cluster:</span> {{ data.cluster }} |
      <span class="opacity-80">Tanggal:</span> {{ formatTanggal(data.tanggalCek) }}
    </p>

    <p class="text-sm text-gray-600 italic">Saran: {{ data.saran }}</p>

    <div class="mt-6 flex flex-col justify-end gap-3 md:flex-row">
      <button
        @click="$emit('reset')"
        class="rounded bg-gray-100 px-4 py-2 text-gray-700 shadow transition hover:bg-gray-200"
      >
        Cek Lagi
      </button>
      <button
        @click="$emit('save')"
        class="bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white transition"
      >
        Simpan Riwayat
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import interface jika bisa (disarankan):
import type { FinalResult } from '@/api/saveProductResult'

// Jika tidak menggunakan import, bisa definisikan ulang seperti ini:
// interface FinalResult {
//   namaPemilik: string
//   namaProduk: string
//   kategoriProduk: string
//   totalPendapatan: number
//   profit: number
//   tanggalCek: string
//   cluster: number
//   kesehatan: string
//   saran: string
//   user_id: string
// }

const props = defineProps<{ data: FinalResult }>()

defineEmits<{
  (e: 'reset'): void
  (e: 'save'): void
}>()

function formatRupiah(value: number): string {
  return value.toLocaleString('id-ID')
}

function formatTanggal(tgl: string): string {
  const date = new Date(tgl)
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
</script>
