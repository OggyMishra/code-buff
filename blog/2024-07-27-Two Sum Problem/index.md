---
slug: two_number_sum
title: Two Number Sum
authors: [oggy]
tags: [coding_interview, easy]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Problem" label="Problem" default>
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array, you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

Sample Input:
```py "
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
```

Sample Output:
```py "
[-1, 11]
```

:::tip Think it through!
Before reading the solution first think about your approach to solve the problem
:::

Thinking Approaches:
```code
if oper1 + oper2 = targetSum, then we can iterate on array and oper2 = targetSum - oper1,
If oper2 exist in the array then we just need to return oper1 & oper2.
We have to also check oper1 & oper2 cannot be same.
```
</TabItem>
<TabItem value="Solution" label="Solution">
```py showLineNumbers"
def twoNumberSum(array, targetSum):
    for n in array:
        search = targetSum - n
        if search !=n and search in array:
            return [n, search]

    return []
```
Complexity:
```code
Time complexity: O(n)
Space Complexity: O(1)
```
</TabItem>
</Tabs>

