<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-4 pb-32 text-center">
    <h1
      class="mb-2 text-5xl font-bold text-red-500 md:text-6xl"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      404
    </h1>
    <p
      class="mb-3 text-lg font-semibold text-gray-700 md:text-xl"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Halaman tidak ditemukan
    </p>
    <p class="mb-6 text-sm text-gray-600 md:text-base" data-aos="fade-up" data-aos-delay="300">
      URL belum tersedia di <span class="text-primary font-semibold">Plain Habit</span>.
    </p>

    <router-link
      to="/"
      class="bg-primary inline-block rounded px-6 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      Kembali ke Beranda
    </router-link>
  </div>
</template>
