class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return format(int(a, 2) + int(b, 2), "b")
        # Using bin instead of format beats both memory and time


a = "11"
b = "1"
self = None
print(Solution.addBinary(self, a, b))

# trying git update from fleet
