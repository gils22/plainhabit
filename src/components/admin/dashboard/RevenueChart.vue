<template>
  <div class="rounded-lg bg-white p-6 shadow">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-xl font-semibold text-gray-800">Revenue Analytics</h3>
      <div class="relative">
        <select class="rounded border px-3 py-1 text-sm text-gray-600">
          <option>Tahun</option>
        </select>
      </div>
    </div>

    <apexchart type="area" height="320" :options="chartOptions" :series="series" />
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { ref } from 'vue'

const series = ref([
  {
    name: 'Revenue',
    data: [
      300000, 400000, 800000, 1200000, 1500000, 1200000, 1700000, 2000000, 1800000, 2200000,
      2600000, 3000000,
    ],
  },
  {
    name: 'Expenses',
    data: [
      200000, 300000, 500000, 900000, 1100000, 1000000, 1300000, 1500000, 1400000, 1800000, 2000000,
      2200000,
    ],
  },
])

const chartOptions = ref({
  chart: {
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ],
  },
  colors: ['#38bdf8', '#a78bfa'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.05,
      stops: [0, 90, 100],
    },
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    labels: { colors: '#374151' },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return 'Rp ' + val.toLocaleString('id-ID')
      },
      style: { colors: '#64748b' },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return 'Rp ' + val.toLocaleString('id-ID')
      },
    },
  },
  grid: {
    borderColor: '#e5e7eb',
  },
})
</script>

<script>
export default {
  components: {
    apexchart: VueApexCharts,
  },
}
</script>
