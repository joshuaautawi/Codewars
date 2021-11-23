module DrinkAbout (peopleWithAgeDrink) where

peopleWithAgeDrink :: Int -> String
peopleWithAgeDrink age
  |age < 14 = "drink toddy"
  |age < 18 = "drink coke"
  |age < 21 ="drink beer"
  |age > 20 = "drink whisky"
