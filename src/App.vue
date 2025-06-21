<template>
  <div>
    <Header />
    <div
      v-if="loadingStore.isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md"
    >
      <LoadingSpinner />
    </div>

    <div class="min-h-screen">
      <router-view />
    </div>

    <FloatingNav />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import FloatingNav from '@/components/layout/FloatingNav.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { useLoadingStore } from '@/stores/loading'

const loadingStore = useLoadingStore()
</script>
