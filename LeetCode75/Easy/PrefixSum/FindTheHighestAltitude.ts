function largestAltitude(gain: number[]): number {
  let largest: number = 0;
  let sum: number = 0;
  for (let num of gain) {
    sum += num;
    largest = Math.max(largest, sum);
  }

  return largest;
}
