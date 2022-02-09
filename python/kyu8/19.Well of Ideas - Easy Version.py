import re

def well(x):
    # your code here
    txt = "".join(x)
    g = re.findall("good", txt)
    if len(g) > 2 :
        return "I smell a series!"
    elif (len(g)>0):
        return "Publish!"
    else :
        return "Fail!"

