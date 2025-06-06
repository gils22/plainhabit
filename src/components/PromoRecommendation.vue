<template>
  <div class="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
    <h2 class="text-primary mb-4 text-2xl font-bold">Rekomendasi Promosi</h2>

    <div class="space-y-4">
      <div
        v-for="(promo, index) in promotions"
        :key="index"
        class="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 shadow-sm transition hover:bg-white"
      >
        {{ promo }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const promotions = ref<string[]>([
  'Berikan diskon 10% untuk pelanggan baru selama minggu ini.',
  'Tawarkan bundling: Beli 2 gratis 1 untuk produk kategori yang kurang laku.',
  'Sediakan gratis ongkir untuk pembelian di atas Rp200.000.',
  'Gunakan promosi waktu terbatas (flash sale) di jam sibuk (19.00 - 21.00).',
  'Berikan voucher cashback untuk pelanggan yang melakukan repeat order.',
])
</script>
