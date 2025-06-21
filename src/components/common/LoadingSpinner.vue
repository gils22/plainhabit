<template>
  <div class="flex flex-col items-center justify-center">
    <div class="relative h-16 w-16">
      <div class="absolute inset-0 animate-spin">
        <div
          v-for="n in 8"
          :key="n"
          class="bg-primary absolute top-1/2 left-1/2 h-2 w-2 rounded-full"
          :style="getDotStyle(n)"
        ></div>
      </div>
    </div>
    <p class="text-primary mt-4 font-semibold">Loading...</p>
  </div>
</template>

<script setup lang="ts">
const getDotStyle = (n: number) => {
  const angle = (360 / 8) * (n - 1)
  const radius = 28
  const rad = (angle * Math.PI) / 180
  const x = Math.cos(rad) * radius
  const y = Math.sin(rad) * radius
  const opacity = 1 - (n - 1) * 0.1

  return {
    transform: `translate(${x}px, ${y}px)`,
    opacity: opacity,
  }
}
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 0.8s linear infinite;
}
</style>
