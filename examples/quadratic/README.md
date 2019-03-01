## O(N^2) Quadratic time complexity

Quadratic algorithm represents runtime directly proportial to the square of the input size. Execution time increases quadratically with the size of the input.

### Count pairs example

We have simple algorithm that counts pairs in an array:

```
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      count++
    }
  }
```

Given array of size `N = 3` count would be incremented 9 times in total:

```
i = 1, j = 1  // 1st time
i = 1, j = 2  // 2
i = 1, j = 3  // 3
i = 2, j = 1  // 4
i = 2, j = 2  // 5
i = 2, j = 3  // 6
i = 3, j = 1  // 7
i = 3, j = 2  // 8
i = 3, j = 3  // 9
```

If we increase size of an array to `N = 4` count will be incremented 16 times.

```
i = 1, j = 1  // 1
i = 1, j = 2  // 2
i = 1, j = 3  // 3
i = 1, j = 4  // 4
i = 2, j = 1  // 5
i = 2, j = 2  // 6
i = 2, j = 3  // 7
i = 2, j = 4  // 8
i = 3, j = 1  // 9
i = 3, j = 2  // 10
i = 3, j = 3  // 11
i = 3, j = 4  // 12
i = 4, j = 1  // 13
i = 4, j = 2  // 14
i = 4, j = 3  // 15
i = 4, j = 4  // 16
```

As we can see the relationship between runtime and N is quadratic `O(N^2)`.
