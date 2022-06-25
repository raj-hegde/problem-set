s = """HackerRank.com presents "Pythonist 2". """
temp = []
g = ""
for i in s:
    if i.isalpha():
        if i.isupper():
            temp.append(i.lower())
                
        else:
            temp.append(i.upper())
    else:
        temp.append(i)
print(g.join(temp))        
