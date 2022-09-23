import { initialState } from '../../contexts'
import { Action, FilterTypes, InitialState, Types } from '../../types'
import { searchReducer } from '../searchReducer'

describe('searchReducer', () => {
  const setUp = ({
    action,
    state = {},
  }: {
    action: Action
    state?: Partial<InitialState>
  }) => searchReducer({ ...initialState, ...state }, action)

  describe('UpdateFilterValue', () => {
    describe('when search value is empty', () => {
      it('should add one item', () => {
        const state = setUp({
          action: {
            type: Types.UpdateFilterValue,
            payload: {
              filterType: FilterTypes.YEAR,
              searchValue: '1999',
            },
          },
        })

        expect(Object.keys(state.searchValue).length).toEqual(1)
      })
    })

    describe('when there is an existing values', () => {
      it('should add another filter to search value', () => {
        const state = setUp({
          action: {
            type: Types.UpdateFilterValue,
            payload: {
              filterType: FilterTypes.YEAR,
              searchValue: 1996,
            },
          },
          state: {
            searchValue: {
              make: {
                value: 'Mitsubishi',
                equals: 'CONTAINS[c]',
              },
            },
          },
        })

        expect(state.searchValue).toEqual(
          expect.objectContaining({
            model_year: {
              value: 1996,
              equals: '==',
            },
          })
        )
      })
    })

    describe('when filter type is clear search value', () => {
      it('should clear all values', () => {
        const state = setUp({
          action: {
            type: Types.UpdateFilterValue,
            payload: {
              filterType: FilterTypes.CLEAR_SEARCH_VALUE,
            },
          },
          state: {
            searchValue: {
              make: {
                value: 'Mitsubishi',
                equals: 'CONTAINS[c]',
              },
              color: {
                value: 'green',
                equals: 'CONTAINS[c]',
              },
            },
          },
        })

        expect(state.searchValue).toEqual({})
      })
    })

    describe('when filter type is uses a range', () => {
      it('should have values in an array', () => {
        const state = setUp({
          action: {
            type: Types.UpdateFilterValue,
            payload: {
              filterType: FilterTypes.YEAR,
              searchValue: [1996, 2012],
            },
          },
        })

        expect(state.searchValue).toEqual(
          expect.objectContaining({
            model_year: {
              value: [1996, 2012],
              equals: ['>=', '<='],
            },
          })
        )
      })
    })
  })
})
