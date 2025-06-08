<template>
  <main class="min-h-screen bg-gray-50 px-4 py-12">
    <div class="mx-auto max-w-4xl">
      <h1 class="text-primary mb-6 text-center text-3xl font-bold">Rekomendasi Promosi</h1>
      <p class="mb-8 text-center text-gray-600">
        Berikut adalah strategi promosi yang direkomendasikan untuk produk Anda berdasarkan hasil
        analisis.
      </p>

      <PromoRecommendation />
    </div>
  </main>
</template>

<script setup lang="ts">
import PromoRecommendation from '@/components/PromoRecommendation.vue'
</script>
