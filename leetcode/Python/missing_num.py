# def missingNumber(nums):
#     num = sorted(nums)
#     for i in range(len(num), 0, -1):
#         if i not in num:
#             return i

# nums = [9,6,4,2,3,5,7,0,1]
# print(missingNumber(nums))  This code works too, but I think it is taking too much time 
# in a worst case scenario as it linear search

def missinNumber(nums):
    return  (len(nums) * (len(nums) + 1) // 2) - sum(nums)

nums = [3, 0, 1]
print(missinNumber(nums))  # This is not my soln

