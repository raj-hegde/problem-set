from typing import List
class Solution:
  def longestCommonPrefix(self, strs: List[str]) -> str:
    prefix = ''

    if not strs:
      return prefix

    for i in range(len(strs[0])):
      char = strs[0][i]
      for j in range(1, len(strs)):
        if i == len(strs[j]) or strs[j][i] != char:
          return prefix
      
      prefix += char
    return prefix




  
strs = ["flower","flow","flight"]
#strs = ["dog","racecar","car"]
self = None
print(Solution.longestCommonPrefix(self, strs))

