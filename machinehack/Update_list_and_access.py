list1 = [1,2,3,4,5,6,7,8]
K = 4

def delete_access(list1,K):
    del list1[K]
    del list1[0]
    del list1[-1]
    print(list1)

delete_access(list1, K)

