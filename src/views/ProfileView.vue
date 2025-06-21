<template>
  <section class="min-h-screen bg-white pt-36 pb-20">
    <div class="mx-auto max-w-5xl px-4 md:px-8">
      <h1 class="text-primary mb-8 text-3xl font-bold" data-aos="fade-up">Profil Saya</h1>
      <div v-if="!isLoggedIn">
        <AlertCard
          title="Anda Belum Login"
          message="Silakan login atau daftar akun terlebih dahulu untuk mengakses data profil Anda."
        />
      </div>
      <div
        v-else
        class="grid grid-cols-1 gap-8 md:grid-cols-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="space-y-4">
          <div class="font-semibold text-gray-700">Menu Akun</div>
          <div class="space-y-2">
            <router-link to="/profile" class="hover:text-primary block">Data Diri</router-link>
            <router-link to="/orders" class="hover:text-primary block">Riwayat Pesanan</router-link>
            <router-link to="/wishlist" class="hover:text-primary block">Wishlist</router-link>
            <router-link to="/change-password" class="hover:text-primary block"
              >Ubah Password</router-link
            >
            <button @click="logout" class="block text-left text-red-500 hover:text-red-600">
              Logout
            </button>
          </div>
        </div>

        <div class="space-y-6 md:col-span-3">
          <div>
            <label class="mb-1 block font-medium">Nama Lengkap</label>
            <input v-model="profile.name" type="text" class="w-full rounded border px-4 py-2" />
          </div>
          <div>
            <label class="mb-1 block font-medium">Email</label>
            <input v-model="profile.email" type="email" class="w-full rounded border px-4 py-2" />
          </div>
          <div>
            <label class="mb-1 block font-medium">Alamat</label>
            <textarea
              v-model="profile.address"
              class="w-full rounded border px-4 py-2"
              rows="3"
            ></textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="mb-1 block font-medium">Kota</label>
              <input v-model="profile.city" type="text" class="w-full rounded border px-4 py-2" />
            </div>
            <div>
              <label class="mb-1 block font-medium">Kode Pos</label>
              <input v-model="profile.zip" type="text" class="w-full rounded border px-4 py-2" />
            </div>
          </div>
          <div>
            <label class="mb-1 block font-medium">No. Telepon</label>
            <input v-model="profile.phone" type="text" class="w-full rounded border px-4 py-2" />
          </div>

          <button
            @click="saveProfile"
            class="bg-primary rounded-lg px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Simpan Data
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AlertCard from '@/components/common/AlertCard.vue'

const dummyData = {
  name: 'Gilang Arya',
  email: 'gilang@gmail.com',
  address: 'CondongCatur',
  city: 'yogyakarta',
  zip: '50123',
  phone: '081216190556',
}

const profile = ref({
  name: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  phone: '',
})

const isLoggedIn = ref(false)

onMounted(() => {
  const loginStatus = localStorage.getItem('isLoggedIn')
  isLoggedIn.value = loginStatus === 'true'

  if (isLoggedIn.value) {
    const saved = localStorage.getItem('user-profile')
    if (saved) {
      profile.value = JSON.parse(saved)
    } else {
      profile.value = dummyData
    }
  }
})

const saveProfile = () => {
  localStorage.setItem('user-profile', JSON.stringify(profile.value))
  alert('Data profil berhasil disimpan.')
}

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('user-profile')
  window.location.href = '/login'
}
</script>
