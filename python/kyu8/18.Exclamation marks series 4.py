def remove(s):
    str =""
    for i in range(0,len(s)):
        if s[i] != "!" : 
            str+=s[i]
    return str+"!"
