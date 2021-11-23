function factorial(n)
{
  // Calculate the factorial here
  if(n<0 || n> 12) throw new RangeError
  let r = 1
  for(let i = 1 ;i< n+1 ; i++){
    r*= i
  }
  return r
}
