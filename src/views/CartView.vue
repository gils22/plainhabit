<template>
  <section class="min-h-screen bg-white pt-36 pb-20">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-[2fr_1fr]">
      <div>
        <h1 class="text-primary mb-6 text-2xl font-bold" data-aos="fade-up">Keranjang Belanja</h1>
        <div v-if="items.length > 0">
          <div
            v-for="item in items"
            :key="item.id + item.size"
            class="relative mb-6 flex gap-4 border-b pb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img :src="item.image" alt="" class="h-32 w-32 rounded border object-cover" />
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <h2 class="text-lg font-semibold text-gray-900">{{ item.name }}</h2>
                <p class="text-sm text-gray-600">Warna: {{ item.color }}</p>
                <p class="text-sm text-gray-600">Ukuran: {{ item.size }}</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <button
                    @click="decreaseQty(item)"
                    :disabled="item.qty <= 1"
                    class="rounded border px-2 py-1"
                  >
                    -
                  </button>
                  <span class="px-4">{{ item.qty }}</span>
                  <button @click="increaseQty(item)" class="rounded border px-2 py-1">+</button>
                </div>
                <div class="font-semibold">{{ formatPrice(item.price * item.qty) }}</div>
              </div>
            </div>

            <button
              @click="removeItem(item)"
              class="absolute top-0 right-0 text-xl text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </div>
        </div>

        <div v-else class="text-lg text-gray-500" data-aos="fade-up">
          Belum Ada Produk yang Ditambahkan.
        </div>
      </div>

      <div class="sticky top-32 h-fit rounded-lg border p-6 shadow-lg" data-aos="fade-left">
        <h2 class="mb-4 text-xl font-semibold">Ringkasan Pesanan</h2>
        <div class="mb-2 flex justify-between">
          <span>Subtotal Produk</span>
          <span>{{ formatPrice(subtotal) }}</span>
        </div>
        <div class="mb-2 flex justify-between">
          <span>PPN (10%)</span>
          <span>{{ formatPrice(tax) }}</span>
        </div>
        <div class="mb-4 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{{ formatPrice(total) }}</span>
        </div>
        <button
          @click="goToCheckout"
          class="bg-primary w-full rounded-lg py-3 font-semibold text-white hover:opacity-90"
        >
          Lanjut ke Pembayaran
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { items, subtotal, tax, total } = storeToRefs(cartStore)
const router = useRouter()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const increaseQty = (item: any) => {
  cartStore.increaseQty(item)
}

const decreaseQty = (item: any) => {
  cartStore.decreaseQty(item)
}

const removeItem = (item: any) => {
  cartStore.removeItem(item)
}

const goToCheckout = () => {
  if (items.value.length === 0) {
    alert('Keranjang kosong!')
    return
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if (isLoggedIn !== 'true') {
    alert('Silakan login terlebih dahulu untuk melanjutkan ke pembayaran.')
    router.push('/login')
    return
  }

  router.push('/checkout')
}
</script>
