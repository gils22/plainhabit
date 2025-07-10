<template>
  <section class="mt-20">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <h2 class="mb-6 text-2xl font-bold text-sky-700">Rekomendasi Produk</h2>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <router-link
          v-for="product in recommendedProducts"
          :key="product.id"
          :to="`/product/${product.id}`"
          class="group overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md"
        >
          <img :src="product.image" :alt="product.name" class="h-48 w-full object-cover" />
          <div class="p-3 text-center">
            <h3 class="text-sm font-semibold text-gray-800 group-hover:text-sky-600">
              {{ product.name }}
            </h3>
            <p class="text-sm text-gray-500">{{ formatPrice(product.price) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const recommendedProductsFull = [
  {
    id: 1,
    name: 'Plainhabit Basic Putih',
    price: 55000,
    image: '/images/products/kaos-putih.png',
    color: 'Putih',
  },
  {
    id: 2,
    name: 'Plainhabit Basic Hitam',
    price: 55000,
    image: '/images/products/kaos-hitam.png',
    color: 'Hitam',
  },
  {
    id: 3,
    name: 'Plainhabit Basic Begie',
    price: 55000,
    image: '/images/products/kaos-begie.png',
    color: 'Abu',
  },
  {
    id: 4,
    name: 'Plainhabit Basic Green Stone',
    price: 55000,
    image: '/images/products/kaos-green-stone.png',
    color: 'Cream',
  },
  {
    id: 5,
    name: 'Plainhabit Basic Sky Blue',
    price: 55000,
    image: '/images/products/kaos-skyblue.png',
    color: 'Putih',
  },
  {
    id: 6,
    name: 'Plainhabit Basic Biru Dongker',
    price: 55000,
    image: '/images/products/kaos-biru-dongker.png',
    color: 'Hitam',
  },
  {
    id: 7,
    name: 'Plainhabit Basic Honey',
    price: 55000,
    image: '/images/products/kaos-honey.png',
    color: 'Abu',
  },
  {
    id: 8,
    name: 'Plainhabit Basic Mustard',
    price: 55000,
    image: '/images/products/kaos-mustard.png',
    color: 'Cream',
  },
  {
    id: 9,
    name: 'Plainhabit Basic Maroon',
    price: 55000,
    image: '/images/products/kaos-maroon.png',
    color: 'Cream',
  },
]

const recommendedProducts = ref<typeof recommendedProductsFull>([])
function getRandomProducts(products: typeof recommendedProductsFull, count: number) {
  const shuffled = [...products].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
onMounted(() => {
  recommendedProducts.value = getRandomProducts(recommendedProductsFull, 4)
})

const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
</script>
