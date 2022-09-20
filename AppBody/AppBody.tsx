import { FC, useCallback, useContext, useEffect } from 'react'

import { CarList, Message } from './Components'
import { Types } from '../types'
import { AppContext } from '../contexts'
import { useSearchCars } from '../hooks'
import { convertApiToAppCars } from './helpers'

export const AppBody: FC = () => {
  const {
    state: { cars: nonFillterCars, filteredCars, searchText },
    dispatch,
  } = useContext(AppContext)
  const getCars = useSearchCars()

  const cars = searchText ? filteredCars : nonFillterCars

  const dispatchCars = useCallback(() => {
    getCars().then((carsFromApi) => {
      const cars = convertApiToAppCars(carsFromApi)

      dispatch({
        type: Types.AddCars,
        payload: { cars },
      })
    })

    if (searchText.length) {
      dispatch({
        type: Types.Search,
        payload: {},
      })
    }
  }, [dispatch])

  useEffect(() => {
    dispatchCars()
  }, [])

  return (
    <>
      {cars.length ? (
        <CarList cars={cars} />
      ) : (
        <Message hasNoCarsInSearch={!!searchText} />
      )}
    </>
  )
}
