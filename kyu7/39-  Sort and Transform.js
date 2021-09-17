function sortTransform(a){
    let result = []
    result.push(String.fromCharCode(a[0],a[1],a[a.length-2],a[a.length-1]))
    a = a.sort((a,b)=>b-a)
    result.push(String.fromCharCode(a[a.length-1],a[a.length-2],a[1],a[0]))
    result.push(String.fromCharCode(a[0],a[1],a[a.length-2],a[a.length-1]))
    a = a.map(element => String.fromCharCode(element)).sort()
    result.push([a[0],a[1],a[a.length-2],a[a.length-1]].join(''))
    return result.join('-')
  }