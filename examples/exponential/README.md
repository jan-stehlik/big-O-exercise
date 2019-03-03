## O(2^N) Exponential time complexity

In exponential complexity runtimes doubles with each additional item in an input. Exponential time is extremely inefficient and typically has to be optimised.

### Fibonnaci example

We are using recursion to calculate `N` number in fibonacci sequence:

```
  if (number <= 1) {
    return number
  }

  return fibonacci(number - 1) + fibonacci(number - 2)
```

Let's try to calculate fibonacci number for `N = 5`:

```
fib(5) = fib(4) + fib(3)  // 1st call
fib(4) = fib(3) + fib(2)  // 2, called in 1st call
fib(3) = fib(2) + fib(1)  // 3, called in 1st call
fib(3) = fib(2) + fib(1)  // 4, called in 2nd call
fib(2) = fib(1) + fib(0)  // 5, called in 2nd call
fib(2) = fib(1) + fib(0)  // 6, called in 3rd call
fib(2) = fib(1) + fib(0)  // 7, called in 4th call
fib(1) = 1                // 8, called in 3rd call
fib(1) = 1                // 9, called in 4th call
fib(1) = 1                // 10, called in 5th call
fib(1) = 1                // 11, called in 6th call
fib(1) = 1                // 12, called in 7th call
fib(0) = 0                // 13, called in 5th call
fib(0) = 0                // 14, called in 6th call
fib(0) = 0                // 15, called in 7th call
```

The fibonacci function has been called 15 times! This graph will help us to visualise what happens:

![fib picture](https://i.stack.imgur.com/7iU1j.png)

Fibonacci classic recursive algorithm is exponential `O(2^N)`. There are a lot of duplicate computations, this is where we can optimise.

### Memoised fibonnaci example

Memoisation is commonly used to optimise heavy computations, especially repetative computations that don't change often. We introduce lookup table called `memoisedValues` and store each computed value inside:

```
  if (number <= 1) {
    result = number
  } else {
    result = fibonacci(number - 1, memoisedValues) + fibonacci(number - 2, memoisedValues)
  }

  // result of each computation will get stored in this array
  memoisedValues[number] = result
```

And then when we perform lookup that happens in constant time to determine if value for given number has already been computed:

```
  if (memoisedValues[number]) {
    return memoisedValues[number]
  }
```

With this computation we do heavy computation only for new `number`, for any number that has already been computed we simply only look it up in `memoisedValues` array. Let's determine time complexity of this solution.

This block of code happens in constant `O(1)` time:

```
  if (memoisedValues[number]) {
    return memoisedValues[number]
  }
```

This block of code will be called only `N` times:

```
  if (number <= 1) {
    result = number
  } else {
    result = fibonacci(number - 1, memoisedValues) + fibonacci(number - 2, memoisedValues)
  }
```

And within above block fibonacci function will be called at most `2` times:

```
result = fibonacci(number - 1, memoisedValues) + fibonacci(number - 2, memoisedValues)
```

Additionally function is called `1` time initially:

```
fibonacci(n, memo)
```

This gives us time complexity:

```
O(2N + 1)*O(1) =
O(2N + 1) =
O(N)
```

The final complexity of memoised solution is `O(N)` which is huge improvement over previous `O(2^N)` solution.

## Tips

- If the algorithm recursively calls branches, usually its exponential time complexity.
- `O(2^N)` algorithms are often optimised by dynamic programming.
- Memoise heavy and/or repetitive computation
