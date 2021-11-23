function numObj(s){
    const result = []
    s.forEach(e=> {
      let obj = {}
      obj[e] = String.fromCharCode(e)
      result.push(obj)
    })
    return result
  }