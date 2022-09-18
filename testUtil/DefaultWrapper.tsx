import React, { FC, ReactNode } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { theme } from '../theme'

export type RenderProps = {
  children: ReactNode
}

export const DefaultWrapper: FC<RenderProps> = ({ children }) => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
)
