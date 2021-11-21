//per 10.000
const retirePlan = (monthlyIncome, interest) => {
  return (monthlyIncome * 12*100/3)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

};

console.log(retirePlan(50000000, 3));
