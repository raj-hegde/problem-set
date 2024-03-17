# finding the gcd, can also use math.gcd
def gcd(a, b):
    if b == 0:
        return a 
    return gcd(b, a % b)

def gcdOfStrings(str1: str, str2: str) -> str:
    # compare the strings by adding them
    if str1 + str2 == str2 + str1:
        return str1[:gcd(len(str1), len(str2))]
    return ""

    
        
str1 = "ABABABAB"
str2 = "AB"

print(gcdOfStrings(str1, str2))