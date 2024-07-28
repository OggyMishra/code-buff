---
slug: tournament_winner
title: Tournament Winner
authors: [oggy]
tags: [coding_interview, easy]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Problem" label="Problem" default>
There's an algorithm tournaments taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A Team recieves 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that recieves the most amount of points.

Given an array of the pairs representing the team that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results respectively. The competitions array has elements in the form of [hometeam, awayteam], where each team is a string of a most 30 characters representing the name of the team. The results array containes information about the winnder of each corresponding competition in the competiitions array. Specifically, results[i] denotes the winnder of competitions[i] where a 1 in the results array means that the home team in the corresponding competition win a 0 means that the away team won.

It's guranteed that exactly on team will win the tournament and that each team will compete against all other teams exactly once. It's also guranteed that the rournament will always have at least two teams.

Sample Input:
```py "
competitions = [
	["HTML, "C#"],
	["C#", "Python"],
	["Python", "HTML"]
]
results = [0, 0, 1]
```

Sample Output:
```py "
"Python"
# C# beats HTML, Python beats C#, and Python beats HTML.
# HTML - 0 points
# C# - 3 points
# Python - 6 points
```

:::tip Think it through!
Before reading the solution first think about your approach to solve the problem
:::

Thinking Approaches:
```code
We can use hashmap for this, as we have to maintain scores of each team. we can also use one more variable to maintain the best team, so that we can always compare the best team score with the current winner.

More advance thinking would be create a hashlist with a default empty team with score 0, so that we can compare the first team with default team and start updating results.

```
</TabItem>
<TabItem value="Solution" label="Solution">

<b>Basic code</b>
```py showLineNumbers"
def tournamentWinner(competitions, results):
    # Write your code here.
    scoring_map, best_team  = {}, None
    for idx in range(0, len(competitions)):
        if results[idx]:
            if competitions[idx][0] not in scoring_map.keys():
                scoring_map[competitions[idx][0]] = 3
            else:
                scoring_map[competitions[idx][0]] += 3

            if competitions[idx][1] not in scoring_map.keys():
                scoring_map[competitions[idx][1]] = 0
            else:
                scoring_map[competitions[idx][1]] += 0

            winner = competitions[idx][0]
            if best_team:
                if scoring_map[best_team] < scoring_map[winner]:
                    best_team = winner
            else:
                best_team = winner


        else:
            if competitions[idx][0] not in scoring_map.keys():
                scoring_map[competitions[idx][0]] = 0
            else:
                scoring_map[competitions[idx][0]] += 0

            if competitions[idx][1] not in scoring_map.keys():
                scoring_map[competitions[idx][1]] = 3
            else:
                scoring_map[competitions[idx][1]] += 3

            winner = competitions[idx][1]
            if best_team:
                if scoring_map[best_team] < scoring_map[winner]:
                    best_team = winner
            else:
                best_team = winner

    return best_team


```

<b>Advanced code</b>
```py showLineNumbers"
def tournamentWinner(competitions, results):
    # Write your code here.
    scores, best_team  = {'': 0}, ''  # set default team as '' and put a score of 0
    for idx in range(0, len(competitions)):
        winning_team = competitions[idx][0] if results[idx] == 1 else competitions[idx][1]

        if winning_team not in scores:
            scores[winning_team] = 3
        else:
            scores[winning_team] += 3

        if scores[winning_team] > scores[best_team]:
            best_team = winning_team

    return best_team
```

Complexity:
```code
Time complexity: O(n): Since we are only iterating over length of competitions array or results array.
Space Complexity: O(k): K here is the number of teams, actually it should be k+1 (1 for default team), but since its big notation it will be computed as O(k)
```
</TabItem>
</Tabs>

