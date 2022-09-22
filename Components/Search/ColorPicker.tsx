import React, { FC } from 'react'
import { Paragraph } from 'react-native-paper'
import { HueSlider } from 'react-native-color'
import tinycolor from 'tinycolor2'

import { useApp } from '../../contexts'
import { FilterTypes, Types } from '../../types'
import { StyleSheet } from 'react-native'

export const ColorPicker: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useApp()

  const handleColorChange = (color: number[]) => {
    const currentColor = !searchValue[FilterTypes.COLOR]
      ? tinycolor('#fff').toHsl()
      : tinycolor(searchValue[FilterTypes.COLOR]?.value as string).toHsl()

    console.log(
      'color',
      color[0],
      'currentColor',
      currentColor,
      'new color',
      tinycolor.fromRatio({ ...currentColor, h: color[0] }).toName()
    )
    // dispatch({
    //   type: Types.UpdateFilterValue,
    //   payload: {
    //     filterType: FilterTypes.COLOR,
    //     searchValue:
    //       tinycolor({ ...tinycolor(searchValue[FilterTypes.COLOR]?.value as string).toHsv(), color }).toName() || tinycolor('#70c1b3').toHsl(),
    //   },
    // })
  }

  return (
    <>
      <Paragraph>Color</Paragraph>
      <HueSlider
        onValueChange={handleColorChange}
        gradientSteps={40}
        value={
          tinycolor(searchValue[FilterTypes.COLOR]?.value as string).toHsl()
            .h || 255
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
})
