import { initialState } from '../../contexts'
import { Action, InitialState, Types } from '../../types'
import { carReducer } from '../carReducer'

describe('carReducer', () => {
  const setUp = ({
    action,
    state = {},
  }: {
    action: Action
    state?: Partial<InitialState>
  }) => carReducer({ ...initialState, ...state }, action)

  describe('AddCars', () => {
    it('should add car to state', () => {
      const state = setUp({
        action: {
          type: Types.AddCars,
          payload: {
            carsFromApi: [
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
          },
        },
      })

      expect(state.cars.length).toEqual(1)
      expect(state.cars[0]).toEqual(
        expect.objectContaining({
          id: 1,
          make: 'Mitsubishi',
          model: 'Montero',
          color: 'Yellow',
          model_year: 2002,
          vin: 'SAJWJ0FF3F8321657',
        })
      )
    })
  })
})
