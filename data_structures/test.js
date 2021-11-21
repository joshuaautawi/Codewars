// Rp 1 - Rp 30.000 = 5%
// Rp 30.001 - Rp 100.000 = 10%
// Rp 100.001 - 200.000 = 15%
// Rp 200.001 and so on = 20%

//             5%                          10%                      15%                  20%
// --------------------------|----------------------------|------------------------|---------------------
// 0                           30k                          100k                     200k

// 24.000 = 24.000 * 5%
// 50.000 = 30.000 * 5% + 20.000 * 10%
// 140.000 = 30.000 * 5% + 70.000 * 10% + 40.000 * 15%
// 210.000 = 30.000 * 5% + 70.000 *10 % + 100.000 * 15% + 10.000 *20%

const tax = (income) => {
  let total = 0;
  let arr = [0.05, 0.1, 0.15, 0.2];
  let price = [30000, 70000, 100000];
  let i = 0;
  //
  while (income > 0) {
    if (income - price[i] > 0) {
      total += price[i] * arr[i];
      income -= price[i];
      i++;
    } else if (income - price[i] < 0) {
      total += income * arr[i];
      income -= price[i];
    }
  }
  return total;
};
console.log(tax(140000))

//   Let total = 0
// if(income > 200000)
//    Total += income *0.05
//    Income -= 30000
//    Total += income *0.1
//    Income -= 70000
//    Total += income *0.15
//    Income -= 100000
//    Total += income*0.2
// }
// Else if(income > 100000){
// 	Total += income *0.05
//    	Income -= 30000
//    	Total += income *0.1
//    	Income -= 70000
//             Total += income *0.15

// }
// Else if(income > 30000){
//   	Total += income *0.05
//    	Income -= 30000
// Total += income *0.1

// }

// Total += income *0.05
// Return total
