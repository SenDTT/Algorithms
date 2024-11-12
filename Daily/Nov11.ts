let items: number[][] = [
  [1, 2],
  [3, 2],
  [2, 4],
  [5, 6],
  [3, 5],
];
function maximumBeauty(items: number[][], queries: number[]): number[] {
  let answer: number[] = [];

  items.sort((a, b) => a[0] - b[0]);
  let maxBeauty: number = 0;
  let beauty: number[] = [];

  for (let i = 0; i < items.length; i++) {
    maxBeauty = Math.max(maxBeauty, items[i][1]);
    beauty.push(maxBeauty);
  }

  for (let i = 0; i < queries.length; i++) {
    let left = 0;
    let right = items.length - 1;
    let bestBeauty: number = 0;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (items[mid][0] > queries[i]) {
        right = mid - 1;
      } else {
        bestBeauty = beauty[mid];
        left = mid + 1;
      }
    }

    answer.push(bestBeauty ?? 0);
  }

  return answer;
}

console.log(maximumBeauty(items, [1, 2, 3, 4, 5, 6]));