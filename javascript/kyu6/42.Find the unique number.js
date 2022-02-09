function findUniq(arr) {
    // do magic
    let first = arr[0];
    let second;
    for (let i = 0; i < arr.length; i++) {
      if (first != arr[i]) {
        second = arr[i];
        if (arr[i + 1] == first) return second;
        if (arr[i + 1] == second) return first;
        if (i == arr.length - 1) return arr[i];
      }
    }
  }