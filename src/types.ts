export type PlugDeviceStatus = {
  readonly deviceId: string
  readonly deviceType: 'Plug'
  readonly hubDeviceId: string
  readonly power: 'on' | 'off'
}
