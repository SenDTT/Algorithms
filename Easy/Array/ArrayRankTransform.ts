function arrayRankTransform(arr: number[]): number[] {
  if (arr.length == 0) return [];

  let sortedArr = [...arr].sort((a, b) => a - b);
  let map: Map<number, number> = new Map();
  let rank: number = 1;

  for (let i = 0; i < sortedArr.length; i++) {
    if (!map.has(sortedArr[i])) {
      map.set(sortedArr[i], rank);
      rank++;
    }
  }

  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(map.get(arr[i])!);
  }

  return result;
}

console.log(arrayRankTransform([40, 10, 20, 30])); // [4, 1, 2, 3]
console.log(arrayRankTransform([3, 3, 3])); // [1, 1, 1]
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // [5,3,4,2,8,6,7,1,3]
console.log(arrayRankTransform([-1, -1, -1, -1, 1, 2, 3])); // [1, 1, 1, 1, 2, 3, 4]
console.log(
  arrayRankTransform([27, 46, -3, -36, 31, -14, -7, -36, 27, -14, 41, -40, 23])
); // [7,10,5,2,8,3,4,2,7,3,9,1,6]
