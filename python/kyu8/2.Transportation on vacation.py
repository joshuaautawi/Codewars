def rental_car_cost(d):
    # your code
    x = d*40
    if d >= 7 :
        return x-50
    if d >= 3 :
        return x-20
    return x