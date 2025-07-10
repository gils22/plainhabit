<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-gray-700">
      <thead class="bg-gray-100 text-gray-600">
        <tr>
          <th class="p-3 text-left">Order</th>
          <th class="p-3 text-left">Customer</th>
          <th class="p-3 text-left">Tanggal</th>
          <th class="p-3 text-left">Total</th>
          <th class="p-3 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in recentOrders" :key="order.id" class="border-b">
          <td class="text-primary p-3 font-medium">#{{ order.invoice }}</td>
          <td class="p-3">{{ order.customer }}</td>
          <td class="p-3">{{ order.date }}</td>
          <td class="p-3">Rp {{ order.total.toLocaleString('id-ID') }}</td>
          <td class="p-3">
            <span
              :class="[
                'rounded-full px-3 py-1 text-xs font-semibold',
                order.status === 'Completed'
                  ? 'bg-green-100 text-green-600'
                  : order.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-red-100 text-red-600',
              ]"
            >
              {{ order.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const recentOrders = [
  {
    id: 1,
    invoice: 'INV-1001',
    customer: 'Budi',
    date: '2025-06-01',
    total: 450000,
    status: 'Completed',
  },
  {
    id: 2,
    invoice: 'INV-1002',
    customer: 'Siti',
    date: '2025-06-03',
    total: 125000,
    status: 'Pending',
  },
  {
    id: 3,
    invoice: 'INV-1003',
    customer: 'Andi',
    date: '2025-06-05',
    total: 750000,
    status: 'Cancelled',
  },
  {
    id: 4,
    invoice: 'INV-1004',
    customer: 'Lisa',
    date: '2025-06-06',
    total: 350000,
    status: 'Pending',
  },
  {
    id: 5,
    invoice: 'INV-1005',
    customer: 'John',
    date: '2025-06-07',
    total: 150000,
    status: 'Completed',
  },
]
</script>
