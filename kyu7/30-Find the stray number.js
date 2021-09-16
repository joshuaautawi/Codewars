function stray(numbers) {
 
    numbers= numbers.sort((a,b)=> b-a)
    return numbers[0] != numbers[1] ? numbers[0] : numbers[numbers.length-1]
     
  }