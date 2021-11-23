function giveChange(amount) {
    let oneDollar = 0
    let fiveDollar = 0
    let tenDollar = 0
    let twentyDollar = 0 
    let fiftyDollar = 0
    let HundredDollar = 0
    while(amount > 0) {
        if(amount >= 100) {
            HundredDollar ++
            amount -= 100
        }
        else if(amount >= 50){
            fiftyDollar++
            amount -= 50
        } 
        else if(amount >= 20) {
            amount -= 20
            twentyDollar++
        }
        else if(amount >= 10){
            amount -= 10
            tenDollar++
        } 
        else if(amount >= 5){
            fiveDollar++
            amount -= 5
        } 
        else if(amount >= 1){
            oneDollar++
            amount -= 1
        } 

    }
    return [oneDollar,fiveDollar,tenDollar,twentyDollar,fiftyDollar,HundredDollar]
}
