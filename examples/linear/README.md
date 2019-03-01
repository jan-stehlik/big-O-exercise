## O(N) Linear time complexity

Linear complexity means that runtime is directly proportional to the size of the input. Execution time increases linearly with the size of the input.

### Add and multiply example

Here we iterate over the array of size `N` twice:

```
  for (let index = 0; index < array.length; index++) {
    additionResult += array[index]
  }

  for (let index = 0; index < array.length; index++) {
    multiplicationResult *= array[index]
  }
```

We might conclude that runtime complexity of this algorithm is `O(2N)`.

What if we rewrite this algoritm into:

```
  for (let index = 0; index < array.length; index++) {
    additionResult += array[index]
    multiplicationResult *= array[index]
  }
```

This clearly is `O(N)`.

However, which one is faster? We might delve deep into aseembly code to find out answer, but it doesn't really matter. Remember, big O describes how execution time increases with increasing input size. Constants are irrelevant for that. Just remember that sometimes `O(N^2)` might be faster than `O(N)`.

### Tips

- Drop the constants, `O(2N)` = `O(N)`
