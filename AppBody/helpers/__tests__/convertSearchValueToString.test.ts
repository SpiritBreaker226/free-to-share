import { convertSearchValueToString } from '../convertSearchValueToString'

describe('convertSearchValueToString', () => {
  it('should convert search value to string', () => {
    const searchText = convertSearchValueToString({
      make: {
        value: 'Mitsubishi',
        equals: 'CONTAINS[c]',
      },
      color: {
        value: 'green',
        equals: 'CONTAINS[c]',
      },
      year: {
        value: 2003,
        equals: '==',
      },
    })

    expect(searchText).toEqual(
      "make CONTAINS[c] 'Mitsubishi' && color CONTAINS[c] 'green' && year == 2003"
    )
  })

  describe('when there is no search values', () => {
    it('should return an empty string', () => {
      const searchText = convertSearchValueToString({})

      expect(searchText).toEqual('')
    })
  })
})
