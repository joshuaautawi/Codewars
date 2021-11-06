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

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
  
}

function sortedInsert(head, data) {
  // Your code goes here.
  // Remember to return the head of the list.
  let current = head
  let prev = null
  while(current != null){
    if(data < current.data){
      let item = new Node(data)
      prev.next = item
      item.next = current

    }
    prev = current
    current = current.next
  }
  return head
}



let arr = []