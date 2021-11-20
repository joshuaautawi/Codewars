module EvenOrOdd where

evenOrOdd :: Integral a => a -> [Char]
evenOrOdd n 
  | n `mod` 2 == 0 = "Even"
  | otherwise = "Odd"