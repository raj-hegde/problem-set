import re
class Solution:
    # def isPalindrome(self, s: str) -> bool:
    #   let_list = ""
    #   if s.isalpha() and s == s[::-1]:
    #     return True
    #   else:
    #     for i in range(0, len(s)):
    #       if s[i].isalpha():
    #         let_list += s[i] #remove everything except alphabet
    #   let_list = let_list.lower()
    #   if let_list == let_list[::-1]:
    #     return True
    #   else:
    #     return False
      def isPalindrome(self, s: str) -> bool:
        output_str =  re.sub("[^a-zA-Z0-9]+", "", s)
        output_str = output_str.lower()
        if output_str == output_str[::-1]:
          return True
        else:
          return False
        

s = "race a car"
self = None
print(Solution.isPalindrome(self, s)) #could use regex for removing spaces and special characters
