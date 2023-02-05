class Solution:
    def climbStairs(n:int) -> int:
        if n <= 2:
            return n
        else:
            return Solution.climbStairs(n-1) + Solution.climbStairs(n-2)

    print(climbStairs(4))