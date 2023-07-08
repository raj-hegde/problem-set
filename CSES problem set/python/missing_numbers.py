n = int(input())
a = set([x for x in range(1, n+1)])
b = set([int(x) for x in input().split()])
print(next(iter(a-b)))