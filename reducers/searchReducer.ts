import { Action, FilterTypes, InitialState, Types } from '../types'

export const searchReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case Types.UpdateFilterValue:
      if (action.payload.filterType === FilterTypes.CLEAR_SEARCH_VALUE) {
        return {
          ...state,
          searchValue: {},
        }
      }

      const searchValue = state.searchValue

      searchValue[action.payload.filterType] = {
        value: action.payload.searchValue || '',
        equals:
          action.payload.filterType === FilterTypes.YEAR ? '==' : 'CONTAINS[c]',
      }

      return {
        ...state,
        searchValue,
      }
    default:
      return state
  }
}
