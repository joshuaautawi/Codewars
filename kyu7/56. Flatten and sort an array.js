
function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.reduce((a,b)=>{
      return a.concat(b)
    }).sort((a,b)=>a-b)
  }