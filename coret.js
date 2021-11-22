function findMissingLetter(array) {
  array = array.join("")
  for (let i = 0; i < array.length; i++) {
    if((array.charCodeAt(i)+1) != (array.charCodeAt(i+1))){
      return String.fromCharCode(array.charCodeAt(i)+1)
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
