def close_compare(a, b, margin=0):
    if a < b and margin < (b-a):
        return -1
    if a-b-margin > 0:
        return 1
    else:
        return 0
