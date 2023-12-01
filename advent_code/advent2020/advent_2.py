import readline
puzzle2 = open("/home/rajeev/personal/advent_code/advent2020/adventpuzzle_2.txt", "r")
temp = 0
x: list[str] = []
count = []
match = []
for i in range(1):
    line: str = "6-12 f: mqcccdhxfbrhfpf"
    for i in line:
        if i.isalpha():
            match.append(i)
        if i.isdigit():
            count.append(i)
    print(count, match)
    for i in range(1, len(match)):
        if match[0] == match[i]:
            temp += 1
            print(temp)
            if temp >= int(count[0]) and temp <= int(count[1]):
                print("password valid")
            else:
                print("password does not match")
  

