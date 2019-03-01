function addAndMultiply(array) {
  let additionResult = 0
  let multiplicationResult = 1

  for (let index = 0; index < array.length; index++) {
    additionResult += array[index]
  }

  for (let index = 0; index < array.length; index++) {
    multiplicationResult *= array[index]
  }

  return { additionResult, multiplicationResult }
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const { additionResult, multiplicationResult } = addAndMultiply(testArray)
console.log(additionResult)
console.log(multiplicationResult)
