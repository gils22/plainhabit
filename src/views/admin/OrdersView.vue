<template>
  <div class="px-6">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Orders</h1>

    <DataTable
      :data="orders"
      :columns="columns"
      searchPlaceholder="Cari customer..."
      searchField="customer"
      :isLoading="isLoading"
      :perPage="10"
      withCheckbox
    >
      <!-- Filter status dipindahkan ke dalam slot filters -->
      <template #filters>
        <select v-model="selectedStatus" class="ring-primary rounded border px-4 py-2 focus:ring-2">
          <option value="">Semua Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </template>

      <!-- Custom cell status -->
      <template #cell-status="{ row }">
        <span
          :class="[
            'rounded-full px-3 py-1 text-xs font-semibold',
            row.status === 'Completed'
              ? 'bg-green-100 text-green-600'
              : row.status === 'Pending'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-red-100 text-red-600',
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
import { ref, computed, onMounted } from 'vue'
import { EyeIcon, TrashIcon } from 'lucide-vue-next'

const isLoading = ref(true)
const orders = ref([])
const selectedStatus = ref('')

onMounted(() => {
  setTimeout(() => {
    orders.value = [
      {
        id: 1,
        invoice: 'INV-1001',
        customer: 'Budi',
        date: '2024-06-01',
        total: 450000,
        status: 'Completed',
      },
      {
        id: 2,
        invoice: 'INV-1002',
        customer: 'Siti',
        date: '2024-06-03',
        total: 125000,
        status: 'Pending',
      },
      {
        id: 3,
        invoice: 'INV-1003',
        customer: 'Andi',
        date: '2024-06-05',
        total: 750000,
        status: 'Cancelled',
      },
      {
        id: 4,
        invoice: 'INV-1004',
        customer: 'Lisa',
        date: '2024-06-06',
        total: 350000,
        status: 'Pending',
      },
      {
        id: 5,
        invoice: 'INV-1005',
        customer: 'John',
        date: '2024-06-07',
        total: 150000,
        status: 'Completed',
      },
      {
        id: 6,
        invoice: 'INV-1006',
        customer: 'Agus',
        date: '2024-06-08',
        total: 250000,
        status: 'Completed',
      },
      {
        id: 7,
        invoice: 'INV-1007',
        customer: 'Rina',
        date: '2024-06-09',
        total: 500000,
        status: 'Cancelled',
      },
      {
        id: 8,
        invoice: 'INV-1008',
        customer: 'Gilang',
        date: '2024-06-10',
        total: 850000,
        status: 'Completed',
      },
      {
        id: 9,
        invoice: 'INV-1009',
        customer: 'Dewi',
        date: '2024-06-11',
        total: 400000,
        status: 'Pending',
      },
      {
        id: 10,
        invoice: 'INV-1010',
        customer: 'Nina',
        date: '2024-06-12',
        total: 300000,
        status: 'Completed',
      },
      {
        id: 11,
        invoice: 'INV-1011',
        customer: 'Reza',
        date: '2024-06-13',
        total: 200000,
        status: 'Cancelled',
      },
    ]
    isLoading.value = false
  }, 1000)
})

const columns = [
  { key: 'invoice', label: 'Invoice', sortable: true },
  { key: 'customer', label: 'Customer', sortable: true },
  { key: 'date', label: 'Tanggal', sortable: true },
  { key: 'total', label: 'Total', sortable: true },
  { key: 'status', label: 'Status' },
]
</script>
