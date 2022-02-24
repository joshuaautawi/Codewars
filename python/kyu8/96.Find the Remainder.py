def remainder(a, b):
    print(a, b)
    if (a < 0 and b == 0) or (b < 0 and a == 0):
        return 0
    if a == 0 or b == 0:
        return None
    return a % b if a > b else b % a
