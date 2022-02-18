def html_special_chars(data):
    # your code here
    data =data.replace("&","&amp")
    data = data.replace("<", "&lt")
    data = data.replace(">", "&gt")
    data = data.replace('"', "&quot")

    return data


print(html_special_chars("<h2>Hello World</h2>"))
