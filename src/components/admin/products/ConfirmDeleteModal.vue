<template>
  <div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div class="w-full max-w-sm rounded bg-white p-6">
      <h2 class="mb-4 text-xl font-bold">Confirm Delete</h2>
      <p>
        Are you sure you want to delete <b>{{ product.name }}</b
        >?
      </p>

      <div class="mt-6 flex justify-end space-x-2">
        <button @click="$emit('close')" class="rounded border px-4 py-2">Cancel</button>
        <button
          @click="$emit('delete')"
          class="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
})
defineEmits(['close', 'delete'])
</script>
