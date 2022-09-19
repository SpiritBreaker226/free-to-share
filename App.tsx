import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { AppBody } from './AppBody'
import { Search } from './Components'
import { AppProvider } from './contexts'
import { theme } from './theme'

export const App = () => (
  <AppProvider>
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Search />

        <AppBody />
      </View>
    </PaperProvider>
  </AppProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '16px',
  },
})

export default App
