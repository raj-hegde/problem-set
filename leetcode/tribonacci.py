# Need to understand the class and its characteristics
class Solution:
    def tribonacci(n):
        if n == 0:
            return 0
        elif n == 1 or n == 2:
            return 1
        else:
            return Solution.tribonacci(n-3) + Solution.tribonacci(n-1) + Solution.tribonacci(n-2)

print(Solution.tribonacci(25))
