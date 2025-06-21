<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionAbout from '@/components/sections/SectionAbout.vue'
import SectionProduct from '@/components/sections/SectionProduct.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
import ScrollDots from '@/components/layout/ScrollDots.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

<template>
  <main class="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
    <div v-if="isLoading" class="flex h-screen items-center justify-center">
      <LoadingSpinner />
    </div>

    <div v-else>
      <section id="hero" class="h-screen snap-start">
        <SectionHero />
      </section>
      <section id="about" class="h-screen snap-start">
        <SectionAbout />
      </section>
      <section id="product" class="h-screen snap-start">
        <SectionProduct />
      </section>
      <section id="contact" class="h-screen snap-start">
        <SectionContact />
      </section>

      <ScrollDots />
    </div>
  </main>
</template>
