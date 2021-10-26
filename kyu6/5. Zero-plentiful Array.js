function zeroPlentiful(arr){
    let result = 0
    let n = 0
    for(let i = 0 ; i<arr.length ; i++){
      if(arr[i]== 0){
        n++
      }
      else {
        n = 0
      }
      if(arr[i+1] != 0 && arr[i]==0 && n>0 && n <4 ) return 0
      if(n >=4 && arr[i+1] != 0){
        result ++
      }
    }
    return result;
  }
  
  console.log(zeroPlentiful([ 0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0 ]))