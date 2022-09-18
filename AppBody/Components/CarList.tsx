import { View } from 'react-native'
import React, { FC } from 'react'

import { Car } from '../../types'
import { List } from 'react-native-paper'

export type CarListProps = {
  cars: Car[]
}

export const CarList: FC<CarListProps> = ({ cars }) => (
  <View>
    {cars.map((car) => (
      <List.Item
        title={car.make}
        description={
          <>
            <span>Model: {car.model}</span>
            <span>Year: {car.model_year}</span>
            <span>Color: {car.color}</span>
          </>
        }
        left={(props) => <List.Icon {...props} icon="folder" />}
        key={car.id}
      />
    ))}
  </View>
)
