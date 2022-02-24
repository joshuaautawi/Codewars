def solution(a, b):
    if not a:
        return b
    if not b:
        return a
    l1 = len(a)
    l2 = len(b)
    if l1 > l2:
        return b+a+b
    else:
        return a+b+a
