function minStartValue(nums: number[]): number {
  if (nums.length == 0) return 0;

  let result: number = 2;

  while (true) {
    let sum: number = result + nums[0];
    let index: number = 1;

    while (index < nums.length && sum >= 1) {
      sum += nums[index];
      if (sum < 1) break;

      index++;
    }

    if (index == nums.length) break;

    result++;
  }

  return result;
}

console.log(minStartValue([1, -2, -3])); // 5
