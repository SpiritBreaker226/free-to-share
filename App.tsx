import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { AppBody } from './AppBody'
import { Search } from './Components'
import { AppProvider } from './contexts'
import { theme } from './theme'

export const App = () => (
  <View style={styles.container}>
    <AppProvider>
      <PaperProvider theme={theme}>
        <Search />

        <AppBody />
      </PaperProvider>
    </AppProvider>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 16,
    marginRight: 16,
  },
})

export default App
