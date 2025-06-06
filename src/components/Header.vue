<template>
  <header class="fixed top-0 right-0 left-0 z-50 bg-white shadow-sm">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <router-link to="/" class="text-primary text-2xl font-bold">Cuanlyze</router-link>
      <div class="relative flex items-center gap-4">
        <nav class="hidden space-x-6 text-sm font-medium text-gray-700 md:flex">
          <router-link to="/" class="hover:text-primary">Beranda</router-link>
          <router-link to="/cek-kesehatan" class="hover:text-primary">Cek Kesehatan</router-link>
          <router-link to="/rekomendasi-promosi" class="hover:text-primary"
            >Rekomendasi</router-link
          >
        </nav>
        <div class="relative hidden md:block" v-if="userEmail" ref="dropdownRef">
          <button @click="toggleDropdown" class="flex items-center gap-2 text-sm">
            <i class="fas fa-user text-gray-600"></i>
            <span>{{ username }}</span>
            <i class="fas fa-chevron-down text-xs text-gray-500"></i>
          </button>

          <transition name="fade">
            <div
              v-if="dropdownOpen"
              class="absolute right-0 z-50 mt-2 w-44 rounded border bg-white text-sm shadow"
            >
              <router-link to="/profile" class="block px-4 py-2 hover:bg-gray-100">
                <i class="fas fa-id-badge mr-2"></i> Profil
              </router-link>
              <button
                @click="logout"
                class="w-full border-t px-4 py-2 text-left text-red-500 hover:bg-gray-100"
              >
                <i class="fas fa-sign-out-alt mr-2"></i> Logout
              </button>
            </div>
          </transition>
        </div>
        <router-link
          to="/login"
          v-else
          class="hidden rounded bg-[#FF9C06] px-3 py-1 text-sm text-white hover:opacity-90 md:inline-block"
        >
          Login
        </router-link>

        <!-- Mobile -->
        <button @click="isOpen = !isOpen" class="text-gray-600 md:hidden">
          <i class="fas" :class="isOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="space-y-2 bg-white px-4 pb-4 text-sm font-medium text-gray-700 md:hidden"
    >
      <router-link to="/" class="block" @click="isOpen = false">Beranda</router-link>
      <router-link to="/cek-kesehatan" class="block" @click="isOpen = false"
        >Cek Kesehatan</router-link
      >
      <router-link to="/rekomendasi-promosi" class="block" @click="isOpen = false"
        >Rekomendasi</router-link
      >

      <div class="border-t pt-2" v-if="userEmail">
        <router-link to="/profile" class="block" @click="isOpen = false">
          <i class=""></i> Profil
        </router-link>
        <button @click="logout" class="block w-full text-left text-red-500">
          <i class=""></i> Logout
        </button>
      </div>

      <router-link
        v-else
        to="/login"
        class="text-primary block border-t pt-2"
        @click="isOpen = false"
      >
        Login
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const isOpen = ref(false)
const dropdownOpen = ref(false)
const userEmail = ref<string | null>(null)
const router = useRouter()
const dropdownRef = ref<HTMLElement | null>(null)

const username = computed(() => {
  return userEmail.value ? userEmail.value.split('@')[0] : ''
})

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  userEmail.value = data.user?.email || null

  if (data.user?.id) {
    localStorage.setItem('user_id', data.user.id)
  }

  document.addEventListener('click', handleClickOutside)
})

supabase.auth.onAuthStateChange((_event, session) => {
  userEmail.value = session?.user?.email || null

  if (session?.user?.id) {
    localStorage.setItem('user_id', session.user.id)
  } else {
    localStorage.removeItem('user_id')
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

const logout = async () => {
  await supabase.auth.signOut()
  localStorage.removeItem('email')
  localStorage.removeItem('user_id')
  userEmail.value = null
  dropdownOpen.value = false
  router.push('/login')
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
