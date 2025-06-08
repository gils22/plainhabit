<template>
  <div class="flex min-h-screen items-center justify-center px-4 pb-32">
    <div class="text-center">
      <h1 class="mb-2 text-4xl font-bold text-red-500">404</h1>
      <p class="mb-4 text-lg font-semibold text-gray-700">Halaman tidak ditemukan</p>
      <p class="mb-6 text-sm text-gray-600">URL yang kamu akses tidak tersedia di Cuanlyze.</p>
      <router-link
        to="/"
        class="bg-primary inline-block rounded px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
      >
        Kembali ke Beranda
      </router-link>
    </div>
  </div>
</template>
