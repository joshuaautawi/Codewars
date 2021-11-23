function battle(x, y) {
    // Lets the battle begin!
    let SumOfTheString = (f)=> {
        f=f.toLowerCase().split('')
        let total = 0
        f.forEach(element=> {
            total+=(element.charCodeAt(0) - 96)
        })
        return total
    }
    return SumOfTheString(x) > SumOfTheString(y) ? x : SumOfTheString(x) == SumOfTheString(y) ? "Tie!" :  y
  }