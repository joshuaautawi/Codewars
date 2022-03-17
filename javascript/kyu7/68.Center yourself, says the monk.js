function center(strng, width, fill = " ") {
  if (strng.length > width) return strng;
  const num = width - strng.length;
  const left = fill.repeat(Math.ceil(num / 2));
  const rigth = fill.repeat(Math.floor(num / 2));
  return left + strng + rigth;
}
