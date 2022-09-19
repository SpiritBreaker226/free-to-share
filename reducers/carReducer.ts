import { Action, InitialState, Types } from '../types'

export const carReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case Types.AddCars:
      return {
        ...state,
        cars: action.payload.cars,
      }
    default:
      return state
  }
}
