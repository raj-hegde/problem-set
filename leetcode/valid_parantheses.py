class Solution:
    def isValid(s: str) -> bool:
        dict = {"(" : ")", "{" : "}", "[" : "]"}
        for char in s:
            if char in dict.():
                return True
            else:
                return False
                
    
s = "{}" #cases from leet code
print(Solution.isValid(s))


