def enough(cap, on, wait):
    # Your code here
    result = cap-on - wait
    return -result if result < 0 else 0
