<template>
  <div class="px-6">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Categories</h1>

    <DataTable
      :data="categories"
      :columns="columns"
      searchPlaceholder="Cari kategori kaos..."
      searchField="name"
      :isLoading="isLoading"
      :perPage="10"
      withCheckbox
    >
      <!-- Filter Status -->
      <template #filters>
        <select v-model="selectedStatus" class="ring-primary rounded border px-4 py-2 focus:ring-2">
          <option value="">Semua Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </template>

      <!-- Custom Status Cell -->
      <template #cell-status="{ row }">
        <span
          :class="[
            'rounded-full px-3 py-1 text-xs font-semibold',
            row.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
          ]"
        >
          {{ row.status }}
        </span>
      </template>

      <!-- Actions -->
      <template #actions="{ row }">
        <button class="hover:text-primary"><EyeIcon class="h-5 w-5" /></button>
        <button class="hover:text-red-500"><TrashIcon class="h-5 w-5" /></button>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from '@/components/common/DataTable.vue'
import { ref, onMounted } from 'vue'
import { EyeIcon, TrashIcon } from 'lucide-vue-next'

const isLoading = ref(true)
const categories = ref([])
const selectedStatus = ref('')

onMounted(() => {
  setTimeout(() => {
    categories.value = [
      {
        id: 1,
        name: 'Kaos Polos',
        description: 'Kaos polos tanpa motif',
        products: 120,
        status: 'Active',
      },
      {
        id: 2,
        name: 'Kaos Desain Grafis',
        description: 'Kaos dengan desain sablon unik',
        products: 80,
        status: 'Active',
      },
      {
        id: 3,
        name: 'Kaos Oversize',
        description: 'Kaos oversized trendi',
        products: 50,
        status: 'Active',
      },
      {
        id: 4,
        name: 'Kaos Lengan Panjang',
        description: 'Kaos panjang bahan nyaman',
        products: 30,
        status: 'Inactive',
      },
      {
        id: 5,
        name: 'Kaos Couple',
        description: 'Kaos pasangan couple',
        products: 20,
        status: 'Active',
      },
    ]
    isLoading.value = false
  }, 1000)
})

const columns = [
  { key: 'name', label: 'Nama Kategori', sortable: true },
  { key: 'description', label: 'Deskripsi' },
  { key: 'products', label: 'Jumlah Produk', sortable: true },
  { key: 'status', label: 'Status' },
]
</script>
