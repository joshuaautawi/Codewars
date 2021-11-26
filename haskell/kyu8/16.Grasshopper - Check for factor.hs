module CheckFactor where

checkForFactor :: Int -> Int -> Bool
checkForFactor base factor = if(base `mod` factor == 0) then True else False