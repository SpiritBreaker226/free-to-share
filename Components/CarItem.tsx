import { Image, StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import React, { FC } from 'react'

import { Car } from '../models'
import { List, Text } from 'react-native-paper'

export type CarItemProps = {
  car: Car & Realm.Object
}

export const CarItem: FC<CarItemProps> = ({ car }) => {
  return (
    <List.Item
      title={car.make}
      description={
        <>
          <Text>Year: {car.model_year} </Text>
          <Text>Color: {car.color} </Text>
          <Text>Price: {car.price}</Text>
        </>
      }
      left={() =>
        car.imageSource ? (
          <FastImage style={styles.img} source={{ uri: car.imageSource }} />
        ) : (
          // placeholder
          // If you see a continental front bumper then it is the placeholder
          <FastImage
            style={styles.img}
            source={{ uri: 'https://picsum.photos/id/1071/200' }}
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 4,
    width: 50,
    height: 50,
  },
})
