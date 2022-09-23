import { SearchValueType } from '../../types'

export const convertSearchValueToString = (
  searchValue: SearchValueType
): string => {
  const filters = Object.keys(searchValue)

  if (!filters.length) {
    return ''
  }

  const newSearchValue: string[] = filters.map((filter) => {
    const { value: filterValue, equals } = searchValue[filter]

    if (Array.isArray(filterValue)) {
      return `${filter} ${equals[0]} ${filterValue[0]} && ${filter} ${equals[1]} ${filterValue[1]}`
    }

    const value = Number.isInteger(filterValue)
      ? filterValue
      : `'${filterValue}'`

    return `${filter} ${equals} ${value}`
  })

  return newSearchValue.join(' && ')
}
