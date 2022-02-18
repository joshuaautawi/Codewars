def distinct(seq):
    d = []
    for i in seq : 
        if i not in d :
            d.append(i)
    return d