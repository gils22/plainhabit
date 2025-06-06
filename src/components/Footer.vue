<template>
  <footer class="bg-[#FF9C06] text-white">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-3">
      <div class="flex flex-col items-center text-center md:items-start md:text-left">
        <img
          src="/images/logo.png"
          alt="Cuanlyze Logo"
          class="mb-3 h-14 w-14 rounded-full shadow"
        />
        <h3 class="text-xl font-bold">Cuanlyze</h3>
        <p class="mt-2 text-sm">
          Empowering UMKM through smart financial insights and AI promotion tools.
        </p>
      </div>
      <div class="flex flex-col items-center text-center md:items-start md:text-left">
        <h4 class="mb-2 text-lg font-semibold">Quick Links</h4>
        <ul class="space-y-2 text-sm">
          <li><router-link to="/" class="hover:underline">Beranda</router-link></li>
          <li>
            <router-link to="/cek-kesehatan" class="hover:underline">Cek Kesehatan</router-link>
          </li>
          <li>
            <router-link to="/rekomendasi-promosi" class="hover:underline"
              >Rekomendasi Promosi</router-link
            >
          </li>
          <li><router-link to="/faq" class="hover:underline">FAQ</router-link></li>
        </ul>
      </div>
      <div class="flex flex-col items-center text-center md:items-start md:text-left">
        <h4 class="mb-2 text-lg font-semibold">Hubungi Kami</h4>
        <p class="flex items-center gap-2 text-sm">
          <i class="fas fa-envelope"></i>
          info@cuanlyze.com
        </p>
        <p class="mb-4 flex items-center gap-2 text-sm">
          <i class="fas fa-phone-alt"></i>
          (123) 456-7890
        </p>
        <div class="mt-2 flex space-x-4">
          <a href="#" class="transition hover:text-gray-100">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="transition hover:text-gray-100">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="transition hover:text-gray-100">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="transition hover:text-gray-100">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/30 px-4 py-4 text-center text-sm">
      © 2025 Cuanlyze. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
