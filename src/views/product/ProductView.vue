<template>
  <section class="min-h-screen bg-white pt-32 pb-16">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <!-- Judul Halaman -->
      <div class="mb-12 text-center" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-sky-700 md:text-4xl">Koleksi Produk</h2>
        <p class="mt-2 text-gray-600 md:text-base">
          Temukan kenyamanan dan gaya minimalis dalam koleksi kami.
        </p>
      </div>

      <!-- Daftar Produk -->
      <div
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="`/product/${product.id}`"
          class="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg"
        >
          <!-- Gambar Produk -->
          <div class="relative w-full overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <!-- Tombol Wishlist -->
            <button
              class="absolute top-2 right-2 rounded-full bg-white/80 p-1 text-gray-700 hover:text-red-500"
              @click.stop
            >
              <LucideHeart class="h-4 w-4" />
            </button>

            <!-- Tombol Tambah ke Keranjang -->
            <button
              class="absolute top-2 right-10 rounded-full bg-white/80 p-1 text-gray-700 hover:text-blue-500"
              @click.stop
            >
              <LucideShoppingCart class="h-4 w-4" />
            </button>
          </div>

          <!-- Detail Produk -->
          <div class="p-3 text-center">
            <h3 class="text-xs font-semibold text-gray-800 group-hover:text-sky-600">
              {{ product.name }}
            </h3>
            <p class="mt-1 text-xs text-gray-500">{{ formatPrice(product.price) }}</p>

            <!-- Rating -->
            <div class="mt-2 flex justify-center text-yellow-400">
              <LucideStar
                v-for="i in 4"
                :key="'star-' + i"
                class="h-4 w-4 fill-yellow-400 stroke-yellow-400"
              />
              <LucideStar class="h-4 w-4 stroke-yellow-400" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Heart as LucideHeart,
  ShoppingCart as LucideShoppingCart,
  Star as LucideStar,
} from 'lucide-vue-next'

const products = [
  {
    id: 1,
    name: 'Kaos Polos Putih',
    price: 55000,
    image: '/images/products/kaos-putih.png',
  },
  {
    id: 2,
    name: 'Kaos Polos Hitam',
    price: 55000,
    image: '/images/products/kaos-putih.png',
  },
  {
    id: 3,
    name: 'Kaos Polos Abu',
    price: 55000,
    image: '/images/products/kaos-putih.png',
  },
  {
    id: 4,
    name: 'Kaos Polos Cream',
    price: 55000,
    image: '/images/products/kaos-putih.png',
  },
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}
</script>
