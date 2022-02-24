import re


def isDigit(string):
    # 11ELF
    if not string:
        return False
    if string[0] == "-":
        x = re.sub("[0-9.-]", "", string)
    else:
        x = re.sub("[0-9.]", "", string)
    return False if len(x) > 0 else True
