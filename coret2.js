// function diagonalsOfSquare(array) {
//     // your code

//   }

//   console.log(diagonalsOfSquare(["abcd", "kata", "abcd", "qwer"]))


// function closestPower(n) {
//   //Here we go...
//   if(n <= 4 ) return 4
//   let result; 
//   for(let i = 2 ; i**2 <= n ;i++){
//     if()
//   }
//   return 

// }

// console.log(closestPower(4))
function narcissistic(value) {
  // Code me to return true or false
  value = value.toString()
  const len = value.length 
  let total = 0
  for(let i = 0 ; i < len ; i++){
    total += Number(value[i] ** len)
  }
  return total== value ? true : false
}

console.log(narcissistic(1652))


