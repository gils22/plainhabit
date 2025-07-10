<template>
  <div>
    <component v-if="isAdmin" :is="AdminLayout">
      <RouterView />
    </component>

    <div v-else>
      <Header />
      <div
        v-if="loadingStore.isLoading"
        class="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md"
      >
        <LoadingSpinner />
      </div>
      <div class="min-h-screen">
        <RouterView />
      </div>
      <FloatingNav />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AdminLayout from '@/components/admin/AdminLayout.vue'
import Header from '@/components/layout/Header.vue'
import FloatingNav from '@/components/layout/FloatingNav.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { useLoadingStore } from '@/stores/loading'

const route = useRoute()
const loadingStore = useLoadingStore()

const isAdmin = computed(() => route.path.startsWith('/admin'))
</script>
