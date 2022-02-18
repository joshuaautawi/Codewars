def multi_table(number):
    s = ""
    for i in range(10):
        r = "" + str(i+1) + " * " + str(number) + \
            " = " + str((i+1)*number)+"\n"
        s += r
    return s[:-1]
