puzzle1 = open("/home/rajeev/personal/advent_code/advent2020/adventpuzzle_1.txt", "r")
puzzle1_data = []
for x in puzzle1:
    puzzle1_data.append(int(x)) 

for i in puzzle1_data:
    for j in puzzle1_data:
        for h in puzzle1_data:
            if i + j + h == 2020:
                f_value, s_value, t_value = i, j, h

print(f_value, s_value, t_value)
print(f_value * s_value * t_value)