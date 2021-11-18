function canBake(available, recipe) {
  let str = "Not enough ingredients: need";
  // console.log(str.length)
  console.log(available, recipe);

  if (Object.keys(available).length == 0 && Object.keys(recipe).length == 0)
    return "You can bake";
  if (Object.keys(available).length == 0)
    return "Not enough ingredients: need oil, flour, sugar, milk";
  for (let i in recipe) {
    let x = recipe[i].split(" ");
    let num = x[0].split("/").reduce((a, b) => a / b);
  
    if (i == "oil" || i == "milk") {
      if (x[1] == "tbsp") {
        let r = x[0] * 15;
        console.log(r);
        if (Number(available[i].split(" ")[0]) < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "cup") {
        let r = num * 220;
        if (Number(available[i].split(" ")[0]) < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "tsp") {
        let r = x[0] * 5;
        if (Number(available[i].split(" ")[0]) < Number(r)) {
          str += ` ${i},`;
        }
      }
    } else if (i == "flour" || i == "sugar") {
      if (x[1] == "tbsp") {
        let r = x[0] * 14;
        if (Number(available[i].split(" ")[0]) < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "cup") {
        let r = num * 200;

        if (Number(available[i].split(" ")[0]) < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "tsp") {
        let r = x[0] * 5;
        if (Number(available[i].split(" ")[0]) < Number(r)) {
          str += ` ${i},`;
        }
      }
    }
  }
  if (str.length > 28) return str.slice(0, str.length - 1);
  return "You can bake";
}
let availables = {
  oil: "100 ml",
  flour: "100 g",
  sugar: "100 g",
  milk: "700 ml",
};
let recipes = {
  oil: "2 cup",
  flour: "8/4 cup",
  sugar: "16 tbsp",
  milk: "45 tsp",
};

console.log(canBake(availables, recipes));
