let count = 0

function fibonacci(number) {
  count++
  if (number <= 1) {
    return number
  }

  return fibonacci(number - 1) + fibonacci(number - 2)
}

// fibonacci sequence goes: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
const n = 5
console.log(fibonacci(n))
console.log('count', count)
