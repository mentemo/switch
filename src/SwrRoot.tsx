import React, { VFC, ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { api } from './api'

type Props = {
  readonly children: ReactNode
}

export const SwrRoot: VFC<Props> = ({ children }) => {
  return <SWRConfig value={{ fetcher: api.get }}>{children}</SWRConfig>
}
