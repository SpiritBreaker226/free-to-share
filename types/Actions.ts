import { FilterTypes } from './FilterTypes'

export type InitialState = {
  searchValue: string
}

export enum Types {
  UpdateFilterValue = 'UPDATE_FILTER_VALUE',
}

type SearchPayload = {
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

export type SearchActions =
  ActionMap<SearchPayload>[keyof ActionMap<SearchPayload>]

export type Action = SearchActions
