records = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]
scores = []
temp = []
for i in range(len(records)):
    scores.append(records[i][1])
scores.sort()
print(scores)
s_low = scores[1]
for i in range(len(records)-1):
    if scores[0] == s_low:
        s_low = scores[i+1] 

for i in range(len(records)):
    if records[i][1] == s_low:
        temp.append(records[i][0])
    
                      
temp.sort()
for i in temp:
    print(i) 

