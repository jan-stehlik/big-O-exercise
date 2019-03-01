## O(log N) Logarithmic time complexity

Logarithmic algorithm is highly efficient. The ratio of the number of computations to the size of the input decreases and tends to go to 0 when N increases.

### Binary search example

We start with `N` sorted array. After one step we decrease size by a half `N/2`. After second step we decrease size by another half `N/4`. And so on.

#### Given we have N inputs in sorted array how many steps do we need to do in order to find a target element?

Let's try with 16 inputs first `N = 16`. The worst case scenario to find an element is `4`.

```
N = 16  // starting point
N = 8   // 1st computation
N = 4   // 2nd computation
N = 2   // 3rd computation
N = 1   // 4th computation
```

When doubling number of inputs to `N = 32`, number of computations raises only by one to total of `5`.

```
N = 32  // starting point
N = 16  // 1st computation
N = 8   // 2nd computation
N = 4   // 3rd computation
N = 2   // 4th computation
N = 1   // 5th computation
```

This makes binary search algorithm logarithmic, for any N the worst case scenario to find an element is `log2(N)`.

### Tips

- The base of logarithm doesn't matter. What matters is the relationship between size of an input and number of operations. If this relationship is logarithmic, then the algorithm is logarithmic too.

- The common features of logarithmic algoritms are:
  - next element in algorithm on which we need to perform an operation is one of many possibilities and only one will need to be chosen (such as choosing one middle index in N/2 elements like in binary search algorithm),
  - the elements on which an operation is performed are digits of N
