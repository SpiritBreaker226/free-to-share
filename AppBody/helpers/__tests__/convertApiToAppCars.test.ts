import { convertApiToAppCars } from '../convertApiToAppCars'

describe('convertApiToAppCars', () => {
  it('should conver ', () => {
    const cars = convertApiToAppCars({
      cars: [
        {
          id: 1,
          car: 'Mitsubishi',
          car_model: 'Montero',
          car_color: 'Yellow',
          car_model_year: 2002,
          car_vin: 'SAJWJ0FF3F8321657',
          price: '$2814.46',
          availability: false,
        },
      ],
    })

    expect(cars.length).toEqual(1)
    expect(cars[0].make).toEqual('Mitsubishi')
    expect(cars[0].model).toEqual('Montero')
    expect(cars[0].color).toEqual('Yellow')
  })

  describe('when cars form API is undefined', () => {
    it('should return an empty array', () => {
      const cars = convertApiToAppCars()

      expect(cars.length).toEqual(0)
    })
  })
})
