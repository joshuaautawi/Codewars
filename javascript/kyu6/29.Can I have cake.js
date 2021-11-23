function canBake(available, recipe) {
  let str = "Not enough ingredients: need";
  // console.log(str.length)
  if (Object.keys(available).length == 0 && Object.keys(recipe).length == 0)
    return "You can bake";
  if (Object.keys(available).length == 0)
    return "Not enough ingredients: need oil, flour, sugar, milk";

  for (let i in recipe) {
    let x = recipe[i].split(" ");
    let num = x[0].split("/").reduce((a, b) => a / b);
    let a = Number(available[i].split(" ")[0]);

    if (i == "oil" || i == "milk") {
      if (x[1] == "tbsp") {
        let r = x[0] * 15;
        if (a < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "cup") {
        let r = num * 220;
        if (a < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "tsp") {
        let r = x[0] * 5;
        if (a < Number(r)) {
          str += ` ${i},`;
        }
      }
    } else if (i == "flour" || i == "sugar") {
      if (x[1] == "tbsp") {
        let r = x[0] * 14;
        if (a < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "cup") {
        let r = num * 200;

        if (a < Number(r)) {
          str += ` ${i},`;
        }
      } else if (x[1] == "tsp") {
        let r = x[0] * 5;
        if (a < Number(r)) {
          str += ` ${i},`;
        }
      }
    }
  }

  if (str.length > 28) return str.slice(0, str.length - 1);
  return "You can bake";
}
