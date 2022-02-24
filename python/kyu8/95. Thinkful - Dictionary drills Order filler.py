def fillable(stock, merch, n):
    # Your code goes here.
    if stock.get(merch) == None:
        return False
    return True if stock[merch] >= n else False
