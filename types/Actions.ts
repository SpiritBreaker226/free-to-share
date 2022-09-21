import { Car } from './Car'
import { CarFromApi } from './CarFromApi'
import { FilterTypes } from './FilterTypes'

export type InitialState = {
  cars: Car[]
  filteredCars: Car[]
  searchValue: string
}

export enum Types {
  AddCars = 'ADD_CARS',
  UpdateFilterValue = 'UPDATE_FILTER_VALUE',
  Search = 'SEARCH',
}

type CarPayload = {
  [Types.AddCars]: {
    cars: Car[]
  }
}

type SearchPayload = {
  [Types.Search]: {}
  [Types.UpdateFilterValue]: {
    filterType: FilterTypes
    searchValue?: string
  }
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export type CarActions = ActionMap<CarPayload>[keyof ActionMap<CarPayload>]

export type SearchActions =
  ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>]

export type Action = CarActions | SearchActions
