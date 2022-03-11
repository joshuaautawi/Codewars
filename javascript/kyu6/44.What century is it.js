function whatCentury(year) {
  // code must go here
  const num = Math.ceil(year / 100);
  if (num <= 20) {
    if (num == 1) return num + "st";
    if (num == 2) return num + "nd";
    if (num == 3) return num + "rd";
    else return num + "th";
  } else if (num.toString()[1] == "1") {
    return num + "st";
  } else if (num.toString()[1] == "2") {
    return num + "nd";
  } else if (num.toString()[1] == "3") {
    return num + "rd";
  } else {
    return num + "th";
  }
}
