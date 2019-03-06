let count = 0

function binarySearch(sortedArray, targetValue) {
  let leftIndex = 0
  let rightIndex = sortedArray.length
  let middleIndex

  while (leftIndex < rightIndex) {
    count++
    middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (sortedArray[middleIndex] < targetValue) {
      leftIndex = middleIndex + 1
    } else if (sortedArray[middleIndex] > targetValue) {
      rightIndex = middleIndex
    } else {
      return middleIndex
    }
  }

  return 'Not found'
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(binarySearch(testArray, 2))
console.log('count', count)
