from typing import List
def bestTeamScore(scores: List[int], ages: List[int]) -> int:
        n = len(scores)
        dp = [0] * n
        ans = 0
        players = [(ages[i], scores[i]) for i in range(n)]
        players.sort(key = lambda x: x[0])#need to understand this
        for i in range(n):
            dp[i] = players[i][1]
            for j in range(i):
                if players[j][1] <= players[i][1]:
                    dp[i] = max(dp[i], dp[j] + players[i][1])
            ans = max(ans, dp[i])
        return ans
scores = [1,3,5,10,15]
ages = [1,2,3,4,5]
bestTeamScore(scores, ages)
