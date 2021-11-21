module BodyMassIndex where

bmi :: Float -> Float -> String  
bmi weight height
  |weight/height^2 <= 18.5 = "Underweight"
  |weight/height^2 <= 25.0 = "Normal"
  |weight/height^2 <= 30.0 = "Overweight"
  |otherwise =  "Obese"