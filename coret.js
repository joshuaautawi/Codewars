// var fireAndFury = function(tweet) {
//   // Your code here
//   let n = ""
//   const fire =  tweet.match(/FIRE/g)
//   fire.forEach((e,i)=>{
//     if(i==0){
//       n+= "You "
//     }
//     else{
//       n+= "and you "
//     }
//     if(i==fire.length-1){
//       n+= "are fired!"
//     }
//   })
//   let m = ""
//   const fury =  tweet.match(/FURY/g)
//   fury.forEach((e,i)=>{
//     if(i==0){
//       m+= "I am "
//     }
//     else{
//       m+= "really "
//     }
//     if(i==fury.length-1){
//       m+= "furious"
//     }
//   })
//   return m
// }


// console.log(fireAndFury("FURYYYFIREYYFIRE"))

function findUnique(numbers) {
  // Return the unique number
  let result = {}
  numbers.forEach(e=>{
    result[e] = result[e]+1 || 1
  })
  let c = Object.keys(result)
  for(let i = 0 ; i < c.length ; i++){
    if(result[c[i]] == 1){
      return Number(c[i])
    }
  }
}


console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]))
