<template>
  <div class="flex h-full flex-col justify-between rounded-lg bg-white p-6 shadow hover:shadow-md">
    <div class="flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-full" :class="bgColor">
        <component :is="icon" class="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 class="text-base font-medium text-gray-700">{{ title }}</h3>
        <p class="text-2xl font-semibold text-gray-900">{{ value }}</p>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <a href="#" class="flex items-center text-sm font-medium text-blue-600 hover:underline">
        View All <span class="ml-1">➔</span>
      </a>
      <div
        class="flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600"
      >
        📈 {{ growth }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: String,
  growth: String,
  icon: [Object, Function],
  bgColor: String,
})
</script>
