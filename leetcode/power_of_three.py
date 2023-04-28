class Solution:
  def isPowerOfThree(n: int) -> bool:
    if n < 1:
      return False
    elif n / 3 == 1:
      return True
    return Solution.isPowerOfThree(n/3)

n = 21
print(Solution.isPowerOfThree(n))
      