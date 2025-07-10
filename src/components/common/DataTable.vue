<template>
  <div class="relative rounded-lg bg-white shadow">
    <!-- Top Control -->
    <div class="flex flex-wrap items-center justify-between gap-4 p-4">
      <div class="flex gap-2">
        <slot name="filters" />
      </div>

      <div class="flex gap-2">
        <div class="relative">
          <input
            v-model="search"
            type="text"
            :placeholder="searchPlaceholder"
            class="ring-primary w-72 rounded border px-4 py-2 pl-10 focus:ring-2"
          />
          <SearchIcon class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>

        <div class="relative">
          <button class="rounded border px-4 py-2 text-sm font-medium">Export</button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="flex items-center justify-center p-10">
      <LoadingSpinner />
    </div>

    <!-- Table -->
    <table v-else class="w-full text-left text-sm text-gray-700">
      <thead class="bg-gray-100 text-gray-600">
        <tr>
          <th class="p-4">
            <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
          </th>
          <th
            v-for="col in columns"
            :key="col.key"
            @click="sort(col.key)"
            class="cursor-pointer p-4 select-none"
          >
            {{ col.label }}
            <span v-if="sortBy === col.key">
              <ChevronUpIcon v-if="sortDesc" class="ml-1 inline h-3 w-3" />
              <ChevronDownIcon v-else class="ml-1 inline h-3 w-3" />
            </span>
          </th>
          <th class="p-4 text-center">Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in paginatedData" :key="row.id" class="border-b transition hover:bg-gray-50">
          <td class="p-4">
            <input type="checkbox" v-model="selected" :value="row.id" />
          </td>

          <td v-for="col in columns" :key="col.key" class="p-4">
            <slot :name="`cell-${col.key}`" :row="row">
              {{ row[col.key] }}
            </slot>
          </td>

          <td class="p-4 text-center">
            <slot name="actions" :row="row" />
          </td>
        </tr>

        <tr v-if="paginatedData.length === 0">
          <td :colspan="columns.length + 2" class="p-4 text-center text-gray-400">
            Data tidak ditemukan.
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="flex items-center justify-between border-t p-4 text-sm">
      <div>Menampilkan {{ startItem }} - {{ endItem }} dari {{ filteredData.length }} data</div>
      <div class="flex items-center gap-2">
        <button class="rounded border p-1" :disabled="currentPage === 1" @click="currentPage--">
          <ChevronLeftIcon class="h-4 w-4" />
        </button>
        <span>Page {{ currentPage }} / {{ totalPages }}</span>
        <button
          class="rounded border p-1"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          <ChevronRightIcon class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from 'lucide-vue-next'

const props = defineProps({
  data: Array,
  columns: Array,
  searchPlaceholder: { type: String, default: 'Search...' },
  searchField: { type: String, default: '' },
  isLoading: { type: Boolean, default: false },
})

const search = ref('')
const sortBy = ref('')
const sortDesc = ref(false)
const currentPage = ref(1)
const itemsPerPage = 10

const selected = ref([])
const selectAll = ref(false)

watch([props.data, selected], () => {
  selectAll.value = selected.value.length === props.data.length
})

function toggleSelectAll() {
  if (selectAll.value) {
    selected.value = props.data.map((row) => row.id)
  } else {
    selected.value = []
  }
}

function sort(key) {
  if (sortBy.value === key) {
    sortDesc.value = !sortDesc.value
  } else {
    sortBy.value = key
    sortDesc.value = false
  }
}

const filteredData = computed(() => {
  let data = props.data

  if (search.value) {
    const keyword = search.value.toLowerCase()

    if (props.searchField) {
      data = data.filter((row) => String(row[props.searchField]).toLowerCase().includes(keyword))
    } else {
      data = data.filter((row) =>
        Object.values(row).some((val) => String(val).toLowerCase().includes(keyword)),
      )
    }
  }

  if (sortBy.value) {
    data = data.slice().sort((a, b) => {
      const valA = a[sortBy.value]
      const valB = b[sortBy.value]
      if (valA === valB) return 0
      return (valA > valB ? 1 : -1) * (sortDesc.value ? -1 : 1)
    })
  }

  return data
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage))
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredData.value.slice(start, start + itemsPerPage)
})

const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() =>
  Math.min(currentPage.value * itemsPerPage, filteredData.value.length),
)
</script>
