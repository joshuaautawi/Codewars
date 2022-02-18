def find_difference(a, b):
    r1 = 1
    r2 = 1
    for i in a:
        r1 *= i
    for y in b:
        r2 *= y
    return abs(r1-r2)
