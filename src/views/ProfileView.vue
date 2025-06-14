<template>
  <div class="min-h-screen bg-blue-50 px-4 py-12 pt-24">
    <div class="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h2 class="text-primary mb-4 text-center text-2xl font-bold">User Profile</h2>

      <div class="mb-6 flex justify-center">
        <div
          class="bg-primary flex h-20 w-20 items-center justify-center rounded-full text-3xl font-semibold text-white"
        >
          {{ initials }}
        </div>
      </div>

      <div class="space-y-4 text-sm">
        <div class="flex justify-between border-b pb-2">
          <span class="font-medium text-gray-600">Username:</span>
          <span class="text-gray-800">{{ profile.username }}</span>
        </div>
        <div class="flex justify-between border-b pb-2">
          <span class="font-medium text-gray-600">Email:</span>
          <span class="text-gray-800">{{ profile.email }}</span>
        </div>
      </div>

      <div class="mt-6 space-y-3">
        <button
          @click="editProfile"
          class="bg-primary w-full rounded px-4 py-2 text-white hover:bg-blue-700"
        >
          Edit Profile
        </button>
        <button
          @click="logout"
          class="w-full rounded border border-red-500 px-4 py-2 text-red-500 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const profile = ref({
  username: 'Gilang Arya',
  email: 'gilang@gmail.com',
})

const initials = computed(() => {
  const name = profile.value.username
  return name ? name[0].toUpperCase() : '?'
})

function editProfile() {
  alert('Edit profile not implemented yet.')
}

function logout() {
  alert('Logout successful')
}
</script>
