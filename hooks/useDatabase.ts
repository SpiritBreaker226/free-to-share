import { useCallback } from 'react'
import CarRealmContext from '../contexts/CarRealmContext'
import { Car } from '../models'
import { Car as CarType } from '../types'

const { useRealm, useQuery } = CarRealmContext

export const useDatabase = (searchString: string) => {
  const realm = useRealm()
  const nonFillterCars = useQuery(Car)
  // check if there is a search value to use
  const cars = searchString
    ? nonFillterCars.filtered(searchString)
    : nonFillterCars

  const handleAddBulkCars = useCallback(
    (cars: CarType[]): void => {
      realm.write(() => {
        cars.forEach((car) => {
          const existingCars = nonFillterCars.filtered(`id == ${car.id}`)

          if (!existingCars.length) {
            realm.create('Car', Car.generate(car))
          }
        })
      })
    },
    [realm]
  )

  return { handleAddBulkCars, cars }
}
