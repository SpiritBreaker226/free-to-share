import { FC, useCallback, useContext, useEffect } from 'react'

import { CarList, Message } from './Components'
import { Car as CarType } from '../types'
import { AppContext } from '../contexts'
import CarRealmContext from '../contexts/CarRealmContext'
import { Car } from '../models'
import { useSearchCars } from '../hooks'
import { convertApiToAppCars } from './helpers'

const { useRealm, useQuery } = CarRealmContext

export const AppBody: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useContext(AppContext)
  const getCars = useSearchCars()

  const realm = useRealm()
  const nonFillterCars = useQuery(Car)

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

  const dispatchCars = useCallback(() => {
    getCars().then((carsFromApi) => {
      const cars = convertApiToAppCars(carsFromApi)

      // add cars to database
      handleAddBulkCars(cars)
    })
  }, [dispatch])

  useEffect(() => {
    dispatchCars()
  }, [])

  return (
    <>
      {nonFillterCars.length ? (
        <CarList cars={nonFillterCars} />
      ) : (
        <Message hasNoCarsInSearch={!!searchValue} />
      )}
    </>
  )
}
