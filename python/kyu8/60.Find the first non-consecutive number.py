def first_non_consecutive(arr):
    # your code here
    num1 = None
    for i in range(len(arr)):
        if i == 0:
            num1 = arr[i]
        elif (num1 + 1) != arr[i]:
            return arr[i]
        else:
            num1 = arr[i]
    return None
