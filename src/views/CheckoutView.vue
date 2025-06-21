<template>
  <section class="min-h-screen bg-white pt-36 pb-20">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <h1 class="text-primary mb-8 text-3xl font-bold" data-aos="fade-up">Checkout</h1>

      <div
        class="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="space-y-6">
          <div>
            <label class="mb-1 block font-medium">Nama Lengkap</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full rounded border px-4 py-2"
              required
            />
          </div>
          <div>
            <label class="mb-1 block font-medium">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded border px-4 py-2"
              required
            />
          </div>
          <div>
            <label class="mb-1 block font-medium">Alamat Lengkap</label>
            <textarea
              v-model="form.address"
              class="w-full rounded border px-4 py-2"
              rows="3"
              required
            ></textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="mb-1 block font-medium">Kota</label>
              <input
                v-model="form.city"
                type="text"
                class="w-full rounded border px-4 py-2"
                required
              />
            </div>
            <div>
              <label class="mb-1 block font-medium">Kode Pos</label>
              <input
                v-model="form.zip"
                type="text"
                class="w-full rounded border px-4 py-2"
                required
              />
            </div>
          </div>
          <div>
            <label class="mb-1 block font-medium">Telepon</label>
            <input
              v-model="form.phone"
              type="text"
              class="w-full rounded border px-4 py-2"
              required
            />
          </div>
        </div>

        <div class="rounded-lg border p-6 shadow-lg">
          <h2 class="mb-4 text-xl font-semibold">Ringkasan Pesanan</h2>
          <div class="mb-4 max-h-64 space-y-2 overflow-y-auto">
            <div
              v-for="item in items"
              :key="item.id + item.size"
              class="flex justify-between text-sm"
            >
              <span>{{ item.name }} ({{ item.size }}) x{{ item.qty }}</span>
              <span>{{ formatPrice(item.price * item.qty) }}</span>
            </div>
          </div>

          <div class="mb-2 flex justify-between">
            <span>Subtotal</span>
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
            @click="submitOrder"
            class="bg-primary w-full rounded-lg py-3 font-semibold text-white hover:opacity-90"
          >
            Konfirmasi Pesanan
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { items, subtotal, tax, total } = storeToRefs(cartStore)

const form = ref({
  name: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  phone: '',
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
}

const submitOrder = () => {
  if (items.value.length === 0) {
    alert('Keranjang kosong!')
    return
  }
  alert('Pesanan berhasil disimpan.\nTerima kasih!')
  cartStore.clearCart()
}
</script>
