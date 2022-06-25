n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split() # what is '*' in the statement
    scores = list(map(float, line))
    student_marks[name] = scores

query_name = input()
temp = student_marks[query_name]
sum = 0
for i in temp:
    sum += float(i)

avg = sum / len(temp)
print("{0:.2f}".format(avg))






