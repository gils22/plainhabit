import { supabase } from '@/lib/supabase'
import { getRiwayat, deleteRiwayat } from '@/api/history'

export async function fetchUser() {
  const { data, error } = await supabase.auth.getUser()
  if (error || !data.user) throw new Error('Gagal mendapatkan data user')
  return data.user
}

export async function fetchRiwayatByUser(userId: string) {
  const res = await getRiwayat(userId)
  if (!res.success) throw new Error('Gagal mengambil riwayat')
  return res.data
}

export async function deleteRiwayatById(id: number) {
  const res = await deleteRiwayat(id)
  if (!res.success) throw new Error('Gagal menghapus riwayat')
  return true
}
