<template>
  <div class="px-6">
    <h1 class="mb-8 text-3xl font-bold text-gray-800">Dashboard</h1>

    <!-- Summary Stats -->
    <div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      <StatsCard
        title="Transactions"
        value="5 234"
        growth="10.0%"
        :icon="Send"
        bgColor="bg-yellow-400"
      />
      <StatsCard
        title="Order Today"
        value="5 234"
        growth="10.0%"
        :icon="User"
        bgColor="bg-green-400"
      />
      <StatsCard title="Income" value="5 234" growth="10.0%" :icon="Wallet" bgColor="bg-blue-400" />
    </div>

    <!-- Revenue Chart -->
    <div class="mb-10 rounded-lg bg-white p-6 shadow">
      <RevenueChart />
    </div>

    <!-- Recent Orders -->
    <div class="rounded-lg bg-white p-6 shadow">
      <h2 class="mb-4 text-2xl font-semibold text-gray-800">Recent Orders</h2>
      <RecentOrders />
    </div>
  </div>
</template>

<script setup>
import StatsCard from '@/components/admin/dashboard/StatsCard.vue'
import RevenueChart from '@/components/admin/dashboard/RevenueChart.vue'
import RecentOrders from '@/components/admin/dashboard/RecentOrders.vue'
import { Send, User, Wallet } from 'lucide-vue-next'
</script>
