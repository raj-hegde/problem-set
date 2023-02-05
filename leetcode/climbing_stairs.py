class Solution:
    def climbStairs(self, n:int) -> int:
        self._n = n
#         if n <= 2:
#             return n
#         else:
#             dp = [0] * (n+1)
#             dp[1] = 1
#             dp[2] = 2
#             for i in range(3, n+1):
#                 dp[i] = dp[i-1] + dp[i-2]
#             #print(dp)
#         return dp[n]
# print(climbStairs(4))
        if n <= 2:
            return n
        else:
            return Solution.climbStairs(self, n-1) + Solution.climbStairs(self, n-2)
 
print(Solution.climbStairs(self,4))





    