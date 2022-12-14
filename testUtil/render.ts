import {
  render as testingLibraryRender,
  RenderOptions,
} from '@testing-library/react-native'
import { ReactElement } from 'react'

import { DefaultWrapper } from './DefaultWrapper'

export const render = (Component: ReactElement, options?: RenderOptions) =>
  testingLibraryRender(Component, { wrapper: DefaultWrapper, ...options })
