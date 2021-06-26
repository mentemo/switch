import { useState } from 'react'
import { api } from './api'

export const useTrigger = (url: string) => {
  const [loading, setLoading] = useState(false)

  const trigger = async () => {
    setLoading(true)

    try {
      const result = await api.post(url)

      return result
    } catch (e) {
      return e
    } finally {
      setLoading(false)
    }
  }

  return { trigger, loading }
}
