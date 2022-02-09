def each_cons(lst, n):
    # your solution her
    d = []
    if n > 1:
        for i in range(len(lst)-n+1):
            temp = []
            for x in range(0, n):
                temp.append(lst[x+i])
            d.append(temp)
    if n == 1:
        for i in range(len(lst)):
            temp = []
            for x in range(0, n):
                temp.append(lst[x+i])
            d.append(temp)
    return d
