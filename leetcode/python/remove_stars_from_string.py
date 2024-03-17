class Solution:
    def removeStars(self, s: str) -> str:
        temp = list(s)
        for i in range(len(temp)-1):
            if temp[i] == '*':
                temp.pop(i)
                temp.pop(i-1)
                
        print(temp)
                


        
self = None
s = "erase*****"
Solution.removeStars(self, s)