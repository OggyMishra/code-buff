---
slug: non_constructible_change
title: Non Constructible Change
authors: [oggy]
tags: [coding_interview, easy]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Problem" label="Problem" default>
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum ampunt of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e. You can have multiple coins of the same value)
For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

Sample Input:
```py "
array = [5, 7, 1, 1, 2, 3, 22]
```

Sample Output:
```py "
20
```

:::tip Think it through!
Before reading the solution first think about your approach to solve the problem
:::

Thinking Approaches:
```code
First approach would be create every single amount of change, starting at 1 and going up until you eventually can't create the amount.

Second approach would be to first sort the array, since you are trying to find the minimum amount of change that you can't create, it make sense to consider the smallest coins first.

Here the trick tis that if you take example  coins = [1, 2, 4]. with this set of coins we can create 1, 2, 3, 4, 5, 6, 7 cents worhh of change. Now if we were to add a coin of value 9 to this set, we would not be able to create 8 cents, However if we were to add a coint of value 7, we would be able to create 8 cents, and we would also be able to create all valyes of changes from 1 to 15.
So this is mathmatical problem hidden in this problem, that any new numbers that you get from the original list if it's greater then the highest change + 1 that you already have then it's not possible to create highest change + 1 element.
You have to think this condition properly and implement it.
```
</TabItem>
<TabItem value="Solution" label="Solution">
```py showLineNumbers"
def nonConstructibleChange(coins):
    # Write your code here.
    # sort the coins first.
    coins.sort()
    result = [0]
    min_change = 0
    for coin in coins:
        if coin > min_change + 1:
            break
        min_change += coin
    return min_change + 1

```
Complexity:
```code
Time complexity: O(nlogn), since I have used python default sorting function, again this is something that needs to be checked with interviewer if they are ok, otherwise user merge sort or any other sorting algorithm.
Space Complexity: O(1) since we haven't used any other variable, please note that in case you have to implement your own sorting algo this will change as it will require you to create an array of size n.
```
</TabItem>
</Tabs>

