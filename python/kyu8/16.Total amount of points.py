def points(games):
    num = 0
    for i in games:
        if int(i[0]) > int(i[2]):
            num += 3
        elif int(i[0]) == int(i[2]):
            num += 1
    return num
