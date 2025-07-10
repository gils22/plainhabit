<template>
  <div class="px-6">
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Settings</h1>

    <div class="flex justify-center">
      <form
        @submit.prevent="saveSettings"
        class="w-full max-w-2xl space-y-5 rounded-lg bg-white p-6 shadow"
      >
        <!-- Logo Upload -->
        <div class="flex flex-col items-center gap-4">
          <div class="relative">
            <img
              :src="logoPreview || '/images/logo.png'"
              alt="Logo"
              class="h-32 w-32 rounded-full border object-cover shadow"
            />
            <label
              for="logo-upload"
              class="bg-primary hover:bg-primary-hover absolute right-0 bottom-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white shadow"
            >
              <UploadIcon class="h-4 w-4" />
            </label>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleFileUpload"
            />
          </div>

          <div class="text-sm text-gray-500">Klik icon untuk upload logo baru</div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Nama Toko</label>
          <input v-model="form.name" type="text" required class="w-full rounded border px-4 py-2" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            v-model="form.description"
            rows="3"
            class="w-full rounded border px-4 py-2"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">No. Telepon</label>
          <input v-model="form.phone" type="text" class="w-full rounded border px-4 py-2" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Alamat</label>
          <textarea
            v-model="form.address"
            rows="2"
            class="w-full rounded border px-4 py-2"
          ></textarea>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-primary hover:bg-primary-hover rounded px-4 py-2 text-white"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UploadIcon } from 'lucide-vue-next'

const form = ref({
  name: '',
  description: '',
  logo: '',
  phone: '',
  instagram: '',
  address: '',
})

const logoPreview = ref<string | null>(null)

onMounted(() => {
  setTimeout(() => {
    form.value = {
      name: 'Plain Habit',
      description: 'Elegance in Simplicity, Cultivate the Habit.',
      logo: '/images/logo.png',
      phone: '+6281216190556',
      instagram: '@plainhabit',
      address: 'Yogyakarta',
    }
    logoPreview.value = form.value.logo
  }, 800)
})

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      logoPreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

function saveSettings() {
  alert('Data settings berhasil disimpan!')
}
</script>
