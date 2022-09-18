import { Action, Car, InitialState, Types } from '../types'

export const carReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case Types.AddCars:
      const cars: Car[] = action.payload.carsFromApi.map((car) => ({
        id: car.id,
        make: car.car,
        model: car.car_model,
        color: car.car_color,
        model_year: car.car_model_year,
        vin: car.car_vin,
        price: car.price,
        availability: car.availability,
      }))

      return {
        ...state,
        cars,
      }
    default:
      return state
  }
}
