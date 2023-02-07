from typing import List
class Solution:
  def longestCommonPrefix(self, strs: List[str]) -> str:
    length = len(strs)
    res = ''
    for i in range(1, length-1):
      for j in range(0, min(len(strs[i]),len(strs[i+1]))):
        if strs[i][j] == strs[i+1][j]:
          res += strs[i][j]
    return res


  
strs = ["flower","flow","flight"]
self = None
print(Solution.longestCommonPrefix(self, strs))

