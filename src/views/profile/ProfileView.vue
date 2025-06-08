<template>
  <div class="mx-auto max-w-3xl px-4 py-10">
    <h1 class="text-primary mb-6 text-center text-3xl font-bold">Profil Pengguna</h1>

    <div v-if="user" class="rounded border p-6 shadow">
      <div class="mb-6 space-y-2 text-gray-700">
        <div><strong>Email:</strong> {{ user.email }}</div>
        <div><strong>Username:</strong> {{ username }}</div>
        <div><strong>User ID:</strong> {{ user.id }}</div>
      </div>

      <!-- Filter dan Export -->
      <div class="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center space-x-2">
          <label class="text-sm font-medium text-gray-700">Filter Kategori:</label>
          <div class="relative">
            <select
              v-model="selectedKategori"
              class="appearance-none rounded border px-3 py-1 pr-6 text-sm shadow focus:outline-none"
            >
              <option value="">Semua</option>
              <option v-for="kategori in kategoriList" :key="kategori">{{ kategori }}</option>
            </select>
            <span
              class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-gray-500"
              >▼</span
            >
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            @click="exportToExcel"
            class="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
          >
            Export Excel
          </button>
          <button
            @click="exportToPDF"
            class="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
          >
            Export PDF
          </button>
        </div>
      </div>

      <!-- Riwayat Tabel -->
      <div class="mt-6">
        <h2 class="text-primary text-lg font-semibold">Riwayat Cek Kesehatan Produk</h2>

        <div v-if="filteredRiwayat.length" class="mt-4 overflow-auto">
          <table class="w-full border text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Produk</th>
                <th class="p-2 text-left">Kategori</th>
                <th class="p-2 text-left">Pendapatan</th>
                <th class="p-2 text-left">Profit</th>
                <th class="p-2 text-left">Kesehatan</th>
                <th class="p-2 text-left">Tanggal</th>
                <th class="p-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredRiwayat" :key="item.id" class="border-t">
                <td class="p-2">{{ item.nama_produk }}</td>
                <td class="p-2">{{ item.kategori_produk }}</td>
                <td class="p-2">Rp{{ format(item.total_pendapatan) }}</td>
                <td class="p-2">Rp{{ format(item.profit) }}</td>
                <td class="p-2">
                  <span :class="getClass(item.kesehatan)">{{ item.kesehatan }}</span>
                </td>
                <td class="p-2">{{ formatDate(item.tanggal_cek) }}</td>
                <td class="p-2">
                  <button
                    @click="hapusRiwayat(item.id)"
                    class="text-xs text-red-500 hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p v-else class="text-gray-500 italic">Belum ada riwayat cek kesehatan.</p>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">
      <p>Memuat data pengguna...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import * as XLSX from 'xlsx'
import FileSaver from 'file-saver'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { fetchUser, fetchRiwayatByUser, deleteRiwayatById } from './presenter'

interface RiwayatItem {
  id: number
  nama_produk: string
  kategori_produk: string
  total_pendapatan: number
  profit: number
  tanggal_cek: string
  kesehatan: string
  saran: string
}

const user = ref<any>(null)
const riwayat = ref<RiwayatItem[]>([])
const selectedKategori = ref('')

onMounted(async () => {
  try {
    user.value = await fetchUser()
    riwayat.value = await fetchRiwayatByUser(user.value.id)
  } catch (err) {
    console.error('Error:', err)
  }
})

async function hapusRiwayat(id: number) {
  if (!confirm('Yakin ingin menghapus riwayat ini?')) return
  try {
    await deleteRiwayatById(id)
    riwayat.value = riwayat.value.filter((r) => r.id !== id)
  } catch (err) {
    console.error('Gagal hapus riwayat:', err)
  }
}

const kategoriList = computed(() => [...new Set(riwayat.value.map((r) => r.kategori_produk))])
const filteredRiwayat = computed(() =>
  selectedKategori.value
    ? riwayat.value.filter((r) => r.kategori_produk === selectedKategori.value)
    : riwayat.value,
)

function exportToExcel() {
  const rows = filteredRiwayat.value.map((r) => ({
    Produk: r.nama_produk,
    Kategori: r.kategori_produk,
    Pendapatan: r.total_pendapatan,
    Profit: r.profit,
    Tanggal: formatDate(r.tanggal_cek),
    Kesehatan: r.kesehatan,
    Saran: r.saran,
  }))
  const worksheet = XLSX.utils.json_to_sheet(rows)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Riwayat')
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
  FileSaver.saveAs(blob, 'riwayat_cek_produk.xlsx')
}

function exportToPDF() {
  const doc = new jsPDF()
  const tableData = filteredRiwayat.value.map((r) => [
    r.nama_produk,
    r.kategori_produk,
    format(r.total_pendapatan),
    format(r.profit),
    r.kesehatan,
    formatDate(r.tanggal_cek),
  ])
  autoTable(doc, {
    head: [['Produk', 'Kategori', 'Pendapatan', 'Profit', 'Kesehatan', 'Tanggal']],
    body: tableData,
  })
  doc.save('riwayat_cek_produk.pdf')
}

const username = computed(() => user.value?.email?.split('@')[0] || '')

function format(num: number) {
  return num.toLocaleString('id-ID', {
    style: 'decimal',
    minimumFractionDigits: 0,
  })
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function getClass(status: string) {
  switch (status.toLowerCase()) {
    case 'sehat':
      return 'text-green-600 font-semibold'
    case 'waspada':
      return 'text-yellow-600 font-semibold'
    case 'tidak sehat':
      return 'text-red-600 font-semibold'
    default:
      return ''
  }
}
</script>
