import os
import re


def calibration(file):
    output = []
    file_list = []
    for line in file:
        file_list.append(line)

    dict = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
    }
    for i in range(len(file_list)):
        for k, v in dict.items():
            if re.findall(k, file_list[i]):
                file_list[i] = file_list[i].replace(k, v)
        match = re.findall(r"\d", file_list[i])
        temp1 = match[0]
        temp2 = match[-1]
        output.append(int(temp1 + temp2))
    print(output, len(output))
    return sum(output)


path = os.path.dirname(__file__)
file = open(os.path.join(path, "calibration.txt"))
print(calibration(file))
