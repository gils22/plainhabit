<template>
  <section
    class="text-primary flex h-screen w-full items-center justify-center px-4"
    data-aos="fade-up"
  >
    <div class="text-center">
      <h2 class="mb-12 text-3xl font-bold md:text-4xl">Why Should Choose Us?</h2>

      <div class="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
        <div class="flex flex-col items-center gap-3">
          <Truck class="text-primary h-10 w-10" stroke="currentColor" />
          <h3 class="font-semibold">FREE AND FAST DELIVERY</h3>
          <p class="text-sm text-gray-600">Free shipping on all orders over 5 items</p>
        </div>
        <div class="flex flex-col items-center gap-3">
          <Headphones class="text-primary h-10 w-10" stroke="currentColor" />
          <h3 class="font-semibold">24/7 CUSTOMER SERVICE</h3>
          <p class="text-sm text-gray-600">Friendly 24/7 customer support</p>
        </div>
        <div class="flex flex-col items-center gap-3">
          <ShieldCheck class="text-primary h-10 w-10" stroke="currentColor" />
          <h3 class="font-semibold">MONEY BACK GUARANTEE</h3>
          <p class="text-sm text-gray-600">We return money within 30 days</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Truck, Headphones, ShieldCheck } from 'lucide-vue-next'
</script>
