module YesNo where

boolToWord :: Bool -> String
boolToWord x 
  |x == True = "Yes"
  |x == False = "No"