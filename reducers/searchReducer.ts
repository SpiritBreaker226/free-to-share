import { Action, InitialState, Types } from '../types'

export const searchReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case Types.Search:
      return {
        ...state,
        filteredCars: [],
      }
    case Types.UpdateFilterValue:
      return {
        ...state,
        searchValue: action.payload.searchValue,
      }
    default:
      return state
  }
}
