class Solution:
    def isValid(s: str) -> bool:
        stack = []
        dict = {"(" : ")", "{" : "}", "[" : "]"}
        for char in s:
            try:
                stack.append(dict[char])
               # print(stack)
            except KeyError:
                pass
        if not stack:
            return False
        else:
            for char in stack:
                if char in s:
                    return True
                else:
                    return False

s = "([)]" #cases from leet code
print(Solution.isValid(s))


