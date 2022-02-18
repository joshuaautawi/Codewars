import re
def validate_hello(greetings):
    #your code here
    return False if re.search("hello|ciao|salut|hallo|hola|ahoj|czesc",greetings.lower()) == None else True
