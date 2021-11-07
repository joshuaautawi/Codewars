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
function arrayDiff(a, b) {
  if (b.length == 0 || a.length == 0) return a;
  let obj = {};
  const result = [];
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] ? (obj[a[i]] = obj[a[i]] + 1) : (obj[a[i]] = 1);
  }
  for (let i = 0; i < b.length; i++) {
    obj[b[i]] ? (obj[b[i]] = 0) : (obj[b[i]] = 0);
  }
  console.log(obj)
  for (let i in obj) {
    if (obj[i] > 0) {
      result.push(Number(i));
    } 
  }
  return result;
}
console.log(arrayDiff([2,2,1],[2]))