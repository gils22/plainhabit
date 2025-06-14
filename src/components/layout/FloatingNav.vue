<template>
  <div class="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-24">
    <router-link
      v-for="(btn, index) in buttons"
      :key="btn.to"
      :to="btn.to"
      class="flex items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100 hover:shadow-lg"
      :class="index === 1 ? 'h-16 w-16 text-xl' : 'h-12 w-12 text-lg'"
    >
      <component
        :is="btn.icon"
        class="h-6 w-6 transition"
        :class="route.path === btn.to ? 'text-primary' : 'text-gray-800'"
        stroke="currentColor"
      />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Home, Search, User } from 'lucide-vue-next'

const route = useRoute()

const buttons = [
  { to: '/', icon: Home },
  { to: '/search', icon: Search },
  { to: '/profile', icon: User },
]
</script>
