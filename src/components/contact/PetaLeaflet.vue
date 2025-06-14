<template>
  <div class="w-full">
    <!-- Peta -->
    <div id="map" class="h-64 w-full rounded-xl shadow md:h-96" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import L from 'leaflet'

const latitude = -7.746433
const longitude = 110.401418

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
const mapLink = ref(
  isIOS
    ? `http://maps.apple.com/?q=${latitude},${longitude}`
    : `https://www.google.com/maps?q=${latitude},${longitude}`,
)

const customIcon = L.icon({
  iconUrl: '/images/logo.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
})

onMounted(() => {
  const map = L.map('map').setView([latitude, longitude], 15)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  }).addTo(map)

  L.marker([latitude, longitude], { icon: customIcon })
    .addTo(map)
    .bindPopup(
      `
      <div style="text-align: center">
    <b>Plain Habit Store</b><br>
    <a href="${mapLink.value}" target="_blank" style="color:#3b82f6; text-decoration: underline;">
      Buka di Maps
    </a>
  </div>
    `,
    )
    .openPopup()
})
</script>

<style scoped>
#map {
  z-index: 0;
}
</style>
