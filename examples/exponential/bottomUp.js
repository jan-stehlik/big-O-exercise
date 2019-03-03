function fibonacci(number) {
  if (number == 1 || number == 2) {
    return 1
  }

  let bottomUp = [null]
  bottomUp[1] = 1
  bottomUp[2] = 1
  for (let index = 3; index <= number; index++) {
    bottomUp[index] = bottomUp[index - 1] + bottomUp[index - 2]
  }

  return bottomUp[number]
}

const n = 1000
console.log(fibonacci(n))
