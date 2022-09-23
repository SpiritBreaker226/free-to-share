import React, { FC, useCallback, useState } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { List, Text } from 'react-native-paper'

import { Car } from '../../models'

export type CarListProps = {
  cars: Realm.Results<Car & Realm.Object>
}

export const CarList: FC<CarListProps> = ({ cars }) => {
  const [numberOfCars, setNumberOfCars] = useState(24)

  const renderItem = useCallback(
    ({ item }: { item: Car & Realm.Object }) => (
      <List.Section>
        <List.Item
          title={item.make}
          description={
            <>
              <Text>Year: {item.model_year} </Text>
              <Text>Color: {item.color} </Text>
              <Text>Price: {item.price}</Text>
            </>
          }
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
      </List.Section>
    ),
    []
  )

  const keyExtractor = useCallback(
    (item: Car & Realm.Object) => item.id.toString(),
    []
  )

  const fetchMore = () => setNumberOfCars(numberOfCars + 24)

  return (
    <SafeAreaView>
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
