function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    // Your code goes here.
    let current = head
    let counter = 0
    while(current != null){
      current = current.next
      counter++
    }
    return counter
   }
  
  function count(head, data) {
    // Your code goes here.
    let current = head
    let counter = 0
    while(current != null){
      if(current.data == data){
        counter++
      }
      current = current.next
    }
    return counter
  }