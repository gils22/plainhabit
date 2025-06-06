<template>
  <div>
    <Header />
    <div class="min-h-screen pt-20">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
