import React, { FC } from 'react'
import { Searchbar } from 'react-native-paper'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'

export const MakeSearchbar: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useApp()

  const handleChange = (searchText: string) => {
    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.MAKE, searchValue: searchText.trim() },
    })
  }

  return (
    <Searchbar
      placeholder="Search for make"
      onChangeText={handleChange}
      value={searchValue[FilterTypes.MAKE]?.value as string}
    />
  )
}
