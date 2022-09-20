import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { AppBody } from './AppBody'
import { Search } from './Components'
import { AppProvider } from './contexts'
import CarRealmContext from './contexts/CarRealmContext'
import { theme } from './theme'

const { RealmProvider } = CarRealmContext

export const App = () => (
  <View style={styles.container}>
    <AppProvider>
      <RealmProvider>
        <PaperProvider theme={theme}>
          <Search />

          <AppBody />
        </PaperProvider>
      </RealmProvider>
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
