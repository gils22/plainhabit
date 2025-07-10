<template>
  <div
    class="fixed top-0 right-0 left-0 z-40 flex h-[80px] items-center bg-white shadow-sm transition-[padding] duration-300"
    :class="isCollapsed ? 'pr-6 pl-20' : 'pr-6 pl-64'"
  >
    <div class="ml-auto flex items-center gap-6">
      <!-- Search -->
      <div class="relative">
        <input
          type="text"
          placeholder="Search..."
          class="w-64 rounded border border-gray-300 px-10 py-2 transition outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
        />
        <div class="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
          <SearchIcon class="h-5 w-5" />
        </div>
      </div>

      <div class="relative">
        <BellIcon class="h-6 w-6 text-gray-600" />
        <div
          class="absolute top-0 right-0 h-2 w-2 rounded-full border-2 border-white bg-red-500"
        ></div>
      </div>

      <div class="flex items-center gap-2">
        <img src="/images/logo.png" alt="Plain Habit" class="h-8 w-8 rounded-full" />
        <span class="text-lg font-semibold text-gray-700">plainhabit</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SearchIcon, BellIcon } from 'lucide-vue-next'
defineProps({
  isCollapsed: Boolean,
})
</script>
