import React, { FC } from 'react'
import { Paragraph } from 'react-native-paper'
import Slider from 'react-native-range-slider-expo'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'

const yearMassProduct = 1908
// since the user can change the year make sure that year is more then
const todaysYear = Math.max(yearMassProduct, new Date().getFullYear())

export const YearSlider: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useApp()

  const handleYearFromChange = (year: number) => {
    const years = (searchValue[FilterTypes.YEAR]?.value as [
      number,
      number
    ]) || [0, todaysYear]

    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.YEAR, searchValue: [year, years[1]] },
    })
  }

  const handleYearToChange = (year: number) => {
    const years = (searchValue[FilterTypes.YEAR]?.value as [
      number,
      number
    ]) || [yearMassProduct, 0]

    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.YEAR, searchValue: [years[0], year] },
    })
  }

  return (
    <>
      <Paragraph>Year</Paragraph>
      <Slider
        min={yearMassProduct}
        max={todaysYear}
        fromValueOnChange={handleYearFromChange}
        toValueOnChange={handleYearToChange}
      />
    </>
  )
}
