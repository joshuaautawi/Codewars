import re


def str_count(strng, letter):
    # Your code here ;)
    return len(re.findall(letter, strng))
