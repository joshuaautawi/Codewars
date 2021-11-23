const intDiff = (arr, n) => {
    // your code goes here
    console.log(`${arr} ${n}`)
    let counter = 0
    let c = 0
    let y = 0
    while(c<arr.length){
      while(y<arr.length){
        console.log(`${arr[c]} - ${arr[y]}`)
        if(arr[c]-arr[y+1] == -n ){
          counter++
          console.log(counter)
        }
        else if(arr[c]-arr[y+1] == n ){
          counter++
          // console.log(`counter`)
        }
        y++
      }
      c++
      y = c
    }
    return counter
  }