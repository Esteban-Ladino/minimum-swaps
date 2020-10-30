/**
 * Function to swap two elements of any array
 * @param {Number[]} arr - any number array
 * @param {Number} i - first array position to swap
 * @param {Number} j - second array position to swap
 */
const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]]

/**
 * Function to return an integer representing the minimum number
 * of swaps to sort the array
 * @param {Number} n - the size of arr
 * @param {Number[]} arr - any number array
 */
const minimumSwaps = (n, arr) => {
  let swapCounter = 0

  for (let i = 0; i < n; i++) {
    if((i + 1) !== arr[i]) {
      swap(arr, i, arr[i] - 1)
      swapCounter++
      i--
    }
  }

  return swapCounter
}

module.exports = minimumSwaps
