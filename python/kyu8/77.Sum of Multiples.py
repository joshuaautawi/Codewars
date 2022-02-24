import math


def sum_mul(n, m):
    if n == 0 or m == 0 or n < 0 or m < 0:
        return "INVALID"
    if n > m:
        return 0
    if n == m:
        return 0
    if m % n == 0:
        c = int(m/n-1)
    else:
        c = math.floor(m/n)
    total = 0
    current = n
    for i in range(c):
        total += current
        current += n
    return total
