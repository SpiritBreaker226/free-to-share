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
    <View style={styles.container}>
      <Paragraph>Year</Paragraph>
      {(searchValue[FilterTypes.YEAR]?.value as [number, number]).length && (
        <View style={styles.selectedContainer}>
          <Text>
            From:{' '}
            {(searchValue[FilterTypes.YEAR]?.value as [number, number])[0]}
          </Text>
          <Text>
            To: {(searchValue[FilterTypes.YEAR]?.value as [number, number])[1]}
          </Text>
        </View>
      )}
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
