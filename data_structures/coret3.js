// var isPalindrome = function(s) {
//     let reg = /[^a-z0-9]/gi
//     s= s.toLowerCase()
//     s= s.replace(reg,"")
//     for (let i = 0 ; i < Math.floor(s.length/2);i++){
//         if(s[i] != s[s.length-1-i]){
//             return false
//         }
//     }
//     return true
// };


// console.log(isPalindrome("A man, a plan, a canal: Panama"))


var hasCycle = function(head) {
    let arr = []
    let current = head
    while(current != null){
        if(arr.includes(current.val)){
            return true
        }
        current = current.next
    }
    return false
    
};
