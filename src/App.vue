<template>
  <div>
    <Header />
    <div class="min-h-screen">
      <router-view />
    </div>
    <FloatingNav />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import FloatingNav from '@/components/layout/FloatingNav.vue'
</script>
