def human_years_cat_years_dog_years(human_years):
    # Your code here
    dog = 0
    cat = 0
    for i in range(human_years):
        if i == 0:
            dog += 15
            cat += 15
        elif i == 1:
            dog += 9
            cat += 9
        else:
            dog += 5
            cat += 4
    return [human_years, cat, dog]
