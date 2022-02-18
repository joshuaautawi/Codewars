def update_light(current):
    if current == "green":
        return "yellow"
    if current == "yellow":
        return "red"
    else:
        return "green"
