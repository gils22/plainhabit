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
const recommendedProducts = [
  {
    id: 3,
    name: 'Kaos Polos Abu',
    price: 55000,
    image: '/images/products/kaos-abu.png',
  },
  {
    id: 4,
    name: 'Kaos Polos Navy',
    price: 60000,
    image: '/images/products/kaos-navy.png',
  },
  {
    id: 5,
    name: 'Kaos Oversize Cream',
    price: 65000,
    image: '/images/products/kaos-cream.png',
  },
  {
    id: 6,
    name: 'Kaos Polos Army',
    price: 59000,
    image: '/images/products/kaos-army.png',
  },
]

const formatPrice = (price: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
</script>
