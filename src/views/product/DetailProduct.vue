<template>
  <section class="min-h-screen bg-white pt-36 pb-20">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <div class="text-primary mb-6 text-sm">
        <router-link to="/product" class="hover:underline">Product</router-link> /
        <span class="font-medium text-gray-700">{{ product?.name }}</span>
      </div>

      <div v-if="product" class="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div class="flex flex-col gap-4 md:flex-row">
          <div class="flex gap-3 md:flex-col">
            <img
              v-for="(img, i) in product.images"
              :key="i"
              :src="img"
              class="h-16 w-16 cursor-pointer rounded-lg border object-cover transition-all hover:opacity-80"
              :class="selectedImage === img ? 'ring-primary ring-2' : ''"
              @click="selectedImage = img"
            />
          </div>

          <div class="flex flex-1 justify-center">
            <img
              :src="selectedImage"
              :alt="product.name"
              class="w-full max-w-md rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-gray-900">{{ product.name }}</h1>
            <button @click="toggleWishlist" title="Tambah ke Wishlist">
              <LucideHeart
                class="h-6 w-6 transition"
                :class="
                  isInWishlist
                    ? 'fill-red-500 text-red-500'
                    : 'fill-transparent text-gray-400 hover:text-red-500'
                "
              />
            </button>
          </div>

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

          <p class="text-primary mt-4 text-3xl font-semibold">{{ formatPrice(product.price) }}</p>
          <p class="mt-3 text-sm text-gray-600">{{ product.description }}</p>

          <div class="mt-5">
            <p class="mb-1 font-medium">Colour:</p>
            <div class="flex items-center gap-2">
              <span
                class="block h-5 w-5 rounded-full border"
                :style="{ backgroundColor: product.colorHex }"
              ></span>
              <span class="text-sm text-gray-700">{{ product.color }}</span>
            </div>
          </div>

          <div class="mt-4">
            <p class="mb-1 font-medium">Size:</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="size in ['S', 'M', 'L', 'XL', 'XXL']"
                :key="size"
                @click="selectedSize = size"
                class="rounded border px-4 py-2 text-sm font-medium transition-colors"
                :class="
                  selectedSize === size
                    ? 'bg-primary border-primary text-white'
                    : 'hover:bg-gray-100'
                "
              >
                {{ size }}
              </button>
            </div>
          </div>

          <div class="mt-6 flex flex-col items-center gap-4 sm:flex-row">
            <div class="flex items-center rounded-lg border px-4 py-2">
              <button @click="qty--" :disabled="qty <= 1" class="px-3 text-lg">-</button>
              <span class="px-4">{{ qty }}</span>
              <button @click="qty++" class="px-3 text-lg">+</button>
            </div>

            <button
              @click="addToCart"
              :disabled="!selectedSize"
              class="bg-primary flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white shadow transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>

      <div v-else class="pt-24 text-center text-gray-500">Produk tidak ditemukan.</div>
    </div>

    <div v-if="product" class="mt-20 px-4 md:px-8">
      <Recommendation />
      <Review />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { Star as LucideStar, Heart as LucideHeart } from 'lucide-vue-next'
import Recommendation from '@/views/product/Recommendation.vue'
import Review from '@/views/product/Review.vue'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

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
    ],
  },
  {
    id: 2,
    name: 'Kaos Polos Hitam',
    price: 55000,
    color: 'Hitam',
    colorHex: '#000000',
    description: 'Kaos polos hitam dengan bahan halus dan tahan lama.',
    images: ['/images/products/kaos-hitam.png', '/images/products/kaos-hitam-2.png'],
  },
]

const product = ref(products.find((p) => p.id === id) || null)
const selectedImage = ref(product.value?.images[0] || '')

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
}

const addToCart = () => {
  if (!selectedSize.value || !product.value) return

  cartStore.addItem({
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    color: product.value.color,
    size: selectedSize.value,
    qty: qty.value,
    image: product.value.images[0],
  })

  alert('Produk berhasil ditambahkan ke keranjang.')
}

const isInWishlist = computed(() => {
  if (!product.value) return false
  return wishlistStore.items.some((item) => item.id === product.value!.id)
})

const mapToWishlistItem = () => {
  if (!product.value) return null

  return {
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    color: product.value.color,
    size: selectedSize.value || 'Default',
    image: product.value.images[0],
  }
}

const toggleWishlist = () => {
  const wishlistItem = mapToWishlistItem()
  if (!wishlistItem) return

  if (isInWishlist.value) {
    wishlistStore.removeItem(wishlistItem)
  } else {
    wishlistStore.addItem(wishlistItem)
  }
}
</script>
