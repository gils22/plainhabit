<template>
  <div class="relative rounded-lg bg-white p-4 shadow transition hover:shadow-md">
    <div class="absolute top-2 right-2">
      <span :class="statusClass" class="rounded-full px-2 py-1 text-xs font-semibold">
        {{ product.status }}
      </span>
    </div>

    <img :src="product.image" :alt="product.name" class="mb-4 h-48 w-full object-contain" />

    <h2 class="mb-4 text-center font-semibold text-gray-700">{{ product.name }}</h2>

    <div class="flex justify-center space-x-4">
      <button class="text-blue-500 hover:text-blue-600">
        <EyeIcon class="h-5 w-5" />
      </button>
      <button class="text-yellow-500 hover:text-yellow-600">
        <PencilIcon class="h-5 w-5" />
      </button>
      <button class="text-red-500 hover:text-red-600">
        <TrashIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon, PencilIcon, TrashIcon } from 'lucide-vue-next'

const props = defineProps({
  product: Object,
})

const statusClass = computed(() => {
  return props.product.status === 'Available'
    ? 'bg-green-100 text-green-600'
    : 'bg-red-100 text-red-600'
})
</script>
