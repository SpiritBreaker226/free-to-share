import { Provider as PaperProvider } from 'react-native-paper'

import { AppBody } from './AppBody'
import { CarItem, Search } from './Components'
import { AppProvider } from './contexts'
import { theme } from './theme'

export const App = () => {
  return (
    <AppProvider>
      <PaperProvider theme={theme}>
        <Search />

        <CarItem
          car={{
            id: 1,
            make: 'Mitsubishi',
            model: 'Montero',
            color: 'Yellow',
            model_year: 2002,
            vin: 'SAJWJ0FF3F8321657',
            price: '$2814.46',
            availability: false,
          }}
        />

        <AppBody />
      </PaperProvider>
    </AppProvider>
  )
}

export default App
