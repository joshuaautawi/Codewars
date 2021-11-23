function solution(str) {
  if (str == "") return [];
  let r = [ ]
  for (let i = 0; i < str.length; i+=2) {
    let s = str[i+1] ? str[i+1]:"_"
    let t = str[i]+s
    r.push(t)
  }
  return r
}


console.log(solution("abcdf"))