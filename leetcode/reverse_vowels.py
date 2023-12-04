class Solution:
    def reverseVowels(s: str) -> str:
        vowels = ["a", "e", "i", "o", "u"]
        for i in vowels:
            if i in s:
                print(i)


str = "leetcode"
Solution.reverseVowels(str)
