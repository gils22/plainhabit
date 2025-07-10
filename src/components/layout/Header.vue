<template>
  <header
    :class="[
      'fixed top-0 left-0 z-50 w-full py-6 transition-all duration-300',
      isScrolled
        ? 'bg-white/20 py-2 text-gray-900 shadow-sm backdrop-blur-md'
        : 'text-primary bg-transparent py-3',
    ]"
  >
    <div class="mx-auto flex h-full max-w-screen-xl items-center justify-between px-8 md:px-8">
      <div>
        <router-link to="/">
          <img src="/images/logo-blue.png" alt="Plain Habit Logo" class="h-10 md:h-10" />
        </router-link>
      </div>

      <nav class="mr-8 hidden gap-16 text-lg font-semibold tracking-wide md:flex">
        <router-link
          to="/"
          class="hover:text-primary"
          :class="{ 'text-primary underline underline-offset-8': isActive('/') }"
        >
          Home
        </router-link>
        <router-link
          to="/product"
          class="hover:text-primary"
          :class="{ 'text-primary underline underline-offset-8': isActive('/product') }"
        >
          Product
        </router-link>
        <router-link
          to="/about"
          class="hover:text-primary"
          :class="{ 'text-primary underline underline-offset-8': isActive('/about') }"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="hover:text-primary"
          :class="{ 'text-primary underline underline-offset-8': isActive('/contact') }"
        >
          Contact
        </router-link>
      </nav>

      <div class="text-primary flex items-center gap-6">
        <router-link to="/wishlist" class="relative hover:transition">
          <Heart class="h-6 w-6" />
          <span
            v-if="wishlistQty > 0"
            class="absolute -top-2 -right-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white"
          >
            {{ wishlistQty }}
          </span>
        </router-link>

        <router-link to="/cart" class="relative hover:transition">
          <ShoppingCart class="h-6 w-6" />
          <span
            v-if="totalQty > 0"
            class="absolute -top-2 -right-2 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white"
          >
            {{ totalQty }}
          </span>
        </router-link>
      </div>
    </div>

    <div
      class="mt-2 flex flex-wrap justify-center gap-12 px-4 text-sm font-semibold text-gray-700 md:hidden"
    >
      <router-link to="/" class="hover:text-primary">Home</router-link>
      <router-link to="/product" class="hover:text-primary">Product</router-link>
      <router-link to="/about" class="hover:text-primary">About</router-link>
      <router-link to="/contact" class="hover:text-primary">Contact</router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { ShoppingCart, Heart } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
import { storeToRefs } from 'pinia'

const route = useRoute()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

const { items: cartItems } = storeToRefs(cartStore)
const { items: wishlistItems } = storeToRefs(wishlistStore)

const totalQty = computed(() => cartItems.value.reduce((acc, item) => acc + item.qty, 0))
const wishlistQty = computed(() => wishlistItems.value.length)

const isActive = (path: string) => route.path === path
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
