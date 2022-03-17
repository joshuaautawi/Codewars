function dotCalculator(equation) {
  equation = equation.split(" ");
  if (equation[1] == "-")
    return ".".repeat(equation[0].length - equation[2].length);
  if (equation[1] == "+")
    return ".".repeat(equation[0].length + equation[2].length);
  if (equation[1] == "*")
    return ".".repeat(equation[0].length * equation[2].length);
  if (equation[1] == "//")
    return ".".repeat(equation[0].length / equation[2].length);
}
