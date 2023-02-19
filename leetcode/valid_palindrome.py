s = "A man, a plan, a canal: Panama"
let_list = []
if s.isalpha():
  print(True)
else:
  for i in range(0, len(s)):
    if s[i].isalpha():
      let_list = s[i] 
print(let_list)