<template>
  <div class="relative inline-block w-fit">
    <div v-if="showShirt" class="animate-bounce-from-cart absolute z-20" :style="shirtPosition">
      <Shirt class="h-6 w-6 text-white drop-shadow-lg" />
    </div>
    <button
      @click="handleClick"
      :disabled="props.disabled"
      class="bg-primary relative flex h-12 w-40 items-center justify-start overflow-hidden rounded-xl px-6 py-3 text-white shadow transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <div
        ref="cartRef"
        class="absolute left-4 transition-transform duration-700 ease-in-out"
        :class="{
          'translate-x-0': !animating,
          'translate-x-[140px]': animating,
        }"
      >
        <ShoppingCart class="h-5 w-5" />
      </div>

      <span
        v-if="showSuccess"
        class="fade-success absolute right-12 text-sm font-semibold text-white"
      >
        Berhasil!
      </span>

      <span class="invisible">Add to cart</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { ShoppingCart, Shirt } from 'lucide-vue-next'
import { Howl } from 'howler'

const props = defineProps<{
  disabled?: boolean
  onAdd?: () => void
}>()

const clickSound = new Howl({
  src: ['/sounds/click.mp3'],
  volume: 1,
})

const animating = ref(false)
const showShirt = ref(false)
const cartRef = ref<HTMLElement | null>(null)
const shirtPosition = ref({ top: '0px', left: '0px' })
const showSuccess = ref(false)

const handleClick = async () => {
  clickSound.play()

  if (typeof props.onAdd === 'function') props.onAdd()

  animating.value = true

  await nextTick()

  const cart = cartRef.value
  if (cart) {
    const rect = cart.getBoundingClientRect()
    const parentRect = cart.offsetParent?.getBoundingClientRect()
    shirtPosition.value = {
      left: `${rect.left - (parentRect?.left ?? 0)}px`,
      top: `${rect.top - (parentRect?.top ?? 0)}px`,
    }
  }

  showShirt.value = true

  setTimeout(() => {
    animating.value = false
    showShirt.value = false
    showSuccess.value = true

    setTimeout(() => {
      showSuccess.value = false
    }, 1000)
  }, 900)
}
</script>

<style scoped>
@keyframes bounceFromLeftToCart {
  0% {
    transform: translateX(0px) translateY(0) scale(1);
    opacity: 1;
  }
  40% {
    transform: translateX(60px) translateY(-40px) scale(1.3);
  }
  80% {
    transform: translateX(110px) translateY(10px) scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: translateX(140px) translateY(0) scale(0.5);
    opacity: 0;
  }
}

.animate-bounce-from-cart {
  animation: bounceFromLeftToCart 0.9s ease-in-out forwards;
  transition: opacity 0.3s ease-in-out;
  will-change: transform, opacity;
}

.fade-success {
  animation: fadeInOut 2s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(4px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-2px);
  }
}
</style>
