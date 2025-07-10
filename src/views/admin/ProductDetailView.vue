<template>
  <div class="px-6">
    <div class="mb-6 flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">Detail Produk</h1>
      <button
        @click="confirmDelete"
        class="flex items-center gap-2 text-red-500 hover:text-red-600"
      >
        <TrashIcon class="h-5 w-5" /> Hapus Produk
      </button>
    </div>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Gambar -->
      <div>
        <div
          class="mb-4 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-4 shadow-sm"
          @dragover.prevent
          @drop.prevent="handleDrop"
        >
          <img v-if="mainImage" :src="mainImage" class="h-80 w-full object-contain" />
          <div v-else class="text-gray-400">Seret gambar ke sini</div>
        </div>

        <div class="flex flex-wrap gap-4">
          <div
            v-for="(img, idx) in product.images"
            :key="idx"
            class="relative cursor-pointer p-1 transition hover:shadow"
            :class="{ 'ring-primary rounded-lg ring-2': mainImage === img }"
          >
            <img :src="img" class="h-24 w-24 rounded-lg object-contain" @click="mainImage = img" />
            <button
              @click="removeImage(idx)"
              class="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs text-white shadow hover:bg-red-500"
            >
              ✕
            </button>
          </div>

          <!-- Upload Gambar Manual -->
          <div>
            <label
              class="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 transition hover:bg-gray-50"
            >
              <input type="file" class="hidden" @change="handleImageUpload" />
              <UploadIcon class="h-6 w-6 text-gray-400" />
              <span class="text-xs text-gray-400">Upload</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Form Produk -->
      <div class="space-y-4">
        <div class="text-sm text-gray-500"><b>ID Produk:</b> {{ productId }}</div>

        <div>
          <label class="font-medium">Nama Produk</label>
          <input
            v-model="product.name"
            type="text"
            class="ring-primary w-full rounded border px-3 py-2 outline-none focus:ring-2"
          />
        </div>

        <div>
          <label class="font-medium">Kategori</label>
          <input
            v-model="product.category"
            type="text"
            class="ring-primary w-full rounded border px-3 py-2 outline-none focus:ring-2"
          />
        </div>

        <div>
          <label class="font-medium">Harga (Rp)</label>
          <input
            v-model="priceInput"
            @input="formatInput"
            type="text"
            class="ring-primary w-full rounded border px-3 py-2 outline-none focus:ring-2"
          />
        </div>

        <div>
          <label class="font-medium">Status Produk</label>
          <select
            v-model="product.status"
            class="ring-primary w-full rounded border px-3 py-2 outline-none focus:ring-2"
          >
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </div>

        <div>
          <label class="font-medium">Deskripsi</label>
          <textarea
            v-model="product.description"
            rows="3"
            class="ring-primary w-full rounded border px-3 py-2 outline-none focus:ring-2"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Size & Stock -->
    <div class="mt-10 rounded-lg bg-white p-6 shadow-sm">
      <h2 class="mb-4 text-xl font-bold text-gray-700">Varian Ukuran & Stok</h2>

      <div class="overflow-x-auto rounded-lg shadow">
        <table class="w-full border-collapse text-center text-sm">
          <thead class="bg-gray-50 text-gray-600">
            <tr>
              <th class="border-b px-4 py-3">Ukuran</th>
              <th class="border-b px-4 py-3">Stok</th>
              <th class="border-b px-4 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(variant, index) in product.variants"
              :key="index"
              class="transition hover:bg-gray-50"
            >
              <td class="px-4 py-3 font-semibold text-gray-700">{{ variant.size }}</td>
              <td class="px-4 py-3">
                <input
                  v-model.number="variant.stock"
                  @input="validateStock(variant, index)"
                  type="number"
                  class="w-20 rounded border border-gray-300 py-1 text-center"
                />
              </td>
              <td class="px-4 py-3">
                <button @click="removeVariant(index)" class="text-red-500 hover:text-red-600">
                  <TrashIcon class="h-5 w-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Tambah Varian Baru -->
      <div class="mt-6 flex flex-wrap items-center gap-4">
        <input
          v-model="newSize"
          placeholder="Ukuran"
          class="w-32 rounded border px-3 py-2 text-center"
        />
        <input
          v-model="newStock"
          @input="validateNewStock"
          placeholder="Stok"
          type="number"
          class="w-32 rounded border px-3 py-2 text-center"
        />
        <button
          @click="addVariant"
          class="bg-primary hover:bg-primary-hover rounded px-5 py-2 text-white"
        >
          Tambah
        </button>
      </div>
    </div>

    <!-- Tombol Simpan -->
    <div class="mt-10 flex justify-end gap-3">
      <button class="rounded border px-4 py-2 text-gray-600">Batal</button>
      <button class="bg-primary hover:bg-primary-hover rounded px-5 py-2 text-white">Simpan</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { UploadIcon, TrashIcon } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const productId = route.params.id

const product = reactive({
  id: productId,
  name: 'White Basic T-Shirt',
  category: 'Basic T-Shirt',
  price: 55000,
  description: '',
  status: 'Aktif',
  images: ['/images/products/kaos-putih.png', '/images/products/kaos-putih.png'],
  variants: [
    { size: 'S', stock: 5 },
    { size: 'M', stock: 12 },
    { size: 'L', stock: 10 },
    { size: 'XL', stock: 6 },
  ],
})

const mainImage = ref(product.images[0])
const newSize = ref('')
const newStock = ref(0)
const priceInput = ref(formatCurrency(product.price))

watch(
  () => product.price,
  (val) => {
    priceInput.value = formatCurrency(val)
  },
)

function formatCurrency(value) {
  const number = Number(value) || 0
  return number.toLocaleString('id-ID')
}

function formatInput(e) {
  const raw = e.target.value.replace(/[^\d]/g, '')
  priceInput.value = formatCurrency(raw)
  product.price = Number(raw)
}

function validateStock(variant, index) {
  if (variant.stock < 0) {
    product.variants[index].stock = 0
  }
}

function validateNewStock(e) {
  if (newStock.value < 0) {
    newStock.value = 0
  }
}

function addVariant() {
  if (!newSize.value || newStock.value === '') {
    alert('Lengkapi ukuran & stok.')
    return
  }
  product.variants.push({ size: newSize.value, stock: newStock.value })
  newSize.value = ''
  newStock.value = 0
}

function removeVariant(index) {
  product.variants.splice(index, 1)
}

function handleImageUpload(e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      product.images.push(reader.result)
      mainImage.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}

function handleDrop(e) {
  const file = e.dataTransfer.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      product.images.push(reader.result)
      mainImage.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}

function removeImage(index) {
  product.images.splice(index, 1)
  mainImage.value = product.images[0] || null
}

function confirmDelete() {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    alert('Produk berhasil dihapus.')
    router.push('/admin/products')
  }
}
</script>
