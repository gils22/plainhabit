import { checkProductHealth } from '@/api/productHealth'
import { saveProductResult } from '@/api/saveProductResult'
import type { FinalResult } from '@/api/saveProductResult'

type InitialCheckInput = Omit<FinalResult, 'cluster' | 'kesehatan' | 'saran' | 'user_id'>

export async function runCheck(payload: InitialCheckInput, userId: string): Promise<FinalResult> {
  const result = await checkProductHealth(payload)

  return {
    ...payload,
    user_id: userId,
    cluster: result.cluster,
    kesehatan: result.label,
    saran: result.saran,
  }
}

export async function saveResult(result: FinalResult): Promise<void> {
  await saveProductResult(result)
}
