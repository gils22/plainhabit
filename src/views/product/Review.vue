<template>
  <section class="mt-20 bg-gray-50 py-12">
    <div class="mx-auto max-w-4xl px-4 md:px-6">
      <h2 class="mb-6 text-2xl font-bold text-sky-700">Ulasan Pembeli</h2>

      <div class="space-y-6">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="rounded-lg bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <!-- Info Pengguna -->
          <div class="mb-3 flex items-center gap-4">
            <img :src="review.avatar" alt="avatar" class="h-10 w-10 rounded-full object-cover" />
            <div>
              <p class="text-sm font-medium text-gray-800">{{ review.name }}</p>
              <p class="text-xs text-gray-400">{{ review.date }}</p>
              <div class="mt-1 flex text-yellow-400">
                <LucideStar
                  v-for="i in review.rating"
                  :key="i"
                  class="h-4 w-4 fill-yellow-400 stroke-yellow-400"
                />
              </div>
            </div>
          </div>

          <!-- Komentar -->
          <p class="mb-2 text-sm text-gray-700">{{ review.comment }}</p>

          <!-- Gambar Ulasan -->
          <div v-if="review.images?.length" class="mt-3 flex gap-2 overflow-x-auto">
            <img
              v-for="(img, i) in review.images"
              :key="i"
              :src="img"
              class="h-20 w-20 rounded border object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star as LucideStar } from 'lucide-vue-next'

const reviews = [
  {
    id: 1,
    name: 'Dinda Ayu',
    date: '12 Juni 2025',
    rating: 5,
    comment: 'Kualitas kaosnya bagus dan nyaman dipakai. Pengiriman juga cepat!',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    images: ['/images/reviews/review1.jpg', '/images/reviews/review2.jpg'],
  },
  {
    id: 2,
    name: 'Rama Putra',
    date: '11 Juni 2025',
    rating: 4,
    comment: 'Bahannya oke, sesuai deskripsi. Akan beli lagi.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    images: [],
  },
  {
    id: 3,
    name: 'Siti Nurhaliza',
    date: '10 Juni 2025',
    rating: 5,
    comment: 'Cocok banget buat dipakai sehari-hari. Simple tapi elegan.',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    images: ['/images/reviews/review3.jpg'],
  },
]
</script>
