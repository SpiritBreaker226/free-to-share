import { Image, StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import React, { FC } from 'react'

import { Car } from '../models'
import { Headline, Text } from 'react-native-paper'

export type CarItemProps = {
  car: Car & Realm.Object
}

export const CarItem: FC<CarItemProps> = ({ car }) => {
  return (
    <View style={styles.container}>
      {car.imageSource ? (
        <Image
          style={styles.img}
          source={{ uri: 'https://picsum.photos/id/1071/200/200' }}
          resizeMode={'cover'}
        />
      ) : (
        // placeholder
        // If you see a continental front bumper then it is the placeholder
        <Image
          style={styles.img}
          source={{
            uri: 'https://i.picsum.photos/id/1071/200/200.jpg?hmac=mb6el6MCnRCyFnuMcCPJppn1WISnV5OKFUqDFg82Joo',
          }}
          resizeMode={'cover'}
        />
      )}
      <View>
        <Headline style={styles.make}>{car.make}</Headline>
        <View style={styles.details}>
          <Text>Model: {car.model}</Text>
          <Text>Year: {car.model_year}</Text>
          <Text>Color: {car.color}</Text>
          <Text>Price: {car.price}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#999',
    // color: '#fff',
    // border: '1px solid #000',
    padding: 16,
    marginBottom: 8,
    display: 'flex',
  },
  img: {
    // border: '1px solid #000',
    borderRadius: 4,
    marginRight: 8,
    width: 50,
    height: 50,
  },
  make: {
    marginTop: 0,
    marginBottom: 16,
  },
  details: {
    display: 'flex',
    gap: 16,
  },
})
