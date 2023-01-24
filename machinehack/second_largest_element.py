list1 = [1,2,3,3,4,1,7,8,3]

def del_duplicate(list1):
    l = list(set(sorted(list1)))
    print(l[-2])



del_duplicate(list1)
