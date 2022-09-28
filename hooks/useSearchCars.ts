import axios from 'axios'

import { ResponseFromCarApi } from '../types'

export const useSearchCars = () => {
  const getCars = async (): Promise<ResponseFromCarApi> => {
    const res = await axios.get<ResponseFromCarApi>(
      'https://myfakeapi.com/api/cars'
    )
    const cars = await res.data

    return cars
  }

  return getCars
}
