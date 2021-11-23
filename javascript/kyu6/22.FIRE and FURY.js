var fireAndFury = function(tweet) {
    // Your code here
    const r = /[^efiruy]/gi
    if(tweet.match(r)) return "Fake tweet."
    const rex = /fire|fury/gi
    let res = ""
    let fire =0
    let fury =0
    if(tweet.match(rex)){
      const result = tweet.match(rex)
      for(let i = 0 ; i < result.length ; i++ ){
        if(result[i] != result[i+1]){
    
          if(result[i]== "FIRE"){
            fire ++
            res += `You ${"and you ".repeat(fire-1)}are fired! `
            
          } 
          if(result[i] == "FURY") {
            fury++
            res += `I am ${"really ".repeat(fury-1)}furious. `
          }
          fire = 0
          fury = 0 
        }
        else if ( result[i] == result[i+1]){
          if(result[i]== "FIRE"){
            fire++
          }
          else fury++
        }
      }
    }
    return res ? res.slice(0,res.length-1) : "Fake tweet."
  }
  
  