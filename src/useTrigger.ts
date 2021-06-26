import { useState } from 'react'
import { api } from './api'

export const useTrigger = (url: string) => {
  const [loading, setLoading] = useState(false)

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const trigger = async (body?: Record<string, any>) => {
    setLoading(true)

    try {
      const result = await api.post(url, body)

      return result
    } catch (e) {
      return e
    } finally {
      setLoading(false)
    }
  }

  return { trigger, loading }
}
