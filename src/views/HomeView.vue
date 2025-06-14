<script setup>
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionAbout from '@/components/sections/SectionAbout.vue'
import SectionProduct from '@/components/sections/SectionProduct.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
import ScrollDots from '@/components/layout/ScrollDots.vue'
</script>

<template>
  <main class="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
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
  </main>
</template>
