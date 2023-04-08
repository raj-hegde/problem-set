def miniMaxSum(arr):
    # Write your code here
  print(sum(arr) - min(arr),  sum(arr) - max(arr))

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)