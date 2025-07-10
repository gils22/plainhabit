<template>
  <div class="px-6">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Detail Products</h1>

    <!-- Main Info -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Product Images -->
      <div>
        <div class="mb-4 rounded-lg bg-gray-100 p-4">
          <img :src="mainImage" alt="Main Image" class="h-80 w-full object-contain" />
        </div>

        <div class="flex gap-4">
          <div
            v-for="(img, index) in product.images"
            :key="index"
            @click="mainImage = img"
            class="cursor-pointer rounded border p-1"
            :class="{ 'ring-primary ring-2': mainImage === img }"
          >
            <img :src="img" class="h-24 w-24 object-contain" />
          </div>

          <!-- Upload New Image -->
          <div>
            <label
              class="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300"
            >
              <input type="file" class="hidden" @change="handleImageUpload" />
              <UploadIcon class="h-6 w-6 text-gray-400" />
              <span class="text-xs text-gray-400">Upload</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Product Information -->
      <div class="space-y-4">
        <div><b>Product ID:</b> {{ product.id }}</div>

        <div>
          <label>Product Name</label>
          <input v-model="product.name" type="text" class="w-full rounded border px-3 py-2" />
        </div>

        <div>
          <label>Category</label>
          <input v-model="product.category" type="text" class="w-full rounded border px-3 py-2" />
        </div>

        <div>
          <label>Price</label>
          <input v-model="product.price" type="number" class="w-full rounded border px-3 py-2" />
        </div>

        <div>
          <label>Description</label>
          <textarea
            v-model="product.description"
            class="w-full rounded border px-3 py-2"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Size & Stock Table -->
    <div class="mt-10 rounded-lg bg-white p-6 shadow">
      <h2 class="mb-4 text-xl font-bold">Size & Stock</h2>
      <table class="w-full border">
        <thead class="bg-gray-100">
          <tr>
            <th class="p-3">Size</th>
            <th class="p-3">Stock</th>
            <th class="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in product.variants" :key="index" class="border-t">
            <td class="p-3">{{ item.size }}</td>
            <td class="p-3">{{ item.stock }}</td>
            <td class="space-x-2 p-3">
              <button @click="editVariant(index)" class="hover:text-primary">
                <PencilIcon class="h-5 w-5" />
              </button>
              <button @click="removeVariant(index)" class="hover:text-red-500">
                <TrashIcon class="h-5 w-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Add Size Variant -->
      <div class="mt-4 flex gap-4">
        <input v-model="newSize" placeholder="Size" class="rounded border px-3 py-2" />
        <input
          v-model.number="newStock"
          placeholder="Stock"
          type="number"
          class="w-32 rounded border px-3 py-2"
        />
        <button
          @click="addVariant"
          class="bg-primary hover:bg-primary-hover rounded px-4 py-2 text-white"
        >
          Add
        </button>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="mt-10 flex justify-end space-x-3">
      <button class="rounded border px-4 py-2">Cancel</button>
      <button class="bg-primary hover:bg-primary-hover rounded px-4 py-2 text-white">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { UploadIcon, PencilIcon, TrashIcon } from 'lucide-vue-next'

const product = reactive({
  id: '0001',
  name: 'White Basic T-Shirt',
  category: 'Basic T-Shirt',
  price: 55000,
  description: '',
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

function addVariant() {
  if (newSize.value && newStock.value >= 0) {
    product.variants.push({ size: newSize.value, stock: newStock.value })
    newSize.value = ''
    newStock.value = 0
  }
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
    }
    reader.readAsDataURL(file)
  }
}
</script>
