function twinPrime(n) {
  const isPrime = (c) => {
    for (let i = 2; i * i <= c; i++) {
      if (c % i == 0) return false;
    }
    return c > 1;
  };
  let temp;
  let next;
  let counter = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      if (!temp) {
        temp = i;
        next = i;
      } else {
        if (next - temp == 2) {
          counter++;
        }
        temp = next;
        next = i;
        console.log(temp,next)
        
      }
    }
    
  }

  return counter;
}

console.log(twinPrime(12));
