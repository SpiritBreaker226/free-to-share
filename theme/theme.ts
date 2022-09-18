import { configureFonts, DefaultTheme } from 'react-native-paper'
import { fontConfig } from './fonts'

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: '#95c93d',
    accent: '#e8e6e3',
  },
}
