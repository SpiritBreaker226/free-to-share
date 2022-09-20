import { View } from 'react-native'
import React, { FC } from 'react'

import { Car } from '../../types'
import { List, Text } from 'react-native-paper'

export type CarListProps = {
  cars: Car[]
}

export const CarList: FC<CarListProps> = ({ cars }) => (
  <>
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
        key={car.id}
      />
    ))}
  </>
)
