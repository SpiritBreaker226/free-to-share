type SearchValueQueryParts = {
  value: string | number
  equals: string
}

export type SearchValueType = {
  [key: string]: SearchValueQueryParts
}
