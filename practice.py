t = int(input())
print(t)
sum = 0
for a in range(t):
    n = int(input().strip())
    for j in range(n):
        if j % 3 == 0 or j % 5 == 0:
            sum += j
print(sum)