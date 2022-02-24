def generate_range(min, max, step):
    d = []
    while min <= max:
        d.append(min)
        min += step
    return d
