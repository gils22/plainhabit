import axios from 'axios'

export interface ProductInput {
  namaProduk: string
  totalPendapatan: number
  profit: number
}

export interface HealthResult {
  cluster: number
  label: string
  saran: string
}

export async function checkProductHealth(input: ProductInput): Promise<HealthResult> {
  try {
    const res = await axios.post(
      'https://cuan-analyze-be.gilangaryatama.workers.dev/cuanalyze/check-product-health',
      {
        totalPendapatan: input.totalPendapatan,
        profit: input.profit,
        namaProduk: input.namaProduk,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    return res.data
  } catch (error) {
    console.error('Error in checkProductHealth API:', error)
    throw new Error('Gagal memanggil API pengecekan kesehatan produk.')
  }
}
