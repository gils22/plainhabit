<template>
  <section
    class="min-h-screen bg-gradient-to-b from-[#E0F2FF] via-white to-white px-4 pt-36 pb-24 md:px-8"
  >
    <div class="mx-auto w-full max-w-5xl space-y-16">
      <div data-aos="fade-up">
        <ContactSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <PetaLeaflet />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactSection from '@/components/contact/ContactSection.vue'
import PetaLeaflet from '@/components/contact/PetaLeaflet.vue'
</script>
