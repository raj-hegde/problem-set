# Need to understand the class and its characteristics
class Solution:
    def tribonacci(n):
        if n == 0:
            return 0
        elif n == 1 or n == 2:
            return 1
        else:
            return tribonacci(n-3) + tribonacci(n-1) + tribonacci(n-2)

print(tribonacci(25))
