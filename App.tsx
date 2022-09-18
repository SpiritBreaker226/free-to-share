import { StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { CarItem } from './Components'
import { AppProvider } from './contexts'
import { theme } from './theme'

export default function App() {
  return (
    <AppProvider>
      <PaperProvider theme={theme}>
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
      </PaperProvider>
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
