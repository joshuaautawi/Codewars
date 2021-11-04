// let arr = [1,"*" , 5 , "+" , 7 , "*" , 10, "/" , 2,"+",2]

// function test (a){
//   let r = [] 

//   for(let i = 1 ; i < arr.length ;i+=2){

//   } 
  
// }
// console.log(test(arr))


// function maxSum(root) {
//   if(root == null) return 0
//   let main = root
//   let counter = root.value
//   let c = root.value
//   let n = 0 
//   while(root.right != null){
//     n++
//     if(n>1){
//       counter+= root.left.value
//     }
//     else{
//       counter+= root.right.value
//     }
//     root = root.right
//   }
//   while(main.left != null){
//     n++
//     if(n>1){
//       c+= main.right.value
//     }
//     else{
//       c+= main.left.value
//     }
//     main = main.left
  
//   }

  
//   return c>counter ?c : counter ; // TODO: implementation

// }

function getScore(n) {
  // do your magic here
  let total = 0
  let add = 50
  for(let i =1 ; i<= n;i++){
    
    total+= add
    add = add+50
  }
  return total
}

console.log(getScore(3))