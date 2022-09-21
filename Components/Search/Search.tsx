import React, { FC } from 'react'
import { Searchbar } from 'react-native-paper'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'

export const Search: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useApp()

  const handleTextChange = (searchText: string) => {
    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.MAKE, searchValue: searchText.trim() },
    })
    dispatch({ type: Types.Search, payload: {} })
  }

  return (
    <Searchbar
      placeholder="Search for make"
      onChangeText={handleTextChange}
      value={searchValue}
    />
  )
}
