---
slug: valudate_sequence
title: Validate Subsequence
authors: [oggy]
tags: [coding_interview, easy]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Problem" label="Problem" default>
Given two non-empty arrays of integers, write a function that determines wheteher the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the number [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single numbers in the array and the array itself are both valid subsequence of the array.

Sample Input

```py
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
```

Sample Output
```py
true
```
:::tip Think it through!
Before reading the solution first think about your approach to solve the problem
:::

Thinking Approaches:
```code
Think about hare & rabbit story, in this problem create two index in which 1 indexes move faster then another.
ar_idx tracks the elements which has already been visited, whereas seq_idx tracks element in sequence.
if seq_idx reaches to the length of the sequence that means sequence is a subsequence else not.
```

</TabItem>
<TabItem value="Solution" label="Solution">
```py
def isValidSubsequence(array, sequence):
    # Write your code here.
    seq_idx, ar_idx = 0, 0

    while ar_idx < len(array) and seq_idx < len(sequence):
        if sequence[seq_idx] == array[ar_idx]:
            seq_idx += 1
        ar_idx += 1
    return len(sequence) == seq_idx

```
</TabItem>
</Tabs>