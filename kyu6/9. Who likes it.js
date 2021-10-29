function likes(names) {
    // TODO
    if(names.length == 0) return 'no one likes this'
    if(names.length == 1) return `${names[0]} likes this`
    if(names.length >=4){
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
    else if (names.length < 4){
      return `${names.slice(0,names.length - 1).join(', ')} and ${names[names.length-1]} like this`
    }
  
  }
  