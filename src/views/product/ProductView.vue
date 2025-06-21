<template>
  <section class="min-h-screen bg-white pt-32 pb-16">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <div class="mb-12 text-center" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-sky-700 md:text-4xl">Koleksi Produk</h2>
        <p class="mt-2 text-gray-600 md:text-base">
          Temukan kenyamanan dan gaya minimalis dalam koleksi kami.
        </p>
      </div>

      <LoadingSpinner v-if="isLoading" />
      <div
        v-else
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg"
        >
          <router-link :to="`/product/${product.id}`">
            <div class="relative w-full overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </router-link>
          <button
            class="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1"
            @click.stop="toggleWishlist(product)"
          >
            <LucideHeart
              class="h-5 w-5 transition"
              :class="
                isInWishlist(product)
                  ? 'fill-red-500 text-red-500'
                  : 'fill-transparent text-gray-700 hover:text-red-500'
              "
            />
          </button>

          <div class="p-3 text-center">
            <h3 class="text-xs font-semibold text-gray-800 group-hover:text-sky-600">
              {{ product.name }}
            </h3>
            <p class="mt-1 text-xs text-gray-500">{{ formatPrice(product.price) }}</p>

            <div class="mt-2 flex justify-center text-yellow-400">
              <LucideStar
                v-for="i in 4"
                :key="'star-' + i"
                class="h-4 w-4 fill-yellow-400 stroke-yellow-400"
              />
              <LucideStar class="h-4 w-4 stroke-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Heart as LucideHeart, Star as LucideStar } from 'lucide-vue-next'
import { useWishlistStore } from '@/stores/wishlist'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'

const wishlistStore = useWishlistStore()
const isLoading = ref(true)

const products = ref<any[]>([])

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const isInWishlist = (product: any) => {
  return wishlistStore.items.some((item) => item.id === product.id)
}

const toggleWishlist = (product: any) => {
  if (isInWishlist(product)) {
    wishlistStore.removeItem(product)
  } else {
    wishlistStore.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.color,
      size: 'Default',
      image: product.image,
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    products.value = [
      {
        id: 1,
        name: 'Kaos Polos Putih',
        price: 55000,
        image: '/images/products/kaos-putih.png',
        color: 'Putih',
      },
      {
        id: 2,
        name: 'Kaos Polos Hitam',
        price: 55000,
        image: '/images/products/kaos-putih.png',
        color: 'Hitam',
      },
      {
        id: 3,
        name: 'Kaos Polos Abu',
        price: 55000,
        image: '/images/products/kaos-putih.png',
        color: 'Abu',
      },
      {
        id: 4,
        name: 'Kaos Polos Cream',
        price: 55000,
        image: '/images/products/kaos-putih.png',
        color: 'Cream',
      },
    ]
    isLoading.value = false
  }, 800)
})
</script>
