
def remove(s):
    for i in range(len(s)):
        if s[len(s)-1-i] != "!":
            return s[0:len(s)-i]