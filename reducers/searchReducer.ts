import { Action, FilterTypes, InitialState, Types } from '../types'
// import dbCars from '../db/DbCars'

export const searchReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case Types.UpdateFilterValue:
      let newSearchValue = state.searchValue
      console.log('state search value', state.searchValue)
      if (
        newSearchValue !== '' &&
        !newSearchValue.includes(action.payload.filterType)
      ) {
        newSearchValue += ` && `
      }

      newSearchValue =
        action.payload.searchValue &&
        action.payload.filterType !== FilterTypes.CLEAR_SEARCH_VALUE
          ? `${action.payload.filterType} CONTAINS[c] '${action.payload.searchValue}'`
          : ''
      console.log('newSearchValue', newSearchValue)
      return {
        ...state,
        searchValue: newSearchValue,
      }
    default:
      return state
  }
}
