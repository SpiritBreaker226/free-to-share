import { FC, useCallback, useContext, useEffect } from 'react'

import { CarList } from './Components'
import { Types } from '../types'
import { AppContext } from '../contexts'
import { useSearchCars } from '../hooks'

export const AppBody: FC = () => {
  const {
    state: { cars: nonFillterCars, filteredCars, searchText },
    dispatch,
  } = useContext(AppContext)
  const getCars = useSearchCars()

  const cars = searchText ? filteredCars : nonFillterCars

  const dispatchCars = useCallback(() => {
    getCars({}).then((carsFromApi) =>
      dispatch({
        type: Types.AddCars,
        payload: { carsFromApi: carsFromApi.cars },
      })
    )

    if (searchText.length) {
      dispatch({ type: Types.Search, payload: {} })
    }
  }, [dispatch])

  useEffect(() => {
    dispatchCars()
  }, [])

  return (
    <main>
      <CarList cars={cars} />
    </main>
  )
}
