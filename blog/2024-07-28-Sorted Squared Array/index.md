---
slug: sorted_squared_array
title: Sorted Squared Array
authors: [oggy]
tags: [coding_interview, easy]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Problem" label="Problem" default>
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Sample Input:
```py "
array = [1, 2, 3, 5, 6, 8, 9]
```

Sample Output:
```py "
[1, 4, 9, 25, 36, 64, 81]
```

:::tip Think it through!
Before reading the solution first think about your approach to solve the problem
:::

Thinking Approaches:
```code
As the input array is in ascending order but that doesn't mean the square of element array will be in ascending order.
one naive solution would be square the numbers first and then do the sorting. which will have complexity of O(nlogn).
Other approach would be to use two pointer approach, where we can compare the start and end absolute values. And as we know a bigger value square is always bigger we can put that square number at the end of the result array.
Make sure to run the loop until we have all the elements in the output array, instead of adding any condition on start & end index.
```
</TabItem>
<TabItem value="Solution" label="Solution">
```py showLineNumbers"
def sortedSquaredArray(array):
    # Write your code here
    start, end = 0, len(array) - 1
    res = [0]*len(array)
    idx = len(res) - 1
    while idx >= 0:
        if abs(array[start]) <= abs(array[end]):
            res[idx] = array[end] * array[end]
            end -= 1
        else:
            res[idx] = array[start] * array[start]
            start += 1
        idx -= 1
    return res
```
Complexity:
```code
Time complexity: O(n)
Space Complexity: O(n): Since we need to create a brand new array with n elements as we can't modify the input array.
```
</TabItem>
</Tabs>

