function shortestSubarray(nums: number[], k: number): number {
  let sub: number[] = [];
  let sum: number = 0;
  let index: number = 0;

  while (index < nums.length && sum < k) {
    if (nums[index] == k) {
      return 1;
    } else if (nums[index] > k) {
      sum = 0;
      sub = [];
      index++;
      continue;
    } else if (nums[index] > k - sum) {
      console.log(sub, sum, nums[index], k - sum);
      sum -= sub.shift()!;
    }

    sub.push(nums[index]);
    sum += nums[index];

    index++;
  }
  console.log(sub, sum);
  return sum >= k ? sub.length : -1;
}

console.log(shortestSubarray([48, 99, 37, 4, -31], 140) == 2);
