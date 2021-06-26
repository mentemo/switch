import useSWR from 'swr'
import { PlugDeviceStatus } from './types'
import { useTrigger } from './useTrigger'

export const usePlug = (deviceId: string) => {
  const { data, mutate } = useSWR<PlugDeviceStatus>(
    `/devices/${deviceId}/status`
  )
  const { trigger, loading } = useTrigger(`/devices/${deviceId}/commands`)

  const turnOnOrOff = async (command: 'turnOn' | 'turnOff') => {
    const result = await trigger({ command })
    await mutate()

    return result
  }

  return {
    status: data,
    loading: loading || typeof data === 'undefined',
    turnOnOrOff,
    reload: mutate,
  }
}
