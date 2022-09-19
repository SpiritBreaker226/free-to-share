import { Car, ResponseFromCarApi } from '../../types'

export const convertApiToAppCars = (
  carsFromApi?: ResponseFromCarApi
): Car[] => {
  if (!carsFromApi) {
    return []
  }

  return carsFromApi.cars.map((car) => ({
    id: car.id,
    make: car.car,
    model: car.car_model,
    color: car.car_color,
    model_year: car.car_model_year,
    vin: car.car_vin,
    price: car.price,
    availability: car.availability,
  }))
}
