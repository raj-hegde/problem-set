class solution:
    def gcdOfString(str1: str, str2: str) -> str:
        len1, len2 = len(str1), len(str2)

        def valid(k):
            if len1 % k or len2 % k:
                return False
            n1, n2 = len1 // k, len2 // k
            base = str2[:k]
            return str1 == n1 * base and str2 == n2 * base
        for i in range(min(len1, len2), 0, -1):
            if valid(i):
                return str2[:i]
        return ""

    str1 = "ABABABABABAB"
    str2 = "ABAB"
    print(gcdOfString(str1, str2))
