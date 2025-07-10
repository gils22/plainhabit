<template>
  <div>
    <Sidebar :is-collapsed="isCollapsed" @toggleCollapse="toggleCollapse" />
    <Topbar :is-collapsed="isCollapsed" />
    <div
      :class="isCollapsed ? 'ml-20' : 'ml-64'"
      class="min-h-screen bg-gray-50 pt-[80px] transition-[margin] duration-300"
    >
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './layout/Sidebar.vue'
import Topbar from './layout/TopBar.vue'

const isCollapsed = ref(false)
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>
