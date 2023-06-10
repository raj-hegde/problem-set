def plusMinus(arr):
  i, j, x = 0, 0, 0
  n = len(arr)
  for el in arr:
    if el > 0:
      i += 1
    elif el < 0:
      j += 1
    elif el == 0:
      x += 1
  return list(("{:.6f}".format(i/n), "{:.6f}".format(j/n), "{:.6f}".format(x/n)))


if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split())) #the int, input need to be understood

    for i in plusMinus(arr):
      print(i)