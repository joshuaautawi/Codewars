function largestPairSum(numbers)
{
  //TODO: Write your Code here
  return numbers.sort((a,b)=> b-a) ? numbers[0] + numbers[1] : numbers[0]
}