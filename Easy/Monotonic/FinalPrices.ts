function finalPrices(prices: number[]): number[] {
  for (let i = 0; i < prices.length - 1; i++) {
    let j: number = i + 1;
    while (prices[j] > prices[i]) j++;

    if (prices[j] <= prices[i]) {
        prices[i] -= prices[j];
    }
  }

  return prices;
}

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([10, 1, 1, 6]));