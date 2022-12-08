class Solution:
    def isValid(s: str) -> bool:
        stack = []
        dict = {"(" : ")", "{" : "}", "[" : "]"}
        for char in s:
            if char in dict.keys():
                stack.append(dict[char])
            elif not stack and stack[-1] != char: #need explanation for stack[-1] != char
                return False
            else:
                stack.pop()
        return len(stack) == 0         
    
s = "{[]}()" #cases from leet code
print(Solution.isValid(s))


