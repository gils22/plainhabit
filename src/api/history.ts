import axios from 'axios'

export async function getRiwayat(userId: string) {
  const { data } = await axios.get(
    `https://cuan-analyze-be.gilangaryatama.workers.dev/cuanalyze/history?user_id=${userId}`,
  )
  return data
}

export async function deleteRiwayat(id: number) {
  const { data } = await axios.delete(
    `https://cuan-analyze-be.gilangaryatama.workers.dev/cuanalyze/history`,
    { data: { id } },
  )
  return data
}
