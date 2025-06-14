<template>
  <section class="text-primary w-full px-4 py-20" data-aos="fade-up">
    <div class="mx-auto max-w-3xl">
      <h2 class="mb-10 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
      <div
        v-for="(item, index) in faqs"
        :key="index"
        class="mb-4 overflow-hidden rounded-lg border border-gray-300 bg-white shadow transition"
      >
        <button
          @click="toggle(index)"
          class="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold hover:bg-gray-50"
        >
          {{ item.question }}
          <span class="ml-4 text-xl font-bold">
            {{ activeIndex === index ? '−' : '+' }}
          </span>
        </button>
        <transition name="fade">
          <div v-if="activeIndex === index" class="px-6 pb-4 text-sm text-gray-600">
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Apakah Plain Habit hanya menjual kaos?',
    answer: 'Untuk saat ini kami fokus pada kaos, namun akan ada produk lain di masa depan.',
  },
  {
    question: 'Bagaimana cara pemesanan produk?',
    answer: 'Pemesanan bisa dilakukan langsung melalui halaman katalog di website ini.',
  },
  {
    question: 'Apakah tersedia pengembalian barang?',
    answer: 'Ya, kami memiliki kebijakan pengembalian dalam 30 hari setelah pembelian.',
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
