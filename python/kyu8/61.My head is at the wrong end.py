def fix_the_meerkat(arr):
    r = []
    for i in range(len(arr)):
        r.append(arr[len(arr)-1-i])
    return r
