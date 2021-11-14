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
// var oldLadySwallows = function(animals) {
//   // Your code here!
//   let arr = [ "fly","spider","bird","cat","dog","goat","cow","horse"]
//   let obj = {}
//   for(let i = 0 ;i < animals.length ; i++ ){
//     obj[animals[i]]= obj[animals[i]]+1 || 1
//   }
//   console.log(obj)
//   for(let i =0 ;i < arr.length; i++){
//     if(animals.includes(arr[i]) && !animals.includes(arr[i+1])){
//       obj[arr[i]] = obj[arr[i]]
  
//     }
//     else if(animals.includes(arr[i])){
//       obj[arr[i]] = obj[arr[i]]-1
//     }
    
//   }
//   // console.log(obj)
//   let r = []
//   for(let i in obj){
//     if(obj[i] > 0){
//       r.push(i)
//     }
//   }
//   return r;
// }


// console.log(oldLadySwallows([ 'spider', 'spider', 'spider', 'bird' ]))