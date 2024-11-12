function smallestNumber(n: number, t: number): number {
  while (true) {
    let product: number = 1;
    let term = n;
    while (term > 0) {
      product = product * (term % 10);
      term = Math.floor(term / 10);
    }
    if (product % t == 0) break;

    n++;
  }

  return n;
}

console.log(smallestNumber(10, 2));
console.log(smallestNumber(15, 3));
