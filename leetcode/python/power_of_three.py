class Solution:
  def ispowerofthree(n: int) -> bool:
    if n < 1:
      return False
    if n % 3 == 0:
      return Solution.ispowerofthree(n//3)
    if n == 1:
      return True
    return False
n = 243

print(Solution.ispowerofthree(n))

# there is one more soln using log Log(n) / Log(3), but need to research more
# as division could return float values.

