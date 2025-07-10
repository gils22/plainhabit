<template>
  <div
    class="fixed top-0 left-0 z-50 flex h-screen flex-col bg-white shadow-md transition-all duration-300"
    :class="isCollapsed ? 'w-20' : 'w-64'"
  >
    <!-- Toggle Collapse -->
    <button
      @click="$emit('toggleCollapse')"
      class="absolute top-4 -right-3 z-50 rounded-full bg-white p-1 shadow-md transition"
    >
      <ChevronLeftIcon v-if="!isCollapsed" class="text-primary h-5 w-5" />
      <ChevronRightIcon v-else class="text-primary h-5 w-5" />
    </button>

    <!-- Logo -->
    <div class="ml-5 flex items-center py-6">
      <img :src="isCollapsed ? '/images/logo.png' : '/images/logo-blue.png'" class="h-10" />
    </div>

    <!-- Menu -->
    <div class="flex-1">
      <ul class="space-y-1">
        <li v-for="item in menu" :key="item.name" class="group relative">
          <router-link
            :to="item.path"
            class="mx-2 flex h-12 items-center rounded-lg transition hover:bg-blue-100"
            :class="[
              isCollapsed ? 'justify-center' : 'justify-start gap-3 px-4',
              isActive(item.path) ? 'text-primary bg-blue-200 font-semibold' : '',
            ]"
          >
            <component :is="item.icon" class="h-5 w-5" />
            <transition name="fade">
              <span v-if="!isCollapsed" class="text-sm whitespace-nowrap">{{ item.name }}</span>
            </transition>
          </router-link>

          <!-- Tooltip collapse -->
          <div
            v-if="isCollapsed"
            class="pointer-events-none absolute top-1/2 left-full ml-2 -translate-y-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>

    <!-- Bottom Menu -->
    <div class="space-y-1 pt-4 pb-6">
      <router-link
        to="/admin/settings"
        class="mx-2 flex h-12 items-center rounded-lg transition hover:bg-blue-100"
        :class="[
          isCollapsed ? 'justify-center' : 'justify-start gap-3 px-4',
          isActive('/admin/settings') ? 'text-primary bg-blue-200 font-semibold' : '',
        ]"
      >
        <SettingsIcon class="h-5 w-5" />
        <transition name="fade">
          <span v-if="!isCollapsed" class="text-sm">Settings</span>
        </transition>
      </router-link>

      <!-- Logout bisa diganti ke button nanti -->
      <router-link
        to="/"
        class="mx-2 flex h-12 items-center rounded-lg transition hover:bg-red-100"
        :class="isCollapsed ? 'justify-center' : 'justify-start gap-3 px-4'"
      >
        <LogOutIcon class="h-5 w-5 text-red-500" />
        <transition name="fade">
          <span v-if="!isCollapsed" class="text-sm text-red-500">Logout</span>
        </transition>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
  LogOutIcon,
  PackageIcon,
  UserIcon,
  LayoutDashboardIcon,
  FileTextIcon,
  ShoppingBagIcon,
  ArchiveIcon,
  FolderIcon,
} from 'lucide-vue-next'

import { useRoute } from 'vue-router'
const route = useRoute()

defineProps({ isCollapsed: Boolean })

const menu = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboardIcon },
  { name: 'Products', path: '/admin/products', icon: PackageIcon },
  { name: 'Orders', path: '/admin/orders', icon: ShoppingBagIcon },
  { name: 'Customer', path: '/admin/customer', icon: UserIcon },
  { name: 'Category', path: '/admin/category', icon: FolderIcon },
  { name: 'Catalog', path: '/admin/catalog', icon: ArchiveIcon },
  { name: 'Reports', path: '/admin/reports', icon: FileTextIcon },
]

function isActive(path) {
  return route.path.startsWith(path)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
