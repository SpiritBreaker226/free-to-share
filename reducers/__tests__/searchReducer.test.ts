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
      it("should have no 'AND'", () => {
        const state = setUp({
          action: {
            type: Types.UpdateFilterValue,
            payload: {
              filterType: FilterTypes.YEAR,
              searchValue: '1999',
            },
          },
        })

        expect(state.searchValue).not.toEqual(expect.stringContaining('AND'))
      })
    })

    describe('when there is an existing values', () => {
      it("should add 'AND' to the search value", () => {
        const state = setUp({
          action: {
            type: Types.UpdateFilterValue,
            payload: {
              filterType: FilterTypes.COLOR,
              searchValue: 'green',
            },
          },
          state: {
            searchValue: "make CONTAINS[c] 'Mitsubishi'",
          },
        })

        expect(state.searchValue).toEqual(expect.stringContaining('AND'))
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
            searchValue:
              "make CONTAINS[c] 'Mitsubishi' AND color CONTAINS[c] 'green'",
          },
        })

        expect(state.searchValue).toEqual('')
      })
    })
  })
})
