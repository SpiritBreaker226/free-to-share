import React, { FC, useCallback, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

import { Car } from '../models'
import { CarItem } from './CarItem'

export type CarListProps = {
  cars: Realm.Results<Car & Realm.Object>
}

export const CarList: FC<CarListProps> = ({ cars }) => {
  const [numberOfCars, setNumberOfCars] = useState(24)

  const renderItem = useCallback(
    ({ item }: { item: Car & Realm.Object }) => <CarItem car={item} />,
    []
  )

  const keyExtractor = useCallback(
    (item: Car & Realm.Object) => item.id.toString(),
    []
  )

  const fetchMore = () => setNumberOfCars(numberOfCars + 24)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Car & Realm.Object>
        data={cars.slice(0, numberOfCars)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={fetchMore}
        onEndReachedThreshold={2}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 550,
  },
})
