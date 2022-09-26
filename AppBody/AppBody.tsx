import { FC, useCallback, useContext, useEffect } from 'react'

import { CarList, Message } from '../Components'
import { AppContext } from '../contexts'
import { useDatabase, useSearchCars } from '../hooks'
import { convertApiToAppCars, convertSearchValueToString } from './helpers'

export const AppBody: FC = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useContext(AppContext)

  const getCars = useSearchCars()
  const { cars, handleAddBulkCars } = useDatabase(
    convertSearchValueToString(searchValue)
  )

  const dispatchCars = useCallback(() => {
    getCars().then((carsFromApi) => {
      const cars = convertApiToAppCars(carsFromApi)

      // add cars to database
      handleAddBulkCars(cars)
    })
  }, [handleAddBulkCars, getCars])

  useEffect(() => {
    dispatchCars()
  }, [dispatchCars])

  return (
    <>
      {cars.length ? (
        <CarList cars={cars} />
      ) : (
        <Message hasNoCarsInSearch={!searchValue} />
      )}
    </>
  )
}
