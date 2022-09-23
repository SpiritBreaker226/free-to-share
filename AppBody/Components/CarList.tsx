import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { List, Text } from 'react-native-paper'

import { Car } from '../../models'

export type CarListProps = {
  cars: Realm.Results<Car & Realm.Object>
}

export const CarList: FC<CarListProps> = ({ cars }) => (
  <ScrollView>
    {cars.map((car) => (
      <List.Item
        title={car.make}
        description={
          <>
            <Text>Year: {car.model_year} </Text>
            <Text>Color: {car.color} </Text>
            <Text>Price: {car.price}</Text>
          </>
        }
        left={(props) => <List.Icon {...props} icon="folder" />}
        key={car.id.toString()}
      />
    ))}
  </ScrollView>
)
