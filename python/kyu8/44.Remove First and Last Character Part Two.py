import re

def array(string):
    str = ""
    result = re.sub(" ", "", string).split(",")
    for i in range(len(result)):
        if i is not 0 and i is not len(result)-1:
            str += result[i]
            str += " "

    return None if len(result) <= 2 else str[0:len(str)-1]