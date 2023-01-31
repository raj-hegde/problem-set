class Solution:
    def isValid(s: str) -> bool:
        stack = []
        dict = {"(" : ")", "{" : "}", "[" : "]"}
        
s = "([)]" #cases from leet code
print(Solution.isValid(s))


