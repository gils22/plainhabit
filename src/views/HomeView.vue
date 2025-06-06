<template>
  <main>
    <section class="relative overflow-hidden bg-white py-20 text-center">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
        <div
          v-motion
          :initial="{ opacity: 0, x: -100, scale: 0.9 }"
          :enter="{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }"
          class="z-10 text-left"
        >
          <h1 class="text-primary mb-6 text-3xl leading-snug font-bold md:text-5xl">
            Efficient Financial Analysis & Promo Insights for Your Business
          </h1>
          <p class="mb-8 text-lg text-gray-700">
            Gain valuable insights into your business's financial health and promotional efficiency.
          </p>
          <router-link
            to="/cek-kesehatan"
            class="bg-primary inline-block rounded-md px-6 py-3 font-semibold text-white shadow transition hover:scale-105"
          >
            Mulai Cek Kesehatan
          </router-link>
        </div>

        <div class="relative z-10 flex items-center justify-center">
          <div
            class="bg-primary absolute top-1/2 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
          ></div>
          <div
            v-motion
            :initial="{ opacity: 0, x: 100, scale: 0.9 }"
            :enter="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
            }"
            class="relative z-10"
          >
            <img
              src="/images/laptop.png"
              alt="Dashboard preview"
              class="w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="mx-auto max-w-6xl px-4">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
          class="mb-12 text-center"
        >
          <h2 class="text-primary mb-4 text-3xl font-bold">
            How Cuanlyze Can Empower Your Business
          </h2>
          <p class="mx-auto max-w-xl text-base text-gray-700 md:text-lg">
            Our AI-powered tools help you monitor financial health and craft effective promotion
            strategies.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
          <div
            v-for="(feature, i) in features"
            :key="i"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{ opacity: 1, y: 0 }"
            class="rounded-xl bg-white p-8 text-center shadow-lg transition duration-300 hover:shadow-xl"
          >
            <img :src="feature.image" :alt="feature.title" class="mx-auto mb-6 w-20" />
            <h3 class="mb-2 text-xl font-semibold text-gray-800">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20">
      <div class="mx-auto max-w-6xl px-4 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
          class="mb-10"
        >
          <h2 class="text-3xl font-bold">Testimonials</h2>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            class="rounded-xl border bg-gray-50 p-6 text-left transition hover:shadow-md"
          >
            <p class="mb-4 italic">"{{ t.quote }}"</p>
            <div class="font-semibold">{{ t.author }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-20">
      <div class="mx-auto max-w-4xl px-4">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
          class="mb-10 text-center"
        >
          <h2 class="text-primary text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            class="overflow-hidden rounded-xl bg-white shadow transition"
          >
            <button
              @click="toggle(index)"
              class="flex w-full items-center justify-between p-5 text-left text-lg font-semibold text-gray-800 hover:bg-gray-100"
            >
              {{ faq.question }}
              <span :class="isOpen(index) ? 'rotate-180' : ''" class="transform transition">
                ▼
              </span>
            </button>
            <transition name="fade">
              <div v-if="isOpen(index)" class="px-5 pb-5 text-gray-600">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Apa itu Cuanlyze?',
    answer:
      'Cuanlyze adalah platform analitik bisnis yang membantu UMKM mengevaluasi kesehatan keuangan dan memberikan rekomendasi promosi berbasis data.',
  },
  {
    question: 'Apakah saya perlu mendaftar untuk menggunakan fitur?',
    answer:
      'Tidak perlu untuk mencoba fitur cek kesehatan, namun Anda perlu mendaftar untuk menyimpan hasil dan mendapatkan rekomendasi lanjutan.',
  },
  {
    question: 'Bagaimana cara kerja rekomendasi promosi?',
    answer:
      'Cuanlyze menganalisis data penjualan dan cluster produk untuk memberikan strategi promosi yang sesuai berdasarkan tren dan performa produk Anda.',
  },
])

const openIndexes = ref<number[]>([])
const toggle = (index: number) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((i) => i !== index)
  } else {
    openIndexes.value.push(index)
  }
}
const isOpen = (index: number) => openIndexes.value.includes(index)

const features = [
  {
    image: '/images/1.jpg',
    title: 'Financial Analysis',
    desc: 'Understand your finances better',
  },
  {
    image: '/images/2.jpg',
    title: 'Promo Recommendation',
    desc: 'Unlock smart promotion ideas',
  },
]

const testimonials = [
  {
    quote:
      'Cuanlyze sangat membantu saya memahami arus kas dan mengambil keputusan yang lebih baik.',
    author: 'Ibu Rina, Pemilik Toko Oleh-Oleh',
  },
  {
    quote:
      'Setelah menggunakan rekomendasi promosi dari Cuanlyze, penjualan saya meningkat drastis!',
    author: 'Pak Budi, Pengusaha Kuliner',
  },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
