import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Dialog, Portal } from 'react-native-paper'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'
import { ColorPicker } from './ColorPicker'
import { MakeSearchbar } from './MakeSearchbar'
import { YearSlider } from './YearSlider'

export const Search: FC = () => {
  const { dispatch } = useApp()
  const [showFilterDialog, setShowFilterDialog] = useState(false)

  const hideFilters = () => setShowFilterDialog(false)

  const handleClearSearchValue = () => {
    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.CLEAR_SEARCH_VALUE },
    })
  }

  return (
    <View>
      <MakeSearchbar />

      <Button onPress={() => setShowFilterDialog(true)}>Search options</Button>

      <Portal>
        <Dialog visible={showFilterDialog} onDismiss={hideFilters}>
          <Dialog.Title>Fitlers</Dialog.Title>
          <Dialog.Content style={styles.searchFitlerContent}>
            <ColorPicker />

            <YearSlider />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleClearSearchValue}>Clear Search</Button>
            <Button onPress={hideFilters}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  searchFitlerContent: {
    height: 180,
  },
})
