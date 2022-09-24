import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Paragraph, Text } from 'react-native-paper'
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

  const getYearRange = (isFrom: boolean): [number, number] => {
    const years = searchValue[FilterTypes.YEAR]?.value as [number, number]

    if (!years) {
      if (isFrom) {
        return [0, todaysYear]
      }

      return [yearMassProduct, 0]
    }

    return years
  }

  const handleYearFromChange = (year: number) => {
    const years = getYearRange(true)

    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.YEAR, searchValue: [year, years[1]] },
    })
  }

  const handleYearToChange = (year: number) => {
    const years = getYearRange(false)

    dispatch({
      type: Types.UpdateFilterValue,
      payload: { filterType: FilterTypes.YEAR, searchValue: [years[0], year] },
    })
  }

  return (
    <View style={styles.container}>
      <Paragraph>Year</Paragraph>

      <View style={styles.selectedContainer}>
        <Text>From: {getYearRange(true)[0] || yearMassProduct}</Text>
        <Text>To: {getYearRange(false)[1] || todaysYear}</Text>
      </View>

      <Slider
        containerStyle={styles.sliderContainer}
        min={yearMassProduct}
        max={todaysYear}
        fromValueOnChange={handleYearFromChange}
        toValueOnChange={handleYearToChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    paddingTop: 8,
    marginTop: 8,
  },
  selectedContainer: {
    marginTop: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderContainer: {
    paddingTop: 0,
  },
})
