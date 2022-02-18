def two_highest(arg1):
    num1 = 0
    num2 = 0
    if len(arg1) <= 2:
        return arg1
    for i in arg1:
        if i > num1:
            num2 = num1
            num1 = i
        elif i > num2 and i != num1:
            num2 = i
    return [num1, num2]
