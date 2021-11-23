function getParticipants(handshakes){
    // ...
    if(handshakes == 0 ) return 1
    if(handshakes == 1) return 2
    let c = 1
    let result = 1
    while(result <= handshakes){
      result+= c
      c += 1
    }
    return c
  } 