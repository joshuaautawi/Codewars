import re


def sp_eng(sentence):
    # your code here
    x = re.sub("[^a-zA-Z]", "", sentence)
    return True if "english" in x.lower() else False
