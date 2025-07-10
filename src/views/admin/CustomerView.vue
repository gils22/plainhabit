<template>
  <div class="px-6">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Customers</h1>

    <DataTable
      :data="customers"
      :columns="columns"
      searchPlaceholder="Cari customer..."
      searchField="name"
      :isLoading="isLoading"
      :perPage="10"
      withCheckbox
    >
      <!-- Filter status -->
      <template #filters>
        <select v-model="selectedStatus" class="ring-primary rounded border px-4 py-2 focus:ring-2">
          <option value="">Semua Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </template>

      <!-- Custom cell status -->
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

      <!-- Action buttons -->
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
const customers = ref([])
const selectedStatus = ref('')

onMounted(() => {
  setTimeout(() => {
    customers.value = [
      {
        id: 1,
        name: 'Budi Santoso',
        email: 'budi@example.com',
        phone: '081234567890',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Siti Aminah',
        email: 'siti@example.com',
        phone: '082112345678',
        status: 'Inactive',
      },
      {
        id: 3,
        name: 'Andi Pratama',
        email: 'andi@example.com',
        phone: '081987654321',
        status: 'Active',
      },
      {
        id: 4,
        name: 'Lisa Natalia',
        email: 'lisa@example.com',
        phone: '083245678901',
        status: 'Active',
      },
      {
        id: 5,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '085678901234',
        status: 'Inactive',
      },
      {
        id: 6,
        name: 'Rina Putri',
        email: 'rina@example.com',
        phone: '087654321098',
        status: 'Active',
      },
    ]
    isLoading.value = false
  }, 1000)
})

const columns = [
  { key: 'name', label: 'Nama', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'phone', label: 'Telepon', sortable: true },
  { key: 'status', label: 'Status' },
]
</script>
