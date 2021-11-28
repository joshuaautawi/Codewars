module AreaPerimeter where

areaOrPerimeter :: Double -> Double -> Double
areaOrPerimeter x y 
  | x == y = x * y
  | otherwise = 2*x + 2*y