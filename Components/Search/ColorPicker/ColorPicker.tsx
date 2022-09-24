import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { List, Paragraph, Text } from 'react-native-paper'
import { Dropdown } from 'react-native-element-dropdown'

import { useApp } from '../../../contexts'
import { FilterTypes, Types } from '../../../types'
import { DropdownColorItem, DROPDOWN_COLORS } from './colors'

export const ColorPicker: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useApp()
  const handleColorChange = (color: DropdownColorItem) => {
    dispatch({
      type: Types.UpdateFilterValue,
      payload: {
        filterType: FilterTypes.COLOR,
        searchValue: color.value,
      },
    })
  }

  const renderItem = (item: DropdownColorItem) => {
    return (
      <View style={styles.item}>
        <List.Icon color={item.value.toLowerCase()} icon="circle" />
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    )
  }

  return (
    <>
      <Paragraph>Color</Paragraph>
      <Dropdown
        data={DROPDOWN_COLORS}
        style={styles.dropdown}
        search
        labelField="label"
        valueField="value"
        placeholder={'Select color'}
        searchPlaceholder="Search for color..."
        value={searchValue[FilterTypes.COLOR]?.value as string}
        onChange={handleColorChange}
        renderItem={renderItem}
      />
    </>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 4,
    backgroundColor: 'white',
    paddingLeft: 12,
    paddingRight: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
})
