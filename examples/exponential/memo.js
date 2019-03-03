let count = 0

function fibonacci(number, memoisedValues) {
  // this is constant time
  if (memoisedValues[number]) {
    return memoisedValues[number]
  }

  count++

  let result
  // we come here only n times
  if (number <= 1) {
    result = number
  } else {
    result = fibonacci(number - 1, memoisedValues) + fibonacci(number - 2, memoisedValues)
  }

  memoisedValues[number] = result

  return result
}

const n = 100
let memo = [null]
for (let index = 1; index <= n; index++) {
  memo[index] = null
}
console.log(fibonacci(n, memo))
console.log('count', count)
