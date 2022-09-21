import { Realm } from '@realm/react'

import { Car as CarType } from '../types'

export class Car extends Realm.Object {
  id!: number
  make!: string
  model!: string
  color!: string
  model_year!: number
  vin!: string
  price!: string
  availability!: boolean
  imageSource!: string | null

  static generate(car: CarType) {
    return {
      id: car.id,
      make: car.make,
      model: car.model,
      color: car.color,
      model_year: car.model_year,
      vin: car.vin,
      price: car.price,
      availability: car.availability,
      imageSource: null,
    }
  }
  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Car',
    primaryKey: 'id',
    properties: {
      id: 'int',
      make: 'string',
      model: 'string',
      color: 'string',
      model_year: 'int',
      vin: 'string',
      price: 'string',
      availability: 'bool',
      imageSource: 'string?',
    },
  }
}