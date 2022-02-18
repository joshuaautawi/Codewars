def define_suit(card):
    # Good luck
    if card[len(card)-1] == "C" :
        return "clubs"
    if card[len(card)-1] == "D" :
        return "diamonds"
    if card[len(card)-1] =="H" :
        return "hearts"
    if card[len(card)-1] == "S":
        return "spades"