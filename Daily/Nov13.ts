function minimizedMaximum(n: number, quantities: number[]): number {
  quantities.sort((a, b) => a - b);
  let max: number = 0;
console.log(quantities);
  let left: number = 0;
  let right: number = quantities.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    console.log(left, quantities[left], right, quantities[right], mid, quantities[mid]);

    if (quantities[mid] <= n) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }

  return max;
}

console.log(minimizedMaximum(6, [11, 6]) == 3);
console.log(minimizedMaximum(7, [15, 10, 10]) == 5);
console.log(minimizedMaximum(2, [5, 7]) == 7);
console.log(
  minimizedMaximum(22, [25, 11, 29, 6, 24, 4, 29, 18, 6, 13, 25, 30]) === 13
); // 13
