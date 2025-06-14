<template>
  <div class="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 flex-col items-center gap-3">
    <button
      v-for="(section, index) in sections"
      :key="section.id"
      @click="scrollTo(section.id)"
      :aria-label="section.label"
      class="h-2.5 w-2.5 rounded-full transition-all duration-300"
      :class="{
        'bg-gray-400': activeSection !== index,
        'scale-125 bg-gray-800': activeSection === index,
      }"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'Tentang' },
  { id: 'product', label: 'Produk' },
  { id: 'contact', label: 'Kontak' },
]

const activeSection = ref(0)
const observer = ref<IntersectionObserver>()

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex((s) => s.id === entry.target.id)
          if (index !== -1) activeSection.value = index
        }
      })
    },
    {
      threshold: 0.6,
    },
  )

  sections.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer.value?.observe(el)
  })
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>
