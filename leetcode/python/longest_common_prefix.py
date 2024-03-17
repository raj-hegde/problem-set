from typing import List
class Solution:
  def longestCommonPrefix(self, strs: List[str]) -> str:
    # This code is awesome with startswith function, which I did not know about
      a=strs[0]
      for i in strs:
         while not i.startswith(a):
            a=a[:-1]
            print(a)
      return a       
    
    # prefix = ''

    # if not strs:
    #   return prefix

    # for i in range(len(strs[0])):
    #   char = strs[0][i]
    #   for j in range(1, len(strs)):
    #     if i == len(strs[j]) or strs[j][i] != char:
    #       return prefix
      
    #   prefix += char
    # return prefix

strs = ["flower","flow","flight"]
self = None
Solution.longestCommonPrefix(self, strs)
