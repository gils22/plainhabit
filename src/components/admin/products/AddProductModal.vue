<template>
  <div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div class="w-full max-w-md rounded bg-white p-6">
      <h2 class="mb-4 text-xl font-bold">Tambah Product</h2>

      <div class="space-y-4">
        <div>
          <label>Nama</label>
          <input v-model="form.name" type="text" class="w-full rounded border px-3 py-2" />
        </div>

        <div>
          <label>Image URL</label>
          <input v-model="form.image" type="text" class="w-full rounded border px-3 py-2" />
        </div>

        <div>
          <label>Status</label>
          <select v-model="form.status" class="w-full rounded border px-3 py-2">
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      <div class="mt-6 flex justify-end space-x-2">
        <button @click="$emit('close')" class="rounded border px-4 py-2">Cancel</button>
        <button
          @click="submit"
          class="bg-primary hover:bg-primary-hover rounded px-4 py-2 text-white transition"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['close', 'add'])

const form = reactive({
  name: '',
  image: '',
  status: 'Available',
})

function submit() {
  if (!form.name.trim()) return alert('Nama wajib diisi')
  emit('add', { ...form })
  emit('close')
}
</script>
