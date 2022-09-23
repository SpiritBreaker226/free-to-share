export type SearchValueQueryParts = {
  value: string | [string, string] | number | [number, number]
  equals: string | [string, string]
}

export type SearchValueType = {
  [key: string]: SearchValueQueryParts
}
