import React, { FC } from 'react'
import { Searchbar } from 'react-native-paper'

import { useApp } from '../../contexts'
import { Types } from '../../types'

export const Search: FC = () => {
  const {
    state: { searchText },
    dispatch,
  } = useApp()

  const handleTextChange = (searchText: string) => {
    dispatch({
      type: Types.UpdateSearchText,
      payload: { searchText: searchText.trim() },
    })
    dispatch({ type: Types.Search, payload: {} })
  }

  return (
    <Searchbar
      placeholder="Search for cars"
      onChangeText={handleTextChange}
      value={searchText}
    />
  )
}
