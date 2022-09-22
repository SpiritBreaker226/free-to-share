import React, { FC } from 'react'
import { Paragraph } from 'react-native-paper'
import { Slider } from 'react-native-range-slider-expo'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'

// since the user can change the year make sure that year is more then
const todaysYear = Math.max(1908, new Date().getFullYear())

export const YearSlider: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useApp()

  const handleYearChange = (year: number) => {
    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.YEAR, searchValue: year },
    })
  }

  return (
    <>
      <Paragraph>Year</Paragraph>
      <Slider
        min={1908}
        max={todaysYear}
        initialValue={Number(searchValue[FilterTypes.YEAR]?.value)}
        valueOnChange={handleYearChange}
      />
    </>
  )
}
