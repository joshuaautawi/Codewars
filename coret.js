function order(words){
  // ...  
  if(!words) return ""
  let rex = /[1-9]/g
  let c = words.match(rex)
  let obj = {}
  for(let i = 0 ; i< c.length ;i++){
    obj[c[i]] = i
  }
  words = words.split(" ")
  let r = []
  for(let i in obj){
    r.push(words[obj[i]])
  }
  return r

}

console.log(order("is2 Thi1s T4est 3a"))
