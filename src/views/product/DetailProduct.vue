<template>
  <section class="min-h-screen bg-white pt-36 pb-20">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <!-- Breadcrumb -->
      <div class="text-primary text-medium mb-6">
        <router-link to="/product" class="hover:underline">Product</router-link> /
        <span class="font-medium text-gray-700">{{ product?.name }}</span>
      </div>

      <!-- Layout Kiri-Kanan -->
      <div v-if="product" class="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1fr]">
        <!-- Galeri Gambar -->
        <div class="flex gap-4">
          <div class="flex flex-col gap-3">
            <img
              v-for="(img, i) in product.images"
              :key="i"
              :src="img"
              class="h-16 w-16 cursor-pointer rounded border object-cover hover:opacity-80"
              :class="selectedImage === img ? 'ring-primary' : ''"
              @click="selectedImage = img"
            />
          </div>
          <div class="flex flex-1 justify-center">
            <img
              :src="selectedImage"
              :alt="product.name"
              class="w-full max-w-md rounded-xl object-cover shadow"
            />
          </div>
        </div>

        <!-- Info Produk -->
        <div>
          <h1 class="text-2xl font-bold text-gray-900">{{ product.name }}</h1>
          <div class="mt-1 flex items-center gap-2 text-sm">
            <div class="flex text-yellow-400">
              <LucideStar
                v-for="i in 5"
                :key="i"
                class="h-4 w-4 fill-yellow-400 stroke-yellow-400"
              />
            </div>
            <span class="text-gray-600">(150 Reviews)</span>
            <span class="ml-2 font-medium text-green-600">In Stock</span>
          </div>

          <p class="text-primary mt-4 text-xl font-bold">{{ formatPrice(product.price) }}</p>
          <p class="mt-3 text-sm text-gray-600">{{ product.description }}</p>

          <!-- Warna -->
          <div class="mt-5 text-sm">
            <p class="mb-1 font-medium text-gray-700">Colour:</p>
            <label class="flex items-center gap-2">
              <span
                class="block h-4 w-4 rounded-full border"
                :style="{ backgroundColor: product.colorHex }"
              ></span>
              <span>{{ product.color }}</span>
            </label>
          </div>

          <!-- Ukuran -->
          <div class="mt-4 text-sm">
            <p class="mb-1 font-medium text-gray-700">Size:</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="size in ['S', 'M', 'L', 'XL', 'XXL']"
                :key="size"
                @click="selectedSize = size"
                class="rounded border px-3 py-1 text-sm transition-colors"
                :class="
                  selectedSize === size
                    ? 'border-primary bg-primary text-white'
                    : 'hover:bg-gray-100'
                "
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Jumlah & Beli -->
          <div class="mt-6 flex items-center gap-3">
            <div class="flex items-center rounded border px-3 py-1">
              <button @click="qty--" :disabled="qty <= 1">-</button>
              <span class="px-4">{{ qty }}</span>
              <button @click="qty++">+</button>
            </div>

            <button class="bg-primary rounded px-6 py-2 text-white hover:opacity-90">
              Buy Now
            </button>

            <button class="p-2 text-gray-500 hover:text-red-500">
              <LucideHeart class="h-5 w-5" />
            </button>
          </div>

          <!-- Info Pengiriman -->
          <div class="mt-6 space-y-3 text-sm text-gray-600">
            <div class="flex items-start gap-2">
              <LucideTruck class="text-primary h-5 w-5" />
              <span>Free Delivery ke seluruh Indonesia</span>
            </div>
            <div class="flex items-start gap-2">
              <LucideUndo2 class="text-primary h-5 w-5" />
              <span>30 hari retur gratis</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Produk tidak ditemukan -->
      <div v-else class="pt-24 text-center text-gray-500">Produk tidak ditemukan.</div>
    </div>
    <div v-if="product" class="mt-20">
      <Recommendation />
      <Review />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import {
  Star as LucideStar,
  Heart as LucideHeart,
  Truck as LucideTruck,
  Undo2 as LucideUndo2,
} from 'lucide-vue-next'
import Recommendation from '@/views/product/Recommendation.vue'
import Review from '@/views/product/Review.vue'

const selectedSize = ref('')
const route = useRoute()
const id = parseInt(route.params.id as string)
const qty = ref(1)

const products = [
  {
    id: 1,
    name: 'Kaos Polos Putih',
    price: 55000,
    color: 'Putih',
    colorHex: '#f5f5f5',
    description: 'Kaos polos putih berbahan cotton combed 24s, nyaman dipakai sehari-hari.',
    images: [
      '/images/products/kaos-putih.png',
      '/images/products/kaos-putih-2.png',
      '/images/products/kaos-putih-3.png',
      '/images/products/kaos-putih-3.png',
      '/images/products/kaos-putih-3.png',
    ],
  },
  {
    id: 2,
    name: 'Kaos Polos Hitam',
    price: 55000,
    color: 'Hitam',
    description: 'Kaos polos hitam dengan bahan halus dan tahan lama.',
    images: ['/images/products/kaos-hitam.png', '/images/products/kaos-hitam-2.png'],
  },
]

const product = ref(products.find((p) => p.id === id) || null)
const selectedImage = ref(product.value?.images[0] || '')

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}
</script>
