puzzle2 = open("/home/rajeev/personal/advent_code/advent2020/adventpuzzle_2.txt", "r")
temp = 0
x = []
count = []
match = []
while puzzle2 == EOFError:
    break
    line =  puzzle2.readline()        
    for i in line:
        if i.isalpha():
            match.append(i)
        if i.isdigit():
            count.append(i)
    print(count, match)
# for i in range(1, len(match)):
#     if match[0] == match[i]:
#         temp += 1
# if temp == count[0] and count[1]:
#     print("password valid")
# else:
#     print("password does not match")

