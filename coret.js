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
function digital_root(n) {
  // ...
  n = n.toString()
  while(n.length != 1){
    console.log("kepanggil")
    let x = n.split("").reduce((a,b)=>Number(a)+Number(b))
    console.log(x)
    n = x.toString()
  }
  return Number(n)
}
console.log(digital_root(16))