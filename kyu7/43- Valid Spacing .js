function validSpacing(s) {
    // write your code here
    if(s=='') return true
    const l = s.split(' ').filter(e=> e=='')
    return l.length == 0 ? true :false
  }