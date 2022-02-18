def calculate_age(year_of_birth, current_year):
    if current_year - year_of_birth == 0:
        return 'You were born this very year!'
    if current_year - year_of_birth == 1:
        return 'You are 1 year old.'
    if current_year - year_of_birth == -1:
        return 'You will be born in 1 year.'
    return f"You are {current_year - year_of_birth} years old." if (current_year - year_of_birth) > 0 else f"You will be born in {year_of_birth-current_year} years."
