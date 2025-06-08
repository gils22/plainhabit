import { supabase } from '@/lib/supabase'

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    throw error
  }

  if (data.user?.email) {
    localStorage.setItem('email', data.user.email)
  }

  return data
}
