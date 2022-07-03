puzzle2 = open("/home/rajeev/personal/advent_code/advent2020/adventpuzzle_2.txt, "r"")
x = []
count = []
match = []
for i in range(10):
    line = puzzle2.readline()
    #print(line)
    for i in line:
        x.append(i)
    for j in range(len(x)):
        if x[j].isdigit():
            count.append(x[j])
        
        if x[j].isalpha():
            match.append(x[j])


print(count, match)
