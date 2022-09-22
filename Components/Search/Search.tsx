import React, { FC, useState } from 'react'
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Searchbar,
} from 'react-native-paper'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'

export const Search: FC = () => {
  const { dispatch } = useApp()
  const [searchText, setSearchText] = useState('')
  const [showFilterDialog, setShowFilterDialog] = useState(true)

  const hideFilters = () => setShowFilterDialog(false)

  const handleClearSearchValue = () => {
    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.CLEAR_SEARCH_VALUE },
    })
  }

  const handleTextChange = (searchText: string) => {
    setSearchText(searchText)

    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.MAKE, searchValue: searchText.trim() },
    })
  }

  return (
    <>
      <Searchbar
        placeholder="Search for make"
        onChangeText={handleTextChange}
        value={searchText}
      />
      <Button onPress={() => setShowFilterDialog(true)}>Filters</Button>
      <Portal>
        <Dialog visible={showFilterDialog} onDismiss={hideFilters}>
          <Dialog.Title>Select Fitlers</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Color</Paragraph>

            <Paragraph>Year</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleClearSearchValue}>Clear Search</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  )
}
