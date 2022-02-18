def same_case(a, b):
    # your code here
    n = ord(a)
    c = ord(b)
    if n >= 65 and n <= 90:
        r1 = 1
    elif n >= 97 and n <= 122:
        r1 = 0
    else:
        return -1
    if c >= 65 and c <= 90:
        r2 = 1
    elif c >= 97 and c <= 122:
        r2 = 0
    else:
        return -1
    if r1 == r2:
        return 1
    else:
        return 0
