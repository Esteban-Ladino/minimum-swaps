const minimumSwaps = require('../index')

describe('minimumSwaps', () => {
  it('must return an integer representing the minimum number of swaps to sort the array', () => {
    expect(minimumSwaps(7, [7, 1, 3, 2, 4, 5, 6])).toEqual(5)

    expect(minimumSwaps(4, [4, 3, 1, 2])).toEqual(3)

    expect(minimumSwaps(5, [2, 3, 4, 1, 5])).toEqual(3)

    expect(minimumSwaps(7, [1, 3, 5, 2, 4, 6, 7])).toEqual(3)
  })
})
