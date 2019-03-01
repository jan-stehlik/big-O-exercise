function countPairs(array) {
  let count = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`i = ${array[i]}, j = ${array[j]}`)
      count++
    }
  }

  return count
}

const testArray = [1, 2, 3]
const result = countPairs(testArray)
console.log(result)
