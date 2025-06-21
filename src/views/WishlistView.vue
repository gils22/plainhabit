<template>
  <section class="min-h-screen bg-white pt-36 pb-20">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <h1 class="text-primary mb-8 text-center text-3xl font-bold" data-aos="fade-up">Wishlist</h1>

      <div v-if="items.length > 0" class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div
          v-for="(item, index) in items"
          :key="item.id + item.size"
          class="group relative overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <router-link :to="`/product/${item.id}`">
            <div class="relative w-full overflow-hidden">
              <img
                :src="item.image"
                :alt="item.name"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </router-link>
          <button
            @click="removeItem(item)"
            class="absolute top-2 right-2 z-10 text-xl font-bold text-red-500 hover:text-red-700"
            title="Hapus dari wishlist"
          >
            &times;
          </button>

          <div class="p-3 text-center">
            <router-link :to="`/product/${item.id}`" class="block">
              <h3 class="truncate text-xs font-semibold text-gray-800 group-hover:text-sky-600">
                {{ item.name }}
              </h3>
            </router-link>
            <p class="mt-1 text-xs text-gray-500">{{ formatPrice(item.price) }}</p>
            <button
              @click="moveToCart(item)"
              class="bg-primary mt-3 rounded px-3 py-1 text-xs font-semibold text-white hover:opacity-90"
            >
              Pindahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-lg text-gray-500" data-aos="fade-up">
        Wishlist kamu kosong.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useWishlistStore } from '@/stores/wishlist'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import AOS from 'aos'

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()

const { items } = storeToRefs(wishlistStore)

onMounted(() => {
  AOS.refresh()
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const removeItem = (item: any) => {
  wishlistStore.removeItem(item)
  AOS.refresh()
}

const moveToCart = (item: any) => {
  cartStore.addItem({
    id: item.id,
    name: item.name,
    price: item.price,
    color: item.color,
    size: item.size,
    qty: 1,
    image: item.image,
  })
  wishlistStore.removeItem(item)
  AOS.refresh()
}
</script>
