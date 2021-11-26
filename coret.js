function twoSum(numbers, target) {
  // ...
  for(let i = 0 ; i < numbers.length ; i++){
    for(let y = i+1 ; y < numbers.length;y++){
      if(numbers[i] + numbers[y] == target){
        return [i,y]
      }
    }
  }
}


console.log(twoSum([1, 2, 3], 4))