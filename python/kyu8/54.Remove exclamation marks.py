import re

def remove_exclamation_marks(s):
    #your code here
    return re.sub("!","",s)