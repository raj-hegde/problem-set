from typing import List
class Solution:
    def plusOne(self, digits: List[int]) -> int:
#         res = int(''.join(map(str, digits))) + 1
#         return [int(x) for x in str(res)]
# Above code is my soln, below code is a copy from leetcode
        
        print(digits)
        if not digits:
            return [1]
        if digits[-1] == 9:
            new_digits = self.plusOne(digits[:-1]) #did not understand this code
            new_digits.append(0)
            return new_digits
        digits[-1] += 1
        return digits

digits = [4, 3, 2, 9]
self = None
print(Solution.plusOne(self, digits))