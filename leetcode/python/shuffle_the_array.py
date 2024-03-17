from typing import List
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
      #getting the right answer but adding a space between each element.
      # nums1 = nums[:n]
      # nums2 = nums[n:]
      # s = []
      # for i in range(0,n):
      #   s.append(nums1[i])
      #   s.append(nums2[i])
      # print(s)

      result = [0] * (2 * n) #this is accepted but vscode still has spaces but leetcode doesn't
      for i in range(0,n):
        result[2 * i] = nums[i]
        result[2 * i + 1] = nums[n + i]
      return result



nums = [2,5,1,3,4,7]
n = 3
self = None
print(Solution.shuffle(self, nums, n))

