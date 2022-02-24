def get_real_floor(n):
    # code here
    if n == 0:
        return 0
    if n < 0:
        return n
    if n >= 13:
        return (n-2)
    elif n > 0:
        return (n-1)
