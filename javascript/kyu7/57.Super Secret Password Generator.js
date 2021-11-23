var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
  //TODO: Make that password super secret
    superSecretChars.forEach(e=>{
      password = password.replace(new RegExp(e[0],"gi"),e[1])
    })
    return password
}

