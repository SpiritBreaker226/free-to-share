import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { CarItem } from './Components'

export default function App() {
  return (
    <View style={styles.container}>
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
      <StatusBar style="auto" />
    </View>
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
