import React, { FC, useState } from 'react'
import { Searchbar } from 'react-native-paper'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'

export const MakeSearchbar: FC = () => {
  const { dispatch } = useApp()
  const [searchText, setSearchText] = useState('')

  const handleChange = (searchText: string) => {
    setSearchText(searchText)

    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.MAKE, searchValue: searchText.trim() },
    })
  }

  return (
    <Searchbar
      placeholder="Search for make"
      onChangeText={handleChange}
      value={searchText}
    />
  )
}
