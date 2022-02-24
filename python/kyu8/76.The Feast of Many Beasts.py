def feast(beast, dish):
    # your code her
    if beast[0] != dish[0]:
        return False
    if (beast[len(beast)-1] != dish[len(dish)-1]):
        return False
    return True
