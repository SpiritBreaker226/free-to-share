import axios from 'axios'
import { CAR_API } from '@env'

import { CarFromApi } from '../types'

type ResponseFromCarApi = {
  cars: CarFromApi[]
}

export const useSearchCars = () => {
  const getCars = async (): Promise<ResponseFromCarApi> => {
    const res = await axios.get<ResponseFromCarApi>(`${CAR_API}`)
    const cars = await res.data

    return cars
  }

  return getCars
}
