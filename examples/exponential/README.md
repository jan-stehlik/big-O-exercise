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

## Tips

- If the algorithm recursively calls branches, usually its exponential time complexity.
- `O(2^N)` algorithms are often optimised by dynamic programming.
