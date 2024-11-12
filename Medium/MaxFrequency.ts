function maxFrequency(
  nums: number[],
  k: number,
  numOperations: number
): number {
  let left = -k;
  let maxFrequency: number = countMaxFrequency(nums);
  let countOperations: number = 1;

  while (left <= k && countOperations <= numOperations) {
    nums[nums.length - countOperations] += left;

    let count = countMaxFrequency(nums);
    if (count > maxFrequency) {
      maxFrequency = count;
    }

    left++;
    countOperations++;
  }

  return maxFrequency;
}

function countMaxFrequency(nums: number[]) {
  let result: number = 0;
  let maxNum: number = 0;
  for (let num of nums) {
    if (num > maxNum) {
      maxNum = num;
      result = 1;
    } else if (num == maxNum) {
      result++;
    }
  }
  return result;
}

console.log(maxFrequency([1, 4, 5], 1, 2)); // 2
console.log(maxFrequency([5, 11, 20, 20], 5, 1)); // 2
console.log(maxFrequency([18, 57], 97, 2)); // 2
