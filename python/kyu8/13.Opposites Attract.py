def lovefunc(flower1, flower2):
    if flower1 + flower2 == 0:
        return False
    if flower1 % 2 == 0:
        if flower2 % 2 != 0:
            return True
    if flower1 % 2 != 0:
        if flower2 % 2 == 0:
            return True
    return False
