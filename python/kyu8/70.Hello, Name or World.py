def hello(name=""):
    if not name:
        return "Hello, World!"
    name = name.lower()
    f = name[0].upper()
    return f"Hello, {f}{name[1:]}!"