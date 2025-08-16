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
 You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure. 

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth First Search approach (specifically pre-order traversal), and appends the names of all nodes to the input array. The method should return the input array.

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

class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        # Write your code here.

```
Complexity:
```code
Time complexity: O(n)
Space Complexity: O(n): Since we need to create a brand new array with n elements as we can't modify the input array.
```
</TabItem>
</Tabs>

