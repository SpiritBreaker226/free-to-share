import { Car } from './Car'
import { CarFromApi } from './CarFromApi'

export type InitialState = {
  cars: Car[]
  filteredCars: Car[]
  searchText: string
}

export enum Types {
  AddCars = 'ADD_CARS',
  UpdateSearchText = 'UPDATE_SEARCH_TEXT',
  Search = 'SEARCH',
}

type CarPayload = {
  [Types.AddCars]: {
    carsFromApi: CarFromApi[]
  }
}

type SearchPayload = {
  [Types.Search]: {}
  [Types.UpdateSearchText]: {
    searchText: string
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
