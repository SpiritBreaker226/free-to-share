import { Provider as PaperProvider } from 'react-native-paper'

import { AppBody } from './AppBody'
import { Search } from './Components'
import { AppProvider } from './contexts'
import { theme } from './theme'

export const App = () => {
  return (
    <AppProvider>
      <PaperProvider theme={theme}>
        <Search />

        <AppBody />
      </PaperProvider>
    </AppProvider>
  )
}

export default App
