<template>
  <div
    v-if="message"
    :class="[
      'rounded p-3 text-sm text-white shadow',
      type === 'success' ? 'bg-green-500' : 'bg-red-500',
    ]"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
  type: 'success' | 'error'
}>()
</script>
