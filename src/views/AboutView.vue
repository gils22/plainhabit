<template>
  <div
    class="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#E0F2FF] via-white to-white"
  >
    <div class="absolute bottom-32 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      <span
        v-for="(_, index) in 4"
        :key="index"
        class="h-2 w-2 rounded-full transition-all duration-300"
        :class="current === index ? 'bg-primary scale-125' : 'bg-gray-300'"
      />
    </div>
    <div
      ref="scrollContainer"
      class="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      @scroll="onScroll"
    >
      <section class="flex h-full w-full shrink-0 snap-start items-center justify-center">
        <AboutSection />
      </section>
      <section class="flex h-full w-full shrink-0 snap-start items-center justify-center">
        <WhyChooseUs />
      </section>
      <section class="flex h-full w-full shrink-0 snap-start items-center justify-center">
        <SizeGuide />
      </section>
      <section class="flex h-full w-full shrink-0 snap-start items-center justify-center">
        <FaqSection />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AboutSection from '@/components/about/AboutSection.vue'
import WhyChooseUs from '@/components/about/WhyChooseUs.vue'
import SizeGuide from '@/components/about/SizeGuide.vue'
import FaqSection from '@/components/about/FaqSection.vue'

const scrollContainer = ref<HTMLDivElement | null>(null)
const current = ref(0)

const scrollToIndex = (index: number) => {
  if (!scrollContainer.value) return
  const max = 2
  const clamped = Math.max(0, Math.min(index, max))
  scrollContainer.value.scrollTo({
    left: clamped * window.innerWidth,
    behavior: 'smooth',
  })
}

const onScroll = () => {
  if (!scrollContainer.value) return
  const scrollLeft = scrollContainer.value.scrollLeft
  const width = scrollContainer.value.clientWidth
  current.value = Math.round(scrollLeft / width)
  resetAutoScroll()
}

let autoScrollInterval: any = null

const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    if (current.value < 2) {
      scrollToIndex(current.value + 1)
    } else {
      clearInterval(autoScrollInterval)
    }
  }, 5000)
}

const resetAutoScroll = () => {
  clearInterval(autoScrollInterval)
  startAutoScroll()
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  clearInterval(autoScrollInterval)
})
</script>
