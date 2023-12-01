class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        output: list[bool] = []
        for i in candies:
            if i + extraCandies >= max(candies):
                output.append(True)
            else:
                output.append(False)
        return output


candies: list[int] = [4, 2, 1, 1, 2]
extraCandies: int = 1
# Need to understand the instance of class and calling a method on it
print(f"For the given array {candies}, and extraCandies {extraCandies} the output is")
print(Solution().kidsWithCandies(candies, extraCandies))
