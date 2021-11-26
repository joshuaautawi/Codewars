//return the total number of smiling faces in the array
function countSmileys(arr) {
  let counter = 0;
  arr.forEach((e) => {
    if (e.length == 3) {
      if (e[0] == ":" || e[0] == ";") {
        if (e[1] == "-" || e[1] == "~") {
          if (e[2] == ")" || e[2] == "D") counter++;
        }
      }
    } else {
      if (e[0] == ":" || e[0] == ";") {
        if (e[1] == ")" || e[1] == "D") counter++;
      }
    }
  });
  return counter;
}
