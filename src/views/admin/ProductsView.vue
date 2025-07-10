<template>
  <div class="px-6">
    <div class="mb-6 flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">Products</h1>
      <button
        @click="addProduct"
        class="bg-primary hover:bg-primary-hover rounded px-4 py-2 text-white"
      >
        + Tambah Produk
      </button>
    </div>

    <div class="mb-6">
      <input
        type="text"
        v-model="search"
        placeholder="Cari produk..."
        class="ring-primary w-full max-w-sm rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
      />
    </div>

    <div
      v-if="filteredProducts.length > 0"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="relative cursor-pointer rounded-lg bg-white p-4 shadow transition hover:shadow-md"
        @click="goToDetail(product.id)"
      >
        <div class="absolute top-2 right-2">
          <span
            :class="
              product.status === 'Available'
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            "
            class="rounded-full px-2 py-1 text-xs font-semibold"
          >
            {{ product.status }}
          </span>
        </div>

        <img :src="product.image" alt="" class="mb-4 h-40 w-full object-contain" />
        <h2 class="mb-2 text-center font-semibold text-gray-700">{{ product.name }}</h2>
      </div>
    </div>

    <div v-else class="mt-10 text-center text-gray-500">Tidak ada produk ditemukan.</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const products = ref([
  { id: 1, name: 'White T-Shirt', image: '/images/products/kaos-putih.png', status: 'Available' },
  { id: 2, name: 'Black T-Shirt', image: '/images/products/kaos-putih.png', status: 'Available' },
  { id: 3, name: 'Navy T-Shirt', image: '/images/products/kaos-putih.png', status: 'Out of Stock' },
])

const filteredProducts = computed(() => {
  if (!search.value) return products.value
  return products.value.filter((p) => p.name.toLowerCase().includes(search.value.toLowerCase()))
})

function goToDetail(id) {
  router.push(`/admin/products/${id}`)
}

function addProduct() {
  // Sementara ke halaman detail dengan ID baru fiktif, nanti bisa integrasi dengan backend
  const newId = products.value.length + 1
  router.push(`/admin/products/${newId}`)
}
</script>
