def fillable(stock, merch, n):
    # Your code goes here.
    inv = {
        'football': 4,
        'boardgame': 10,
        'leggos': 1,
        'doll': 5
    }
    return True if inv[stock] >= n else False


print(fillable())