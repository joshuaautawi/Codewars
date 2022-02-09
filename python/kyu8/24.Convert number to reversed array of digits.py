def digitize(n):
    s = str(n)
    result = []
    for i in range(len(s)):
        result.append(int(s[len(s)-i-1]))
    return result