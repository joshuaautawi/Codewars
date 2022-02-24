def count_by(x, n):
    """
    Return a sequence of numbers counting by `x` `n` times.
    """
    d = []
    total = x*n
    c = x
    while c <= total:
        d.append(c)
        c += x
    return d
