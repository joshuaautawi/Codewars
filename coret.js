// let arr = [1,"*" , 5 , "+" , 7 , "*" , 10, "/" , 2,"+",2]

// function test (a){
//   let r = [] 

//   for(let i = 1 ; i < arr.length ;i+=2){

//   } 
  
// }
// console.log(test(arr))

function likes(names) {
  // TODO
  if(names.length == 0) return 'no one likes this'
  if(names.length == 1) return `${names[0]} likes this`
  if(names.length >=4){
    return `${names[0]}, ${names[1]} and ${names.length-2} others likes this`
  }
  else if (names.length < 4){
    return `${names.slice(0,names.length - 1).join(', ')} and ${names[names.length-1]} likes this`
  }

}


// function likes ( names ){
//   const l = names.length;
//   if (!l) {
//     return 'No one likes this';
//   } else if (l === 1) {
//     return `${names[0]} likes this.`;
//   } else if (l <= 4) {
//     return `${names.slice(0, l - 1).join(', ')} and ${names[l - 1]} like this.`;
//   }
//   return  `${names.slice(0, 2).join(', ')} and ${l - 2} others like this.`;
// }

console.log(likes(["Alex", "Jacob"]))
