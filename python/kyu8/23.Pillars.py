def pillars(num_pill, dist, width):
    if num_pill == 1:
        return 0
    n = num_pill-1
    return (n*dist*100) + ((n-1)*width)
    